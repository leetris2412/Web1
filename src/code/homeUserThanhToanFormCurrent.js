const buttonDSTTThanhToanCurrent = document.querySelector('.wrapper-body-thanhtoan-current #dsttThanhToanCurrent');

buttonDSTTThanhToanCurrent.addEventListener('click', () => {
    bodyCart.style.display = 'block';
    bodyThanhToanCurrent.style.display = 'none';
    window.scrollTo(0,0)
    renderCartHome(arrayCart);
    totalPrice = handleTongGia(arrayCart);
    handleReloadCart(arrayCart?arrayCart.length:0);
    renderTotalPrice(totalPrice);
})



const sotheCR = document.querySelector('.wrapper-body-thanhtoan-current #sothe');
const sotheACR = document.querySelector('.wrapper-body-thanhtoan-current #sotheA');
const sotheBCR = document.querySelector('.wrapper-body-thanhtoan-current #sotheB');

const tentrentheCR = document.querySelector('.wrapper-body-thanhtoan-current #tentrenthe');
const tentrentheACR = document.querySelector('.wrapper-body-thanhtoan-current #tentrentheA');
const tentrentheBCR = document.querySelector('.wrapper-body-thanhtoan-current #tentrentheB');

const ngayhethanCR = document.querySelector('.wrapper-body-thanhtoan-current #ngayhethan');
const ngayhethanACR = document.querySelector('.wrapper-body-thanhtoan-current #ngayhethanA');
const ngayhethanBCR = document.querySelector('.wrapper-body-thanhtoan-current #ngayhethanB');

const cvvCR = document.querySelector('.wrapper-body-thanhtoan-current #cvv');
const cvvACR = document.querySelector('.wrapper-body-thanhtoan-current #cvvA');
const cvvBCR = document.querySelector('.wrapper-body-thanhtoan-current #cvvB');

/*
    cao: 1285
    congxuat: 350
    cvv: "123"
    dai: 4895
    giatieuchuan: 3960
    hinhanh: "718-boxster.png"
    id: "1"
    ngayhethan: "2024-02-21"
    phuongthuc: "Master Card"
    sothe: "1231231231"
    tangtoc: 4.7
    ten: "718 Boxster"
    tentrenthe: "khoan"
    thoigian: "8/10/2023 21:34"
    tocdo: 275
*/

const checkedMethodCR = document.querySelectorAll('.wrapper-body-thanhtoan-current .checkedMethod')

const thanhtoanCR = document.querySelector('.wrapper-body-thanhtoan-current #thanhtoan');

// const handlePayment = () => {
//     const postPaymentCurrent = JSON.stringify(arrayResultPaymentCurrent);

//     if(postPayment){
//         localStorage.setItem('PaymentCurrent', postPaymentCurrent);
//     } else {
//         console.log('post payment is not defined');
//     }

// }


function handleUploadDataCR(valueTimeNowCR, valueCheckedPaymentCR){
    console.log(arrayResultPaymentCR);
    for(let i = 0; i < arrayCart.length ; i++){
        for(let j = 0; j < arrayQuantityCarCurrent[i] ; j++){
            paymentCarCurrent[i].sothe = valueSoTheCR;
            paymentCarCurrent[i].tentrenthe = valueTenTrenTheCR;
            paymentCarCurrent[i].ngayhethan = valueNgayHetHanCR;
            paymentCarCurrent[i].cvv = valueCvvCR;
            paymentCarCurrent[i].phuongthuc = valueCheckedPaymentCR;
            paymentCarCurrent[i].thoigian = valueTimeNowCR;
            arrayResultPaymentCR.push(paymentCarCurrent[i]);
        }
    }


}


function handleCheckedMethodCR(arrayChecked){
    for(let i = 0; i < arrayChecked.length ; i++){
        if(arrayChecked[i].checked){
            return arrayChecked[i].value;
        }
    }
}

function handleRealTimePaymentCR(){
    const date = new Date();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    if(minute < 10){
        minute = '0' + minute;
    }

    if(hour < 10){
        hour = '0' + hour;
    }

    return day + '/' + month + '/' + year + ' ' + hour + ':' + minute;
}

function handleSoTheCR(){
    if(sotheCR.value == ''){
        booleanSoTheCR = false;
        sotheACR.classList.add('active');
        sotheBCR.classList.remove('active');
        sotheCR.style.backgroundColor = 'goldenrod';
        sotheCR.style.color = 'black';
    } else if(sotheCR.value.length != 10) {
        booleanSoTheCR = false;
        sotheBCR.classList.add('active');
        sotheACR.classList.remove('active');
        sotheCR.style.backgroundColor = 'goldenrod';
        sotheCR.style.color = 'black';
    } else {
        booleanSoTheCR = true;
        valueSoTheCR = sotheCR.value;
        sotheACR.classList.remove('active');
        sotheBCR.classList.remove('active');
        sotheCR.style.backgroundColor = 'limegreen';
        sotheCR.style.color = 'white';
    }
}

