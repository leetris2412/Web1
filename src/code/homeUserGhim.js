const quantityGhim = document.querySelectorAll('.quantity-ghim')

// window.addEventListener('DOMContentLoaded', () => {
//     const postArrayGhim = JSON.stringify(arrayGhim);
//     localStorage.setItem('Ghim', postArrayGhim);
// });

// let arrayGhim = [];

window.addEventListener('DOMContentLoaded', () => {
    const dataGhim = localStorage.getItem('Ghim');
    arrayGhim = JSON.parse(dataGhim);
    handleReloadGhim(arrayGhim?arrayGhim.length:0);
    renderGhimActive(arrayGhim);
})

function findCarInListCar(nameCar){
    for(let i = 0 ; i < Cars.length ; i++){
        if(Cars[i].ten == nameCar){
            return Cars[i];
        }
    }
}

function handleCheckGhim(check, nameCar, iconId){
    if(check){
        const infoCar = findCarInListCar(nameCar);

        arrayGhim.push(infoCar);

        handleReloadGhim(arrayGhim?arrayGhim.length:0);
        localStorage.setItem('Ghim', JSON.stringify(arrayGhim));
        let icon = document.getElementById(`iconGhim-${infoCar.id}`);
        icon.style.color = 'darkred';
    } else {
        let icon = document.getElementById(`iconGhim-${iconId}`);
        for (let i = 0; i < arrayGhim.length; i++) {
            if (arrayGhim[i].ten == nameCar) {
                icon.style.color = 'black';
                arrayGhim.splice(i, 1);
            }
        }
        handleReloadGhim(arrayGhim?arrayGhim.length:0);
        localStorage.setItem('Ghim', JSON.stringify(arrayGhim));
    }
}

function renderGhimActive(arrayGhim){

    if(arrayGhim){
        for(let i = 0 ; i < arrayGhim.length; i++){
            let icon = document.getElementById(`iconGhim-${arrayGhim[i].id}`);
    
            if(icon){
                icon.style.color = 'darkred';
            }
        }
    } else {
        console.log('render Ghim ACtive is not valid')
    }
}

const handleChitiet = (nameCar) => {
    let check = true;
    let iconId;
    for(let i = 0 ; i < arrayGhim.length ; i++){
        if(arrayGhim[i].ten == nameCar){
            iconId = arrayGhim[i].id;
            check = !check;
        }
    }
    handleCheckGhim(check, nameCar, iconId);
}