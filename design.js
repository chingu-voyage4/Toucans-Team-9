// brands slideshow 
// tutorial for slideshow from W3schools
var slideIndex = 0; // shows how many slides are going to show
showSlides(); 

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("brands_slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // apply no style to the slide show
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// testimonials slideshow
$(".carousel").carousel({
    interval: 5000, // time between slides
    keyboard: true, // when user uses the control keyboard, the slide move to next one
    pause: "hover", // when user mouse over the slide this one stops
    ride: false, // autoplay setting 
});

// modalbox declaring functions
// I try to make the modal box close, when user enter esc, but in some browsers that one doesn't work
$("#ourModal").modal({
    keyboard: false, // when user press esc the modal close
    show: false, //only initializate when user press the button   
});