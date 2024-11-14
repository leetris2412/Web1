// const quantityGhim = document.getElementById('quantity-ghim')

// let arrayGhim = [];

window.addEventListener('DOMContentLoaded', () => {
    const dataGhim = localStorage.getItem('Ghim');
    const dataCarCurrent = localStorage.getItem('carCurrent');
    const carInformation = JSON.parse(dataCarCurrent);
    arrayGhim = JSON.parse(dataGhim);
    handleReloadGhim(arrayGhim?arrayGhim.length:0);
    // renderGhimActive2(arrayGhim, carInformation);
})

/* Handle Ghim */

function renderGhimActive2(arrayGhim, carInformation){
    let icon = document.getElementById(`iconGhim-${carInformation.id}`);
    let button = document.getElementById('button-ghim-car');
    for(let i = 0 ; i < arrayGhim.length; i++){
        if(arrayGhim[i].id == carInformation.id){
            button.style.backgroundColor = 'darkred';
            icon.style.color = 'black';
        }
    }
}

function findCarInListCar(nameCar){
    for(let i = 0 ; i < Cars.length ; i++){
        if(Cars[i].ten == nameCar){
            return Cars[i];
        }
    }
}

function handleCheckGhim2(check, nameCar, iconId){
    if(check){
        const infoCar = findCarInListCar(nameCar);

        arrayGhim.push(infoCar);
        handleReloadGhim(arrayGhim?arrayGhim.length:0);
        localStorage.setItem('Ghim', JSON.stringify(arrayGhim));
        let icon = document.getElementById(`iconGhim-${carCurrent.id}`);
        let button = document.getElementById('button-ghim-car');
        button.style.backgroundColor = 'darkred';
        icon.style.color = 'black';
    } else {
        let icon = document.getElementById(`iconGhim-${carCurrent.id}`);
        let button = document.getElementById('button-ghim-car');
        for (let i = 0; i < arrayGhim.length; i++) {
            if (arrayGhim[i].ten == nameCar) {
                icon.style.color = 'white';
                button.style.backgroundColor = 'goldenrod';
                arrayGhim.splice(i, 1);
            }
        }
        handleReloadGhim(arrayGhim?arrayGhim.length:0);
        localStorage.setItem('Ghim', JSON.stringify(arrayGhim));
    }
}

const handleChitiet2 = (nameCar) => {
    let check = true;
    let iconId;
    for(let i = 0 ; i < arrayGhim.length ; i++){
        if(arrayGhim[i].ten == nameCar){
            iconId = arrayGhim[i].id;
            check = !check;
        }
    }
    handleCheckGhim2(check, nameCar, iconId);
}



/* handle Cart */

// const quantityCart = document.getElementById('quantity-cart');

// let arrayCart = [];

window.addEventListener('DOMContentLoaded', () => {
    const dataCart = localStorage.getItem('Cart');
    const dataCarCurrent = localStorage.getItem('carCurrent');
    const carInformation = JSON.parse(dataCarCurrent);
    arrayCart = JSON.parse(dataCart);
    handleReloadCart(arrayCart?arrayCart.length:0);
    // renderCartActive(arrayCart, carInformation);
})

function handleCheckCart2(check, nameCar, iconId){
    if(check){
        const infoCar = findCarInListCar(nameCar);

        arrayCart.push(infoCar);

        handleReloadCart(arrayCart?arrayCart.length:0);
        localStorage.setItem('Cart', JSON.stringify(arrayCart));
        let icon = document.getElementById(`iconCart-${carCurrent.id}`);
        let button = document.getElementById('button-cart-car');
        button.style.backgroundColor = 'darkred';
        icon.style.color = 'black';
    } else {
        let icon = document.getElementById(`iconCart-${carCurrent.id}`);
        let button = document.getElementById('button-cart-car');
        for (let i = 0; i < arrayCart.length; i++) {
            if (arrayCart[i].ten == nameCar) {
                button.style.backgroundColor = 'goldenrod';
                icon.style.color = 'white';
                arrayCart.splice(i, 1);
            }
        }
        handleReloadCart(arrayCart?arrayCart.length:0);
        localStorage.setItem('Cart', JSON.stringify(arrayCart));
    }
}

