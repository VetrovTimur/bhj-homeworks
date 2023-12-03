let sizeArr = document.querySelectorAll('.font-size');
let colorArr = document.querySelectorAll('.colorText');
let bgArr = document.querySelectorAll('.bg');

let reader = document.querySelector('.book');

sizeArr.forEach((elem, index) => {
    elem.addEventListener('click', (event) => {
        event.preventDefault();
        showSize(index);
    })
});

colorArr.forEach((elem, index) => {
    elem.addEventListener('click', (event) => {
        event.preventDefault();
        showColor(index);
    })
});

bgArr.forEach((elem, index) => {
    elem.addEventListener('click', (event) => {
        event.preventDefault();
        showBg(index);
    })
});

function showBg(index) {
    bgArr.forEach((elem, i) => {
        if (index == i) {
            elem.classList.add('color_active');
        } else {
            elem.classList.remove('color_active');
        }
    })
    if (index == 0) {
        reader.classList.add('bg_color_black')
        reader.classList.remove('bg_color_gray','bg_color_white' )
    } else if (index == 2) {
        reader.classList.remove('bg_color_black')
        reader.classList.add('bg_color_white')
    } else {
        reader.classList.remove('bg_color_black','bg_color_white' )
        reader.classList.add('bg_color_gray')
    }
}

function showColor(index) {
    colorArr.forEach((elem, i) => {
        if (index == i) {
            elem.classList.add('color_active');
            reader.style.color = `${elem.getAttribute('data-text-color')}` 
        } else {
            elem.classList.remove('color_active');
        }
    })
}

function showSize(index) {
    sizeArr.forEach((elem, i) => {
        if (index == i) {
            elem.classList.add('font-size_active'); 
        } else {
            elem.classList.remove('font-size_active');
        }
    })
    if (index == 0) {
        reader.classList.add('book_fs-small')
    } else if (index == 2) {
        reader.classList.remove('book_fs-small')
        reader.classList.add('book_fs-big')
    } else {
        reader.classList.remove('book_fs-small','book_fs-big' )
    }
}
