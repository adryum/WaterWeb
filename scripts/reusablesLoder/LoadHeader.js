fetch('/pages/reusables/Header.html').then(function (response) {
	if (response.ok) {
		return response.text();
	}
	throw response;
}).then(function (text) {
    // Stuff after fetching the page
    let pageHeader = document.querySelector('header');
    let takenHTML = document.createElement('header-nav');
    takenHTML.innerHTML = text;
    pageHeader.appendChild(takenHTML);
});