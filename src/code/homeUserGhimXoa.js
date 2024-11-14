// const quantityGhim = document.getElementById('quantity-ghim')

window.addEventListener('DOMContentLoaded', () => {
    const dataGhim = localStorage.getItem('Ghim');

    if(dataGhim){
        arrayGhim = JSON.parse(dataGhim);
        handleReloadGhim(arrayGhim?arrayGhim.length:0);
    }
})


const handlePostDataGhim = (listGhim) => {
    const dataPost = JSON.stringify(listGhim);
    if(dataPost){
        localStorage.setItem('Ghim', dataPost);
    } else {
        console.log('error');
    }
}

// const wrapperThongBao = document.querySelector('.wrapper-thongbao');

// const handleDisplayThongBao = () => {
//     wrapperThongBao.style.top = "5%";

//   const timer = setTimeout(() => {
//     clearTimeout(timer);
//     wrapperThongBao.style.top = "-20%";
//   }, 1500);
// }

let totalPagesGhim;

const handleDeleteCar = (idCar) =>{
    for(let i = 0; i < arrayGhim.length ; i++){
        if(arrayGhim[i].id == idCar){
            arrayGhim.splice(i, 1);
        }
    }
    handleReloadGhim(arrayGhim?arrayGhim.length:0);
    handlePostDataGhim(arrayGhim);

    if(arrayGhim.length % 6 == 0){
        totalPagesGhim = arrayGhim.length / 6;
    } else {
        totalPagesGhim = Math.ceil(arrayGhim.length / 6);
    }
    handleDisplayThongBao();
    renderPageElement2(arrayGhim, totalPagesGhim, 1);
}