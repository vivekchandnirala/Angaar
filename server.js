// server.js

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./connect');
const person = require('./model');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Get the connection string from environment variables
const connectionString = process.env.MONGODB_URI;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
// Serve static files from the 'public' directory

// Route for rendering the index.ejs template
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/index.ejs', (req, res) => {
    res.render('register');
});

app.post('/submit', async (req, res) => {
    try {
        await person.create(req.body);
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.send("<h1>fill all data</h1>");
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
const start = async () => {
    try {
        await connectDB(connectionString).then(() => {
            console.log('Connected To Db.');
        });
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}
start();
