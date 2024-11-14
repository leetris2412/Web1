const form = document.getElementById('form');

const tendangnhap = document.getElementById('tendangnhap');
const tendangnhapA = document.getElementById('tendangnhapA');
const tendangnhapB = document.getElementById('tendangnhapB');
const tendangnhapC = document.getElementById('tendangnhapC');

const matkhau = document.getElementById('matkhau');
const matkhauA = document.getElementById('matkhauA');

const submitWrapperBodyLogin = document.querySelector('.wrapper-body-login #submit');


let accountAdmin = {
    "Email" : "doanvankhoan124@gmail.com",
    "Password" : "Kcoodown124",
    "Ten" : "Đoàn Văn Khoan",
    "Gender" : "Nam",
    "Address" : "287/21/21 Âu Dương Lân"
}

// window.addEventListener('DOMContentLoaded', () => {
//     const postAccountAdmin = JSON.stringify(accountAdmin);

//     if(postAccountAdmin){
//         localStorage.setItem('Admin', postAccountAdmin);
//     } else {
//         console.log('error post account admin to localStorage');
//     }
// })

// let accountAdmin;

// window.addEventListener('DOMContentLoaded', () => {
//     const dataAdmin = localStorage.getItem('Admin');

//     if(dataAdmin){
//         accountAdmin = JSON.parse(dataAdmin);
//     } else {
//         console.log('error fetch data account admin from localStorage');
//     }
// })

let arrayAccount;

window.addEventListener('DOMContentLoaded', () => {
    const dataAccount = localStorage.getItem('Account');

    if(dataAccount){
        arrayAccount = JSON.parse(dataAccount);
    } else {
        console.log('error fetch data account from localStorage');
    }
})

let valueEmailLogin = null;

let booleanEmailLogin = false;
let booleanNhapMatKhau = false;

const handleFindEmail = () => {
    const indexEmail = arrayAccount.findIndex(account => account.Email === tendangnhap.value);

    if(indexEmail == -1){
        valueEmailLogin = null;
    } else {
        valueEmailLogin = arrayAccount[indexEmail];
    }
}

const handleEmailLogin = () => {

    handleFindEmail();

    if(tendangnhap.value == '' && matkhau.value == ''){
        tendangnhapA.classList.add('active');
        tendangnhapB.classList.remove('active');
        tendangnhapC.classList.remove('active');
        matkhauA.classList.add('active');

        booleanEmailLogin = false;
        booleanNhapMatKhau = false;
    } else if (valueEmailLogin !== null){
        if(matkhau.value == ''){
            tendangnhapA.classList.remove('active');
            tendangnhapB.classList.remove('active');
            tendangnhapC.classList.remove('active');
            matkhauA.classList.add('active');
            booleanEmailLogin = true;
            booleanNhapMatKhau = false;
        } else if(matkhau.value == valueEmailLogin.Password) {
            tendangnhapA.classList.remove('active');
            tendangnhapB.classList.remove('active');
            tendangnhapC.classList.remove('active');
            matkhauA.classList.remove('active');
            booleanEmailLogin = true;
            booleanNhapMatKhau = true;
        } else {
            tendangnhapA.classList.remove('active');
            tendangnhapB.classList.remove('active');
            tendangnhapC.classList.add('active');
            matkhauA.classList.remove('active');
            booleanEmailLogin = true;
            booleanNhapMatKhau = false;
        }
    } else if(tendangnhap.value == ''){
        tendangnhapA.classList.add('active');
        tendangnhapB.classList.remove('active');
        tendangnhapC.classList.remove('active');
        matkhauA.classList.remove('active');
        booleanEmailLogin = false;
        booleanNhapMatKhau = false;
    } else {
         tendangnhapA.classList.remove('active');
        tendangnhapB.classList.add('active');
        tendangnhapC.classList.remove('active');
        matkhauA.classList.remove('active');
        booleanEmailLogin = false;
        booleanNhapMatKhau = false;
    }
}

const handleSubmitLogin = () => {
    handleEmailLogin();

    if(booleanEmailLogin && booleanNhapMatKhau){
        if(valueEmailLogin.Email !== accountAdmin.Email){

            const postUser = JSON.stringify(valueEmailLogin);

            if(postUser){
                localStorage.setItem('User', postUser);
            } else {
                console.log('error post user login to localStorage')
             }

            bodyStore.style.display = 'block';
            bodyLogin.style.display = 'none';

            userInfo = valueEmailLogin;

            const dataCar = localStorage.getItem('Cars');
            Cars = JSON.parse(dataCar);
            if(Cars.length % 6 == 0){
                totalPages = Cars.length / 6;
            } else {
                totalPages = Math.ceil(Cars.length / 6);
            }
            renderPageElement(Cars, totalPages, 1);

            renderInformationUser(valueEmailLogin)
            handleReloadCart(arrayCart?arrayCart.length:0);
            handleReloadGhim(arrayGhim?arrayGhim.length:0)

        } else {

            const postUser = JSON.stringify(valueEmail);

            if(postUser){
                localStorage.setItem('Admin', postUser);
            } else {
                console.log('error post user login to localStorage')
            }
            window.location.href = "./homeAdmin.html";
        }
    }
}


submitWrapperBodyLogin.addEventListener('click', (e) => {
    e.preventDefault();
    handleSubmitLogin();
})