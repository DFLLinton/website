let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let slidetracker = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slidetracker.length; i++) {
    slidetracker[i].className = slidetracker[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  slidetracker[slideIndex-1].className += " active";
}
