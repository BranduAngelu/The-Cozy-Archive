const homeLink = document.getElementById('home-link');
const aboutmeLink = document.getElementById('aboutme-link');
const mypetsLink = document.getElementById('mypets-link');
const hobbiesLink = document.getElementById('hobbies-link');
const kittyLink = document.getElementById('kitty-link');
const chocoLink = document.getElementById('choco-link');
const leoLink = document.getElementById('leo-link');
const lokiLink = document.getElementById('loki-link');
const maxLink = document.getElementById('max-link');
const hobby1Link = document.getElementById('hobby1-link');
const hobby2Link = document.getElementById('hobby2-link');
const hobby3Link = document.getElementById('hobby3-link');
const hobby4Link = document.getElementById('hobby4-link');
const hobby5Link = document.getElementById('hobby5-link');

const homeSection = document.getElementById('home-section');
const aboutmeSection = document.getElementById('aboutme-section');
const mypetsSection = document.getElementById('mypets-section');
const hobbiesSection = document.getElementById('hobbies-section');
const kittySection = document.getElementById('kitty-section');
const chocoSection = document.getElementById('choco-section');
const leoSection = document.getElementById('leo-section');
const lokiSection = document.getElementById('loki-section');
const maxSection = document.getElementById('max-section');
const hobby1Section = document.getElementById('hobby1-section');
const hobby2Section = document.getElementById('hobby2-section');
const hobby3Section = document.getElementById('hobby3-section');
const hobby4Section = document.getElementById('hobby4-section');
const hobby5Section = document.getElementById('hobby5-section');

function hideAllSections() {
    homeSection.style.display = 'none';
    aboutmeSection.style.display = 'none';
    mypetsSection.style.display = 'none';
    hobbiesSection.style.display = 'none';
    kittySection.style.display = 'none';
    chocoSection.style.display = 'none';
    leoSection.style.display = 'none';
    lokiSection.style.display = 'none';
    maxSection.style.display = 'none';
    hobby1Section.style.display = 'none';
    hobby2Section.style.display = 'none';
    hobby3Section.style.display = 'none';
    hobby4Section.style.display = 'none';
    hobby5Section.style.display = 'none';
}

function showSection(section) {
    hideAllSections();

    switch(section) {
        case 'home': homeSection.style.display = 'block'; break;
        case 'aboutme': aboutmeSection.style.display = 'block'; break;
        case 'mypets': mypetsSection.style.display = 'block'; break;
        case 'hobbies': hobbiesSection.style.display = 'block'; break;
        case 'kitty': kittySection.style.display = 'block'; break;
        case 'choco': chocoSection.style.display = 'block'; break;
        case 'leo': leoSection.style.display = 'block'; break;
        case 'loki': lokiSection.style.display = 'block'; break;
        case 'max': maxSection.style.display = 'block'; break;
        case 'hobby1': hobby1Section.style.display = 'block'; break;
        case 'hobby2': hobby2Section.style.display = 'block'; break;
        case 'hobby3': hobby3Section.style.display = 'block'; break;
        case 'hobby4': hobby4Section.style.display = 'block'; break;
        case 'hobby5': hobby5Section.style.display = 'block'; break;
    }

    localStorage.setItem('activeSection', section);

    setTimeout(() => {
        goToTop();
    }, 0);
}

homeLink.addEventListener('click', (e) => { e.preventDefault(); showSection('home'); });
aboutmeLink.addEventListener('click', (e) => { e.preventDefault(); showSection('aboutme'); });
mypetsLink.addEventListener('click', (e) => { e.preventDefault(); showSection('mypets'); });
hobbiesLink.addEventListener('click', (e) => { e.preventDefault(); showSection('hobbies'); });
kittyLink.addEventListener('click', (e) => { e.preventDefault(); showSection('kitty'); });
chocoLink.addEventListener('click', (e) => { e.preventDefault(); showSection('choco'); });
leoLink.addEventListener('click', (e) => { e.preventDefault(); showSection('leo'); });
lokiLink.addEventListener('click', (e) => { e.preventDefault(); showSection('loki'); });
maxLink.addEventListener('click', (e) => { e.preventDefault(); showSection('max'); });
hobby1Link.addEventListener('click', (e) => { e.preventDefault(); showSection('hobby1'); });
hobby2Link.addEventListener('click', (e) => { e.preventDefault(); showSection('hobby2'); });
hobby3Link.addEventListener('click', (e) => { e.preventDefault(); showSection('hobby3'); });
hobby4Link.addEventListener('click', (e) => { e.preventDefault(); showSection('hobby4'); });
hobby5Link.addEventListener('click', (e) => { e.preventDefault(); showSection('hobby5'); });

