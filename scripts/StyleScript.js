let cardTitles = document.getElementsByClassName("card-header");
let cardDescriptions = document.getElementsByClassName("card-footer");

// Moves text just outside the box, so it's not showing in the un-hovered card
for (const title of cardTitles) {
    title.style.top = `-${title.offsetHeight}px`;
}
for (const description of cardDescriptions) {
    description.style.bottom = `-${description.offsetHeight}px`;
}