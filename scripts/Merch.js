let root = document.querySelector(':root');

// Left side bar
let shownSidebar = true;
let sidebar = document.querySelector("#sidebar");
let phoneSidebar = document.querySelector("#phone-sidebar");
document.querySelectorAll(".toggle-sidebar").forEach(button => {
    button.addEventListener(
        "click",
        () => {
            shownSidebar = !shownSidebar
            if (!shownSidebar) {
                sidebar.style.position = "absolute";
                sidebar.style.left = "-340px";

                phoneSidebar.style.left = "-450px";
            } else {
                sidebar.style.position = "relative";
                sidebar.style.left = "0px";

                phoneSidebar.style.left = "0px";
            }
        }
    );
});

// Dark mode
let darkMode = false;
document.querySelectorAll(".dark-mode").forEach(modeSwitch => {
    modeSwitch.addEventListener(
        "click",
        () => {
            darkMode = !darkMode
            if (darkMode) {
                root.style.setProperty('--gamburger-color', '#0F4C75');
                root.style.setProperty('--footer-color', '#3282B8');
                root.style.setProperty('--header-color', '#3282B8');
                root.style.setProperty('--main-color', '#1B262C');
                root.style.setProperty('--text-color', '#BBE1FA');
            } else {
                root.style.setProperty('--gamburger-color', '#71C9CE');
                root.style.setProperty('--footer-color', '#71C9CE');
                root.style.setProperty('--header-color', '#71C9CE');
                root.style.setProperty('--main-color', '#E3FDFD');
                root.style.setProperty('--text-color', '#000000');
            }
        }
    );
});

// Modal
let isModalShown = false;
let modalWindow = document.querySelector('#modal');

function showMeModalDescription(name, description) {
    modalWindow.style.display = "flex";
    // sets first 2 children values
    modalWindow.children[0].innerHTML = name;
    modalWindow.children[1].innerHTML = description;
    console.log(name, description);
}

document.querySelectorAll('.learn-more').forEach(button => {
    // For now
    button.addEventListener("click", () => showMeModalDescription(
        button.children[0].children[0].innerHTML,
        button.children[0].children[1].innerHTML,
    ));
});

document.querySelector('#modal-close').addEventListener("click", () => modalWindow.style.display = "none");