let root = document.querySelector(':root');

let darkMode = true;
document.querySelector('dark-mode').addEventListener('click', () => {
    darkMode = !darkMode;
    root.style.setProperty('--hover-brightness', darkMode? '180%' : '80%');
    root.style.setProperty('--light-dark-color', darkMode? 'rgb(17 17 17)' : 'rgb(206, 171, 147)');
    root.style.setProperty('--mid-dark-color', darkMode? 'rgb(13, 13, 13)' : 'rgb(227, 202, 165)');
    root.style.setProperty('--dark-dark-color', darkMode? 'rgb(0,0,0)' : 'rgb(173, 139, 115)');
    root.style.setProperty('--dropdown-color', darkMode? 'rgb(30, 30, 30)' : 'rgb(173, 139, 115)');
    root.style.setProperty('--main-color', darkMode? 'rgb(41, 41, 41)' : 'rgb(255, 250, 233)');
    root.style.setProperty('--text-color', darkMode? 'rgb(240, 248, 255)' : 'rgb(0,0,0)');
});
