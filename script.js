const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const textBox2 = document.getElementById('text-box2');
const textBox3 = document.getElementById('text-box3');
const textBox4 = document.getElementById('text-box4');
const textBox5 = document.getElementById('text-box5');
let modal = document.getElementById("myModal");
let usedReminder;

// Check if reminder for dark mode has been used
document.onload = checkReminder();

// If it has been used, hide it
function checkReminder() {
    if (localStorage.getItem('reminder')) {
        modal.hidden = true;
    }
}

// When the user clicks outside, close it
window.onclick = function () {
    modal.hidden = true;
    usedReminder = true;
    localStorage.setItem('reminder', usedReminder);
}

// Change pictures 
function imageMode(colour) {
    image1.src = `img/undraw_proud_coder_${colour}.svg`;
    image2.src = `img/undraw_feeling_proud_${colour}.svg`;
    image3.src = `img/undraw_progress_data_${colour}.svg`;
}

function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox2.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox3.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox4.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox5.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
}

function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox2.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox3.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox4.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox5.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
}

// Switch Theme
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'notdark');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}

