let slideIndex = 0;
const slides = document.getElementsByClassName("profile-slide");
const dots = document.getElementsByClassName("dot");

function showSlides() {
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    // Reset dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    
    // Display current slide and dot
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active-dot";
    
    setTimeout(showSlides, 4000); // Tukar imej setiap 4 saat (4000ms)
}

function currentSlide(n) {
    clearTimeout(window.slideshowTimeout); // Clear auto-slide
    slideIndex = n - 1; 
    showSlidesManual(n);
    window.slideshowTimeout = setTimeout(showSlides, 4000); // Resume auto-slide
}

function showSlidesManual(n) {
    let i;
    if (n > slides.length) { n = 1 }
    if (n < 1) { n = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    slides[n-1].style.display = "block";
    dots[n-1].className += " active-dot";
    slideIndex = n;
}

// Mula Slideshow apabila halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    if (slides.length > 0) {
        showSlidesManual(1); // Paparkan gambar pertama secara manual
        window.slideshowTimeout = setTimeout(showSlides, 4000); // Mula auto-slide
    }
});