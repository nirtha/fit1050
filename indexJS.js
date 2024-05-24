// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

// Function to toggle dark mode
function toggleDarkMode() {
    // Toggle dark mode class on body
    CSbody.classList.toggle("dark-mode");

    // Toggle visibility of moon and sun icons
    document.querySelector('.cs-moon').classList.toggle("hidden");
    document.querySelector('.cs-sun').classList.toggle("hidden");

    // Update local storage to remember user preference
    const darkModeEnabled = CSbody.classList.contains("dark-mode");
    localStorage.setItem('darkMode', darkModeEnabled ? 'enabled' : 'disabled');

    // Log the current state of dark mode to the console
    console.log(`Dark mode toggled: ${darkModeEnabled ? 'enabled' : 'disabled'}`);
}

// Event listener for moon icon click
document.querySelector('.cs-moon').addEventListener('click', toggleDarkMode);

// Event listener for hamburger menu click
CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar
document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
        document.querySelector('body').classList.add('scroll')
    } else {
        document.querySelector('body').classList.remove('scroll')
    }
});