function renderCartActive2(arrayCart, carInformation){
    let icon = document.getElementById(`iconCart-${carInformation.id}`);
    let button = document.getElementById('button-cart-car');
    for(let i = 0 ; i < arrayCart.length; i++){
        if(arrayCart[i].id == carInformation.id){
            button.style.backgroundColor = 'darkred';
            icon.style.color = 'black';
        }
    }
}


const handleChitietCart2 = (nameCar) => {
    let check = true;
    let iconId;
    for(let i = 0 ; i < arrayCart.length ; i++){
        if(arrayCart[i].ten == nameCar){
            iconId = arrayCart[i].id;
            check = !check;
        }
    }
    handleCheckCart2(check, nameCar, iconId);
}


/* render */
let listPromose = [];
function getProposeByCarCurrent(carCurrent, Cars){
    let list = [];
    if(carCurrent.id == 1){
        for(let i = carCurrent.id; i <= 3 ; i++){
            list.push(Cars[i]);
        }
    } else if(carCurrent.id == Cars.length){
        for(let i = Cars.length - 2; i >= Cars.length - 4; i--){
            list.push(Cars[i]);
        }
    } else if(carCurrent.id == 2){
        list.push(Cars[0])
        for(let i = carCurrent.id; i <= 3 ; i++){
            list.push(Cars[i]);
        }
    } else if(carCurrent.id == 3){
        for(let i = carCurrent.id - 3; i <= 1; i++){
            list.push(Cars[i]);
        }
        list.push(Cars[carCurrent.id]);
    } else {
        for(let i = carCurrent.id - 4; i <= carCurrent.id - 2; i++){
            list.push(Cars[i]);
        }
    }
    return list;
}

function handleFindCarById(idCurrent) {
    for(let i = 0; i < Cars.length; i++){
        if(Cars[i].id == idCurrent){
            return Cars[i];
        }
    }
}

const handleClick = (idCurrent) => {
    const newCarCurrent = handleFindCarById(idCurrent);
    const postCarCurrent = JSON.stringify(newCarCurrent);
    if(postCarCurrent){
        localStorage.setItem('carCurrent', postCarCurrent);
    }
}

const handleReloadCarInformation = (idCar) =>{
    console.log('reload');
    const itemIndex = Cars.findIndex(item => item.id === idCar);

      const carCurrentInformation = JSON.stringify(Cars[itemIndex]);

      if(carCurrentInformation){
        localStorage.setItem('carCurrent', carCurrentInformation);

      } else {
        console.log('car is not found');
      }


  const dataCarCurrent = localStorage.getItem('carCurrent');

    if(dataCarCurrent){
        carCurrent = JSON.parse(dataCarCurrent);
        renderCarCurrent(carCurrent);
    } else {
        console.log('not found data carCurrent');
    }


    const dataCart = localStorage.getItem('Cart');
    const dataCarCurrent2 = localStorage.getItem('carCurrent');
    const carInformation = JSON.parse(dataCarCurrent2);
    arrayCart = JSON.parse(dataCart);
    handleReloadCart(arrayCart?arrayCart.length:0);
    renderCartActive2(arrayCart, carInformation);
    renderGhimActive2(arrayGhim, carInformation);

    renderGhimActive(arrayGhim);
    renderCartActive(arrayCart);
}

function renderMiddle3Propose(ulMiddle3Propose, listCar){
    ul = '';
    for(let i = 0; i < listCar.length; i++){
        ul +=
        `
            <li value="${listCar[i].id}" onclick="handleClick(this.value)">
                <button value="${listCar[i].id}" onclick="handleReloadCarInformation(this.value)">
                    <div class="list-img">
                        <img src="${listCar[i].hinhanh}">
                        <div></div>
                    </div>
                    <div class="list-name">
                        <p>${listCar[i].ten}</p>
                    </div>
                </button>
            </li>
        `
    }
    ulMiddle3Propose.innerHTML = ul;
}


const renderPropose = (ulMiddle3Propose, carCurrent, Cars) => {
    getProposeByCarCurrent(carCurrent, Cars);
    listPromose = getProposeByCarCurrent(carCurrent, Cars);
    renderMiddle3Propose(ulMiddle3Propose, listPromose);
}