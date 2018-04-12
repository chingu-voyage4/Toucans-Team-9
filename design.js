// brands slideshow 
// tuorial for slideshow from W3schools
var slideIndex = 0; // shows how many slides are going to show
showSlides(); 

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("brands_slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// testimonials slideshow
$(".carousel").carousel({
    interval: 5000,
    keyboard: true,
    pause: "hover",
    ride: false,
});

// modalbox decaring functions

$("#ourModal").modal({
    keyboard: false,
});