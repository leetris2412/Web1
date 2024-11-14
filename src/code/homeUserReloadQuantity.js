const handleReloadCart = (valueQuantity) => {
    if(userInfo === null){
        valueQuantity = 0;
    }
    for(let i = 0; i < quantityCart.length; i++){
        quantityCart[i].innerText = `${valueQuantity}`;
    }
}

const handleReloadGhim = (valueQuantity) => {
    if(userInfo === null){
        valueQuantity = 0;
    }
    for(let i = 0; i < quantityGhim.length ; i++){
        quantityGhim[i].innerText = `${valueQuantity}`
    }
}