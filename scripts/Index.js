let root = document.querySelector(':root');

let darkMode = true;
document.querySelector('dark-mode').addEventListener('click', () => {
    darkMode = !darkMode;
    root.style.setProperty('--light-dark-color', darkMode? 'rgb(17 17 17)' : '#F9F9F9');
    root.style.setProperty('--mid-dark-color', darkMode? 'rgb(13, 13, 13)' : '#F9F9F9');
    root.style.setProperty('--dark-dark-color', darkMode? 'rgb(0,0,0)' : '#212121');
    root.style.setProperty('--dropdown-color', darkMode? 'rgb(30, 30, 30)' : '#212121');
    root.style.setProperty('--main-color', darkMode? 'rgb(41, 41, 41)' : '#F9F9F9');
    root.style.setProperty('--text-color', darkMode? 'rgb(240, 248, 255)' : 'rgb(0,0,0)');
});
