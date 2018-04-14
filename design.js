// brands slideshow 
// tutorial for slideshow from W3schools
var slideIndex = 0; // shows how many slides are going to show
showSlides(); 

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("brands_slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // apply no style to the slideshow
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// testimonials slideshow
$(".carousel").carousel({
    interval: 5000, // the time between each slide
    keyboard: true, // user can use the controls keyboard to pass to next slider
    pause: "hover", //when user pause the mouse over the slide this stop
    ride: false, //autoplay setting
});

// modalbox decaring functions
// try to implement the esc button on keyboard, but in some browsers give an error
$("#ourModal").modal({
    keyboard: false, //when user press esc the modal box close
    show: false, //only initializate when user press on button
});