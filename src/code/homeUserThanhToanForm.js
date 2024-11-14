const buttonDSTTThanhToan = document.querySelector('.wrapper-body-thanhtoan #dsttThanhToan');

buttonDSTTThanhToan.addEventListener('click', () => {
    bodyCart.style.display = 'block';
    bodyThanhToan.style.display = 'none';
    window.scrollTo(0, 0);

})


const thanhToanTatCaCart = document.getElementById('thanhtoantatcaCart');

thanhToanTatCaCart.addEventListener('click', () => {
    bodyThanhToan.style.display = 'block';
    bodyCart.style.display = 'none';
    window.scrollTo(0,0);

    const dataPayment = localStorage.getItem('Payment');

    if(dataPayment){
        arrayResultPayment = JSON.parse(dataPayment);
    } else {
        console.log('error for it not found payment');
    }

    const dataCart = localStorage.getItem('Cart');
      if(dataCart){
        arrayCart = JSON.parse(dataCart);
        initializeQuantityOne(arrayCart.length);
        renderHoaDon(arrayCart, arrayQuantityCar);
        renderTotal(arrayCart, arrayQuantityCar);
      } else {
        console.log('not found data cart');
      }
})



const sothe = document.querySelector('.wrapper-body-thanhtoan #sothe');
const sotheA = document.querySelector('.wrapper-body-thanhtoan #sotheA');
const sotheB = document.querySelector('.wrapper-body-thanhtoan #sotheB');

const tentrenthe = document.querySelector('.wrapper-body-thanhtoan #tentrenthe');
const tentrentheA = document.querySelector('.wrapper-body-thanhtoan #tentrentheA');
const tentrentheB = document.querySelector('.wrapper-body-thanhtoan #tentrentheB');

const ngayhethan = document.querySelector('.wrapper-body-thanhtoan #ngayhethan');
const ngayhethanA = document.querySelector('.wrapper-body-thanhtoan #ngayhethanA');
const ngayhethanB = document.querySelector('.wrapper-body-thanhtoan #ngayhethanB');

const cvv = document.querySelector('.wrapper-body-thanhtoan #cvv');
const cvvA = document.querySelector('.wrapper-body-thanhtoan #cvvA');
const cvvB = document.querySelector('.wrapper-body-thanhtoan #cvvB');

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

const checkedMethod = document.querySelectorAll('.wrapper-body-thanhtoan .checkedMethod')

const thanhtoan = document.querySelector('.wrapper-body-thanhtoan #thanhtoan');

const handlePaymentCR = () => {
    const postPayment = JSON.stringify(arrayResultPaymentCR);

    if(postPayment){
        localStorage.setItem('Payment', postPayment);
    } else {
        console.log('post payment is not defined');
    }

}

const handlePayment = () => {
    console.log(arrayResultPayment);
    const postPayment = JSON.stringify(arrayResultPayment);

    if(postPayment){
        localStorage.setItem('Payment', postPayment);
    } else {
        console.log('post payment is not defined');
    }
}


function handleUploadData(valueTimeNow, valueCheckedPayment){

    for(let i = 0; i < arrayCart.length ; i++){
        for(let j = 0; j < arrayQuantityCar[i] ; j++){
            arrayCart[i].sothe = valueSoThe;
            arrayCart[i].tentrenthe = valueTenTrenThe;
            arrayCart[i].ngayhethan = valueNgayHetHan;
            arrayCart[i].cvv = valueCvv;
            arrayCart[i].phuongthuc = valueCheckedPayment;
            arrayCart[i].thoigian = valueTimeNow;
            arrayResultPayment.push(arrayCart[i]);
        }
    }
}


function handleCheckedMethod(arrayChecked){
    for(let i = 0; i < arrayChecked.length ; i++){
        if(arrayChecked[i].checked){
            return arrayChecked[i].value;
        }
    }
}

