// brands slideshow 

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

// modal box for the contact button

var modal = document.getElementById("modal");//modal
var btn = document.getElementById("btn_contact"); // button
var span = document.getElementsByClassName("close")[0]; //close btn

btn.onClick = function () {
    modal.style.display = "block";
}

span.onClick = function () {
    modal.style.display = "none";
}

window.onClick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}