const quantityCart = document.querySelectorAll('.quantity-cart');

// window.addEventListener('DOMContentLoaded', () => {
//     const postArrayCart = JSON.stringify(arrayCart);
//     localStorage.setItem('Cart', postArrayCart);
// })

// let arrayCart = [];

window.addEventListener('DOMContentLoaded', () => {
    const dataCart = localStorage.getItem('Cart');
    arrayCart = JSON.parse(dataCart);
    handleReloadCart(arrayCart?arrayCart.length:0);
    renderCartActive(arrayCart);
})


function findCarInListCar(nameCar){
    for(let i = 0 ; i < Cars.length ; i++){
        if(Cars[i].ten == nameCar){
            return Cars[i];
        }
    }
}

function handleCheckCart(check, nameCar, iconId){
    if(check){
        const infoCar = findCarInListCar(nameCar);

        arrayCart.push(infoCar);

        handleReloadCart(arrayCart?arrayCart.length:0);
        localStorage.setItem('Cart', JSON.stringify(arrayCart));
        let icon = document.getElementById(`iconCart-${infoCar.id}`);
        icon.style.color = 'darkred';
    } else {
        let icon = document.getElementById(`iconCart-${iconId}`);
        for (let i = 0; i < arrayCart.length; i++) {
            if (arrayCart[i].ten == nameCar) {
                icon.style.color = 'black';
                arrayCart.splice(i, 1);
            }
        }
        handleReloadCart(arrayCart?arrayCart.length:0);
        localStorage.setItem('Cart', JSON.stringify(arrayCart));
    }
}

// function handleCheckCart(check, nameCar, iconId){
//     if(check){
//         const infoCar = findCarInListCar(nameCar);

//         arrayCart.push(infoCar);

//         quantityCart.innerText = `${arrayCart.length}`;
//         localStorage.setItem('Cart', JSON.stringify(arrayCart));
//         let icon = document.getElementById(`iconCart-${carCurrent.id}`);
//         let button = document.getElementById('button-cart-car');
//         button.style.backgroundColor = 'darkred';
//         icon.style.color = 'black';
//     } else {
//         let icon = document.getElementById(`iconCart-${carCurrent.id}`);
//         let button = document.getElementById('button-cart-car');
//         for (let i = 0; i < arrayCart.length; i++) {
//             if (arrayCart[i].ten == nameCar) {
//                 button.style.backgroundColor = 'goldenrod';
//                 icon.style.color = 'white';
//                 arrayCart.splice(i, 1);
//             }
//         }
//         quantityCart.innerText = `${arrayCart.length}`;
//         localStorage.setItem('Cart', JSON.stringify(arrayCart));
//     }
// }

function renderCartActive(arrayCart){

    if(arrayCart){
        for(let i = 0 ; i < arrayCart.length; i++){
            let icon = document.getElementById(`iconCart-${arrayCart[i].id}`);
    
            if(icon){
                icon.style.color = 'darkred';
            }
        }
    } else {
        console.log('render Cart active is not valid')
    }
}

const handleChitietCart = (nameCar) => {
    let check = true;
    let iconId;
    for(let i = 0 ; i < arrayCart.length ; i++){
        if(arrayCart[i].ten == nameCar){
            iconId = arrayCart[i].id;
            check = !check;
        }
    }
    handleCheckCart(check, nameCar, iconId);
}