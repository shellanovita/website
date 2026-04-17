// script.js

// 1. Animasi saat Scroll (Scroll Reveal)
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// 2. Efek Ketik (Typewriter) untuk Judul di Home
const textElement = document.getElementById('typing-text');
if(textElement) {
    const text = "Bringing Jazz to Gen Z...";
    let idx = 0;
    
    function writeText() {
        textElement.innerText = text.slice(0, idx);
        idx++;
        
        if (idx > text.length) {
            // Reset atau berhenti
             setTimeout(() => { idx = 0; }, 2000);
        }
        setTimeout(writeText, 150);
    }
    writeText();
}