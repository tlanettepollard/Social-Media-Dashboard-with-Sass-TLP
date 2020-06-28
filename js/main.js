//Toggle Switch
// DOM Elements 
const themeToggle = document.getElementById('toggle');
const body = document.body;

//Apply the cached theme on reload 

const theme = localStorage.getItem('theme');
const isDark = localStorage.getItem('isDark');

if (theme) {
    body.classList.add(theme);
    isDark && body.classList.add('dark');
}

//Button Event Handler
themeToggle.onclick = () => {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
};