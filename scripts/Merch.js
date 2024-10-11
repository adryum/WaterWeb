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

let checkboxes = document.querySelectorAll("input[class=dark-mode]");
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        console.log('aweawda')
        root.style.setProperty('--gamburger-color', '#0F4C75');
        root.style.setProperty('--footer-color', '#3282B8');
        root.style.setProperty('--header-color', '#3282B8');
        root.style.setProperty('--main-color', '#1B262C');
        root.style.setProperty('--text-color', '#BBE1FA');
      } else {
        console.log('eeeee')

        root.style.setProperty('--gamburger-color', '#71C9CE');
        root.style.setProperty('--footer-color', '#71C9CE');
        root.style.setProperty('--header-color', '#71C9CE');
        root.style.setProperty('--main-color', '#E3FDFD');
        root.style.setProperty('--text-color', '#000000');
      }
    })
});
