function findCarById(carId){
    for(let i = 0; i < Cars.length; i++){
        if(Cars[i].id == carId){
            return Cars[i];
        }
    }
}


const handleMoreInformation = (carId) => {
    window.scrollTo(0, 0);

    if(userInfo){
        const moreCar = findCarById(carId);
        if(carId){
            const postCarCurrent = JSON.stringify(moreCar);
            localStorage.setItem('carCurrent', postCarCurrent);
        } else {
            console.log('car is not found in list car');
        }

        bodyInformationCar.style.display = 'block';
        bodyStore.style.display = 'none';

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
    } else {
        bodyStore.style.display = 'none';
        bodyLogin.style.display = 'block';
    }
}