window.addEventListener('DOMContentLoaded', () => {
    const active = localStorage.getItem('activeSection') || 'home';
    showSection(active);
});

function animateSection(section) {
    section.classList.remove('active');
    void section.offsetWidth;
    section.classList.add('active');
}

homeLink.addEventListener('click', () => {
    showSection('home');
    animateSection(homeSection);
});

aboutmeLink.addEventListener('click', () => {
    showSection('aboutme');
    animateSection(aboutmeSection);
});

mypetsLink.addEventListener('click', () => {
    showSection('mypets');
    animateSection(mypetsSection);
});

hobbiesLink.addEventListener('click', () => {
    showSection('hobbies');
    animateSection(hobbiesSection);
});

kittyLink.addEventListener('click', () => {
    showSection('kitty');
    animateSection(kittySection);
});

chocoLink.addEventListener('click', () => {
    showSection('choco');
    animateSection(chocoSection);
});

leoLink.addEventListener('click', () => {
    showSection('leo');
    animateSection(leoSection);
});

lokiLink.addEventListener('click', () => {
    showSection('loki');
    animateSection(lokiSection);
});

maxLink.addEventListener('click', () => {
    showSection('max');
    animateSection(maxSection);
});

hobby1Link.addEventListener('click', () => {
    showSection('hobby1');
    animateSection(hobby1Section);
});

hobby2Link.addEventListener('click', () => {
    showSection('hobby2');
    animateSection(hobby2Section);
});

hobby3Link.addEventListener('click', () => {
    showSection('hobby3');
    animateSection(hobby3Section);
});

hobby4Link.addEventListener('click', () => {
    showSection('hobby4');
    animateSection(hobby4Section);
});

hobby5Link.addEventListener('click', () => {
    showSection('hobby5');
    animateSection(hobby5Section);
});

function animateSection(section) {
    section.classList.remove('active');
    void section.offsetWidth;
    section.classList.add('active');
}

window.addEventListener('DOMContentLoaded', () => {
    const activeSection = localStorage.getItem('activeSection') || 'home';
    showSection(activeSection);
    const sectionEl = document.getElementById(activeSection + '-section');
    animateSection(sectionEl);
});

const savedSection = localStorage.getItem('activeSection') || 'home';
showSection(savedSection);

document.body.style.visibility = 'visible';

let currentSlide = 0;
const slides = document.querySelectorAll('.slider-slide');
const totalSlides = slides.length;
const wrapper = document.getElementById('sliderWrapper');
const dotsContainer = document.getElementById('sliderDots');

for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.className = 'slider-dot';
    if (i === 0) dot.classList.add('active');
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.slider-dot');

function updateSlider() {
    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function moveSlide(direction) {
    currentSlide += direction;
    
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    
    updateSlider();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

setInterval(() => {
    moveSlide(1);
}, 4000);

const backButtons = document.querySelectorAll('.goBackButton');

backButtons.forEach(button => {

    button.addEventListener('click', function() {

        showSection('mypets');
        animateSection(mypetsSection);

    });

});

document.querySelectorAll('.goBackButton2').forEach(button => {

    button.addEventListener('click', function() {

        showSection('hobbies');
        animateSection(hobbiesSection);

    });

});

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener("load", function () {
    window.scrollTo(0, 0);
});

function goToTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // fallback (for some layouts)
    window.scrollTo(0, 0);
}