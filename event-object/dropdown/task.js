
let btnDropdown = document.querySelector('.dropdown__value');
let listDropdown = document.querySelector('.dropdown__list');


btnDropdown.addEventListener('click', function(e) {
    listDropdown.classList.toggle('dropdown__list_active')
});

let linkDropdown = Array.from(document.querySelectorAll(".dropdown__link"));

linkDropdown.forEach((value) => {
    value.addEventListener('click', (e) => {
        e.preventDefault();
        btnDropdown.textContent = value.textContent
        listDropdown.classList.toggle('dropdown__list_active');
    });
});