function handleTenTrenTheCR(){
    if(tentrentheCR.value == ''){
        booleanTenTrenTheCR = false;
        tentrentheACR.classList.add('active');
        tentrentheBCR.classList.remove('active');
        tentrentheCR.style.backgroundColor = 'goldenrod';
        tentrentheCR.style.color = 'black';
    } else if(tentrentheCR.value.length < 5) {
        booleanTenTrenTheCR = false;
        tentrentheBCR.classList.add('active');
        tentrentheACR.classList.remove('active');
        tentrentheCR.style.backgroundColor = 'goldenrod';
        tentrentheCR.style.color = 'black';
    } else {
        booleanTenTrenTheCR = true;
        valueTenTrenTheCR = tentrentheCR.value;
        tentrentheACR.classList.remove('active');
        tentrentheBCR.classList.remove('active');
        tentrentheCR.style.backgroundColor = 'limegreen';
        tentrentheCR.style.color = 'white';
    }
}

function handleNgayHetHanCR(){
    if(ngayhethanCR.value == ''){
        booleanNgayHetHanCR = false;
        ngayhethanACR.classList.add('active');
        ngayhethanBCR.classList.remove('active');
        ngayhethanCR.style.backgroundColor = 'goldenrod';
        ngayhethanCR.style.color = 'black';
    } else if(ngayhethanCR.value.substr(0, 4) <= 2023) {
        booleanNgayHetHanCR = false;
        ngayhethanBCR.classList.add('active');
        ngayhethanACR.classList.remove('active');
        ngayhethanCR.style.backgroundColor = 'goldenrod';
        ngayhethanCR.style.color = 'black';
    } else {
        booleanNgayHetHanCR = true;
        valueNgayHetHanCR = ngayhethanCR.value;
        ngayhethanACR.classList.remove('active');
        ngayhethanBCR.classList.remove('active');
        ngayhethanCR.style.backgroundColor = 'limegreen';
        ngayhethanCR.style.color = 'white';
    }
}

function handleCvvCR(){
    if(cvvCR.value == ''){
        booleanCvvCR = false;
        cvvACR.classList.add('active');
        cvvBCR.classList.remove('active');
        cvvCR.style.backgroundColor = 'goldenrod';
        cvvCR.style.color = 'black';
    } else if(cvvCR.value.length != 3) {
        booleanCvvCR = false;
        cvvBCR.classList.add('active');
        cvvACR.classList.remove('active');
        cvvCR.style.backgroundColor = 'goldenrod';
        cvvCR.style.color = 'black';
    } else {
        booleanCvvCR = true;
        valueCvvCR = cvvCR.value;
        cvvACR.classList.remove('active');
        cvvBCR.classList.remove('active');
        cvvCR.style.backgroundColor = 'limegreen';
        cvvCR.style.color = 'white';
    }
}


let valueSoTheCR;
let valueTenTrenTheCR;
let valueNgayHetHanCR;
let valueCvvCR;

let booleanSoTheCR = false;
let booleanTenTrenTheCR = false;
let booleanNgayHetHanCR = false;
let booleanCvvCR = false;

const wrapperXacNhanCR = document.querySelector('.wrapper-body-thanhtoan-current .wrapper-xacnhan');
const iconXacNhanCR = document.querySelector('.wrapper-body-thanhtoan-current #iconXacNhan');
const iconTuChoiCR = document.querySelector('.wrapper-body-thanhtoan-current #iconTuChoi');


// let arrayResultPayment = [];
let arrayResultPaymentCR;//main data result

window.addEventListener('DOMContentLoaded', () => {
    const dataPayment = localStorage.getItem('Payment');

    if(dataPayment){
        arrayResultPaymentCR = JSON.parse(dataPayment);
    } else {
        console.log('error for it not found payment');
    }
})

iconXacNhanCR.addEventListener('click', ()=>{
    const valueTimeNowCR = handleRealTimePaymentCR();
    const valueCheckedPaymentCR = handleCheckedMethodCR(checkedMethodCR);

    handleUploadDataCR(valueTimeNowCR, valueCheckedPaymentCR);

    handlePaymentCR(); //post localStorage

    wrapperXacNhanCR.style.top = '-50%';

    bodyStore.style.display = 'block';
    bodyThanhToanCurrent.style.display = 'none';
    window.scrollTo(0,0)

    const dataCarPaymentCurrent = localStorage.getItem('PaymentCurrent');
    const carPaymentCurrentId = JSON.parse(dataCarPaymentCurrent);

    const indexCar = arrayCart.findIndex(item => item.id === carPaymentCurrentId[0].id);


    arrayCart.splice(indexCar, 1);


    handleReloadCart(arrayCart.length);
    const postArrayCart = JSON.stringify(arrayCart);
    if(postArrayCart){
        localStorage.setItem('Cart', postArrayCart);
    } else {
        console.log('found for post array cart data to localStorage');
    }

    const dataPayment = localStorage.getItem('Payment');

      if(dataPayment){
        arrayPayment = JSON.parse(dataPayment);
        renderDataPayment(arrayPayment);
        renderInformationUser(accountUser);
      } else {
        console.log('not fetch this data payment');
      }
})

iconTuChoiCR.addEventListener('click', () => {
    wrapperXacNhanCR.style.top = '-50%';
})


thanhtoanCR.addEventListener('click', () => {
    handleSoTheCR();
    handleTenTrenTheCR();
    handleNgayHetHanCR();
    handleCvvCR();

    if(booleanSoTheCR && booleanNgayHetHanCR && booleanTenTrenTheCR && booleanCvvCR){
        wrapperXacNhanCR.style.top = '35%';
    }
})