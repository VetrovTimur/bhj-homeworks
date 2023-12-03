let div = document.querySelectorAll('.reveal');
document.addEventListener('scroll', () => {
    div.forEach((elem) => {
        const viewportHeight = window.innerHeight;
        console.log(viewportHeight)
        const elementTop = elem.getBoundingClientRect().top;
        console.log(elementTop)
        if (elementTop < viewportHeight) {
            elem.classList.add('reveal_active');
        } else {
            elem.classList.remove('reveal_active');
        }
    })
});