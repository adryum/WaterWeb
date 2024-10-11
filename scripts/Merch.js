let learnMoreButtons = document.querySelectorAll('.learn-more');
let isModalShown = false;

let pinkShit = document.querySelector('#modal');
let closeModalWindowButton = document
    .querySelector('#modal-close')
    .addEventListener("click", () => pinkShit.style.display = "none");


learnMoreButtons.forEach(button => {
    // For now
    button.addEventListener("click", () => showMeModalDescription(
        button.children[0].children[0].innerHTML,
        button.children[0].children[1].innerHTML,
    ));
});

function showMeModalDescription(name, description) {
    pinkShit.style.display = "flex";
    // sets first 2 children values
    pinkShit.children[0].innerHTML = name;
    pinkShit.children[1].innerHTML = description;
    console.log(name, description);
}

let root = document.querySelector(':root');

let checkbox = document.querySelector("input[id=dark-mode]");

checkbox.addEventListener('change', function() {
  if (this.checked) {
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
});