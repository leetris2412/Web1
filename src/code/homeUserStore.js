const background = document.getElementById('background');
const topMauXe = document.getElementById('top-mauxe');
const topThongTin = document.getElementById('top-thongtin');
const topSearch = document.getElementById('top-search');

topMauXe.addEventListener('click', () => {
    window.scrollTo({
        top : positionSrollSearch,
        behavior : 'smooth',
    })
})

topThongTin.addEventListener('click', () => {
    window.scrollTo({
        top : 4600,
        behavior : 'smooth',
    })
})

topSearch.addEventListener('click', () => {
    window.scrollTo({
        top : 1360,
        behavior : 'smooth',
    })
    inputSearch.focus();
})

let count = 0;

const paginationBackground = () => {
    if(count >= 4){
        count = 0;
    }

    let checkLeft = listImg[count].offsetLeft;
    background.style.left = -checkLeft + 'px';
    count++;
}
setInterval(() => {
    paginationBackground();
}, 4000);

const renderBackground = () => {
    let listBackground = '';
    for(let i = 1; i <= 4; i++){
        listBackground +=
        `<img class='background-img' src="background(${i}).jpg" alt="">`;
    }
    background.innerHTML = listBackground;
    listImg = document.querySelectorAll('#background .background-img');
}


window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    const top = document.querySelector('.wrapper-body-store .top');
    const middle = document.getElementById('middle');
    const middleFilter = document.querySelector('.wrapper-body-store .middle-filter');
    const middleItem = document.getElementById('middle-item');
    const middleInformation1Img = document.querySelector('.wrapper-body-store .information-1-img');
    const middleInformation1Content = document.querySelector('.wrapper-body-store .information-1-content');
    const middleInformation2Img = document.querySelector('.wrapper-body-store .information-2-img');
    const middleInformation2Content = document.querySelector('.wrapper-body-store .information-2-content');

    const bottomWrapperBodyHome = document.querySelector('.wrapper-body-home #bottom');

    const star1 = document.querySelector('.reason1');
    const star2 = document.querySelector('.reason2');
    const star3 = document.querySelector('.reason3');
    const star4 = document.querySelector('.reason4');
    const star5 = document.querySelector('.reason5');
    const listStar = [
        star1, star2, star3, star4, star5
    ]

    const bottom = document.getElementById('bottom');

    if(scrollY > 0){
        top.style.backgroundColor = 'white';
        top.style.height = '75px';
    } else {
        top.style.backgroundColor = 'transparent';
        top.style.height = '70px';
    }

    if(scrollY > 351){
        middle.style.transform = 'translateY(0)';
    } else {
        middle.style.transform = 'translateY(-3%)';
    }

    if(scrollY > 500){
        bottomWrapperBodyHome.style.transform = 'translateY(0)'
    } else {
        bottomWrapperBodyHome.style.transform = 'translateY(5%)'
    }

    if(scrollY > 930){
        middleFilter.style.transform = 'translateY(0)';
    } else {
        middleFilter.style.transform = 'translateY(-5%)';
    }

    if(scrollY > 1755){
        middleItem.style.transform = 'translateY(0)';
    } else {
        middleItem.style.transform = 'translateY(-5%)';
    }

    if(scrollY > 2400){
        middleInformation1Img.style.transform = 'translateX(0)';
        middleInformation1Content.style.transform = 'translateX(0)';
    } else {
        middleInformation1Img.style.transform = 'translateX(-5%)';
        middleInformation1Content.style.transform = 'translateX(5%)';
    }

    if(scrollY > 3329){
        middleInformation2Img.style.transform = 'translateX(0)';
        middleInformation2Content.style.transform = 'translateX(0)';
    } else {
        middleInformation2Img.style.transform = 'translateX(5%)';
        middleInformation2Content.style.transform = 'translateX(-5%)';
    }

    if(scrollY > 3975){
        for(let i = 0; i < listStar.length; i++){
            setInterval(() => {
                listStar[i].style.transform = 'translateY(0)';
            }, i*700);
        }
    } else {
        for(let i = 0; i < listStar.length; i++){
            listStar[i].style.transform = 'translateY(10%)';
        }
    }

    // if(scrollY > 4550){
    //     top.style.display = 'none';
    //     bottom.style.transform = 'translateY(0)';
    // } else {
    //     top.style.display = 'block';
    //     bottom.style.transform = 'translateY(-2%)';
    // }
})

renderBackground();
paginationBackground();