function handleRealTimePayment(){
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

function handleSoThe(){
    if(sothe.value == ''){
        booleanSoThe = false;
        sotheA.classList.add('active');
        sotheB.classList.remove('active');
        sothe.style.backgroundColor = 'goldenrod';
        sothe.style.color = 'black';
    } else if(sothe.value.length != 10) {
        booleanSoThe = false;
        sotheB.classList.add('active');
        sotheA.classList.remove('active');
        sothe.style.backgroundColor = 'goldenrod';
        sothe.style.color = 'black';
    } else {
        booleanSoThe = true;
        valueSoThe = sothe.value;
        sotheA.classList.remove('active');
        sotheB.classList.remove('active');
        sothe.style.backgroundColor = 'limegreen';
        sothe.style.color = 'white';
    }
}

function handleTenTrenThe(){
    if(tentrenthe.value == ''){
        booleanTenTrenThe = false;
        tentrentheA.classList.add('active');
        tentrentheB.classList.remove('active');
        tentrenthe.style.backgroundColor = 'goldenrod';
        tentrenthe.style.color = 'black';
    } else if(tentrenthe.value.length < 5) {
        booleanTenTrenThe = false;
        tentrentheB.classList.add('active');
        tentrentheA.classList.remove('active');
        tentrenthe.style.backgroundColor = 'goldenrod';
        tentrenthe.style.color = 'black';
    } else {
        booleanTenTrenThe = true;
        valueTenTrenThe = tentrenthe.value;
        tentrentheA.classList.remove('active');
        tentrentheB.classList.remove('active');
        tentrenthe.style.backgroundColor = 'limegreen';
        tentrenthe.style.color = 'white';
    }
}

function handleNgayHetHan(){
    if(ngayhethan.value == ''){
        booleanNgayHetHan = false;
        ngayhethanA.classList.add('active');
        ngayhethanB.classList.remove('active');
        ngayhethan.style.backgroundColor = 'goldenrod';
        ngayhethan.style.color = 'black';
    } else if(ngayhethan.value.substr(0, 4) <= 2023) {
        booleanNgayHetHan = false;
        ngayhethanB.classList.add('active');
        ngayhethanA.classList.remove('active');
        ngayhethan.style.backgroundColor = 'goldenrod';
        ngayhethan.style.color = 'black';
    } else {
        booleanNgayHetHan = true;
        valueNgayHetHan = ngayhethan.value;
        ngayhethanA.classList.remove('active');
        ngayhethanB.classList.remove('active');
        ngayhethan.style.backgroundColor = 'limegreen';
        ngayhethan.style.color = 'white';
    }
}

function handleCvv(){
    if(cvv.value == ''){
        booleanCvv = false;
        cvvA.classList.add('active');
        cvvB.classList.remove('active');
        cvv.style.backgroundColor = 'goldenrod';
        cvv.style.color = 'black';
    } else if(cvv.value.length != 3) {
        booleanCvv = false;
        cvvB.classList.add('active');
        cvvA.classList.remove('active');
        cvv.style.backgroundColor = 'goldenrod';
        cvv.style.color = 'black';
    } else {
        booleanCvv = true;
        valueCvv = cvv.value;
        cvvA.classList.remove('active');
        cvvB.classList.remove('active');
        cvv.style.backgroundColor = 'limegreen';
        cvv.style.color = 'white';
    }
}


let valueSoThe;
let valueTenTrenThe;
let valueNgayHetHan;
let valueCvv;

let booleanSoThe = false;
let booleanTenTrenThe = false;
let booleanNgayHetHan = false;
let booleanCvv = false;

const wrapperXacNhan = document.querySelector('.wrapper-body-thanhtoan .wrapper-xacnhan');
const iconXacNhan = document.querySelector('.wrapper-body-thanhtoan #iconXacNhan');
const iconTuChoi = document.querySelector('.wrapper-body-thanhtoan #iconTuChoi');

let informationPayment;

// let arrayResultPayment = [];
let arrayResultPayment;//main data result

// window.addEventListener('DOMContentLoaded', () => {
//     const dataPayment = localStorage.getItem('Payment');

//     if(dataPayment){
//         arrayResultPayment = JSON.parse(dataPayment);
//         console.log(arrayResultPayment);
//     } else {
//         console.log('error for it not found payment');
//     }
// })

iconXacNhan.addEventListener('click', ()=>{
    const valueTimeNow = handleRealTimePayment();
    const valueCheckedPayment = handleCheckedMethod(checkedMethod);

    handleUploadData(valueTimeNow, valueCheckedPayment);

    handlePayment(); //post localStorage
    handleReloadCart(0);

    wrapperXacNhan.style.top = '-50%';

    bodyStore.style.display = 'block';
    bodyThanhToan.style.display = 'none';

    arrayCart = [];
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

iconTuChoi.addEventListener('click', () => {
    wrapperXacNhan.style.top = '-50%';
})


thanhtoan.addEventListener('click', () => {
    handleSoThe();
    handleTenTrenThe();
    handleNgayHetHan();
    handleCvv();

    if(booleanSoThe && booleanNgayHetHan && booleanTenTrenThe && booleanCvv){
        wrapperXacNhan.style.top = '35%';
    }
})