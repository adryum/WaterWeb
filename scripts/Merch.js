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