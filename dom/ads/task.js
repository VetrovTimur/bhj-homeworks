let caseArr = Array.from(document.querySelectorAll('.rotator__case'));

let rotate = function() {
    let activeCaseIndex = caseArr.findIndex((elem, )=> {
        return elem.classList.contains('rotator__case_active')
    });

    caseArr[activeCaseIndex].classList.remove('rotator__case_active');

    if (activeCaseIndex < (caseArr.length - 1)) {
        caseArr[activeCaseIndex + 1].classList.add('rotator__case_active');
        caseArr[activeCaseIndex + 1].style.color = `${ caseArr[activeCaseIndex + 1].getAttribute('data-color')}`;
    } else {
        caseArr[0].classList.add('rotator__case_active');
        caseArr[activeCaseIndex + 1].style.color = `${ caseArr[activeCaseIndex + 1].getAttribute('data-color')}`; 
    } 
}

let timer = setInterval(rotate,1000)

// const cases = [...document.querySelectorAll('.rotator__case')];
// const activeCaseClass = 'rotator__case_active';

// let currentIndex = cases.findIndex(item => item.classList.contains(activeCaseClass));

// const getNextIndex = () => currentIndex === cases.length - 1 ? 0 : currentIndex + 1;

// const toggleNextCase = () => {
//   const currentCase = cases[currentIndex];
  
//   const nextIndex = getNextIndex();
//   const nextCase = cases[nextIndex];
  
//   currentCase.classList.remove(activeCaseClass);
//   nextCase.classList.add(activeCaseClass);
//   nextCase.style.color = nextCase.dataset.color;
  
//   currentIndex = nextIndex;
  
//   scheduleCase(nextIndex);
// }

// const scheduleCase = index => {
//   const item = cases[index];
  
//   const speed = +item.dataset.speed;
//   setTimeout(toggleNextCase, speed);
// }

// scheduleCase(getNextIndex());