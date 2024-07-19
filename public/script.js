// 1st Division
let fontSize = 17; // Default font size in pixels

// function toggleMode() {
//     const body = document.body;
//     body.classList.toggle('dark-mode');
// }

function increaseFontSize() {
    fontSize += 2;
    document.body.style.fontSize = fontSize + 'px';
}

function decreaseFontSize() {
    if (fontSize > 10) { // Ensure font size doesn't go too small
        fontSize -= 2;
        document.body.style.fontSize = fontSize + 'px';
    }
}

function resetFontSize() {
    fontSize = 16;
    document.body.style.fontSize = fontSize + 'px';
}


// 2nd and 3rd Division
 // Get the hamburger icon
 var navToggle = document.getElementById('nav-toggle');

 // Get the third division
 var division3 = document.getElementById('division3');

 // Add click event listener to the hamburger icon
 navToggle.addEventListener('click', function() {
     // Toggle the visibility of the third division
     division3.classList.toggle('active');
 });

 // Add resize event listener to the window object
 window.addEventListener('resize', function() {
     // If the viewport width is more than 600px
     if (window.innerWidth > 600) {
         // Remove the active class from the third division
         division3.classList.remove('active');
     }
 });


 


// 4th Division
// Function to handle automatic sliding of photos
function slidePhotos() {
    const slides = document.querySelector('.slides');
    const slideWidth = slides.firstElementChild.clientWidth; // Width of each slide

    // Function to transition to next slide
    function nextSlide() {
        slides.style.transition = 'transform 0.6s ease-in-out';
        slides.style.transform = `translateX(-${slideWidth}px)`;
    }

    // Transition to next slide after 3 seconds
    setInterval(() => {
        nextSlide();

        // Reset slide position to loop through photos
        setTimeout(() => {
            slides.style.transition = 'none';
            slides.style.transform = 'translateX(0)';
            slides.appendChild(slides.firstElementChild);
        }, 500);
    }, 3000);
}

// Initialize photo slider
slidePhotos();




// 9th Division
 // Get all box elements
        const boxes = document.querySelectorAll('.box');

        // Add event listener to each box
        boxes.forEach(box => {
            // Add click event listener
            box.addEventListener('click', () => {
                // Redirect to another page when box is clicked
                window.location.href = box.dataset.link;
            });
        });