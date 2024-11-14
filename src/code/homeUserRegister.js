
const ten = document.getElementById('ten');
const email = document.getElementById('email');
const password = document.getElementById('password');
const verifyPassword = document.getElementById('verify-password');
const gender = document.querySelector('.gender');
const address = document.getElementById('address');

const submit = document.getElementById('submit');
const formWrapperBodyRegister = document.getElementById('formWrapperBodyRegister');

const tenA = document.getElementById('tenA');
const tenB = document.getElementById('tenB');
const emailA = document.getElementById('emailA');
const emailB = document.getElementById('emailB');
const passwordA = document.getElementById('passwordA');
const passwordB = document.getElementById('passwordB');
const verifyPasswordA = document.getElementById('verify-passwordA');
const verifyPasswordB = document.getElementById('verify-passwordB');

const addressA = document.getElementById('addressA');


let valueTen;
let valueEmail;
let valuePassword;
let valueVerifyPassword;
let valueGender;
let valueAddess;

let booleanTen = false;
let booleanEmail = false;
let booleanPassword = false;
let booleanVerifyPassword = false;
let booleanGender = false;
let booleanAddess = false;

const handleTen = () => {
    if(ten.value == ''){
        tenA.classList.add('active');
        tenB.classList.remove('active');
        ten.style.backgroundColor = 'goldenrod';
        booleanTen = false;
    } else if(ten.value.length < 5){
        tenA.classList.remove('active');
        tenB.classList.add('active');
        ten.style.backgroundColor = 'goldenrod';
        booleanTen = false;
    } else {
        ten.style.backgroundColor = 'limegreen';
        tenA.classList.remove('active');
        tenB.classList.remove('active');
        valueTen = ten.value;
        booleanTen = true;
    }
}

const handleEmail = () => {
    if(email.value == ''){
        emailA.classList.add('active');
        emailB.classList.remove('active');
        email.style.backgroundColor = 'goldenrod';
        booleanEmail = false;
    } else if(email.value.includes('@gmail.com')){
        emailA.classList.remove('active');
        emailB.classList.remove('active');
        email.style.backgroundColor = 'limegreen';
        valueEmail = email.value;
        booleanEmail = true;
    } else {
        email.style.backgroundColor = 'goldenrod';
        emailA.classList.remove('active');
        emailB.classList.add('active');
        booleanEmail = false;
    }
}

const handlePassword = () => {
    if(password.value == ''){
        passwordA.classList.add('active');
        passwordB.classList.remove('active');
        ten.style.backgroundColor = 'goldenrod';
        booleanPassword = false;
    } else if(password.value.length < 5){
        passwordA.classList.remove('active');
        passwordB.classList.add('active');
        password.style.backgroundColor = 'goldenrod';
        booleanPassword = false;
    } else {
        password.style.backgroundColor = 'limegreen';
        passwordA.classList.remove('active');
        passwordB.classList.remove('active');
        valuePassword = password.value;
        booleanPassword = true;
    }
}


const handleVerifyPassword = () => {
    if(verifyPassword.value == ''){
        verifyPasswordA.classList.add('active');
        verifyPasswordB.classList.remove('active');
        verifyPassword.style.backgroundColor = 'goldenrod';
        booleanVerifyPassword = false;
    } else if(password.value !== verifyPassword.value){
        verifyPasswordA.classList.remove('active');
        verifyPasswordB.classList.add('active');
        verifyPassword.style.backgroundColor = 'goldenrod';
        booleanVerifyPassword = false;
    } else {
        verifyPassword.style.backgroundColor = 'limegreen';
        verifyPasswordA.classList.remove('active');
        verifyPasswordB.classList.remove('active');
        valueVerifyPassword = verifyPassword.value;
        booleanVerifyPassword = true;
    }
}

const handleAddress = () => {
    if(address.value == ''){
        addressA.classList.add('active');
        address.style.backgroundColor = 'goldenrod';
        booleanAddess = false;
    } else {
        address.style.backgroundColor = 'limegreen';
        addressA.classList.remove('active');
        valueAddess = address.value;
        booleanAddess = true;
    }
}

const handleGender = () => {
    if(gender.checked == true){
        valueGender = 'Nam';
        booleanGender = true;
    } else {
        valueGender = 'Nữ';
        booleanGender = true;
    }
}

const handleSubmit = () => {
    handleTen();
    handleEmail();
    handlePassword();
    handleVerifyPassword();
    handleGender();
    handleAddress();
}

// let account = [
//     {
//         "Ten" : "Đoàn Văn Khoan",
//         "Email" : "doanvankhoan124@gmail.com",
//         "Password" : "Kcoodown124",
//         "Gender" : "Name",
//         "Address" : "287/21/21 Âu Dương Lân"
//     }
// ]


// window.addEventListener('DOMContentLoaded', () => {
//     const postArrrayAccount = JSON.stringify(account);

//     if(postArrrayAccount){
//         localStorage.setItem('Account', postArrrayAccount);
//     } else {
//         console.log("error post array account data to localStorage");
//     }
// })

let account;

window.addEventListener('DOMContentLoaded', () => {
    const dataArrayAccount = localStorage.getItem('Account');

    if(dataArrayAccount){
        account = JSON.parse(dataArrayAccount);
    } else {
        console.log('error fetch data array account from localStorage');
    }
})

let profileUser;

const handlePostUserAccount = (user) => {
    const postUser = JSON.stringify(user);

    if(postUser){
        localStorage.setItem('User', postUser);
    } else {
        console.log('error post user to localStorage')
    }

    account.push(user);

    const postArrayAccount = JSON.stringify(account);

    if(postArrayAccount){
        localStorage.setItem('Account', postArrayAccount);
    } else {
        console.log('error post data array account to localStorage');
    }
}

submit.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSubmit();

    if(booleanTen && booleanEmail && booleanVerifyPassword && booleanGender && booleanAddess && booleanPassword){
        profileUser = {
            "Ten" : valueTen,
            "Email" : valueEmail,
            "Password" : valuePassword,
            "Gender" : valueGender,
            "Address" : valueAddess
        }

        handlePostUserAccount(profileUser);

        const dataArrayAccount = localStorage.getItem('Account');


        if(dataArrayAccount){
            arrayAccount = JSON.parse(dataArrayAccount);
        } else {
            console.log('error fetch data array account from localStorage');
        }
    }
})

formWrapperBodyRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSubmit();

    if(booleanTen && booleanEmail && booleanVerifyPassword && booleanGender && booleanAddess && booleanPassword){
        profileUser = {
            "Ten" : valueTen,
            "Email" : valueEmail,
            "Password" : valuePassword,
            "Gender" : valueGender,
            "Address" : valueAddess
        }

        handlePostUserAccount(profileUser);

        bodyLogin.style.display = 'block';
        bodyRegister.style.display = 'none';

        const dataArrayAccount = localStorage.getItem('Account');

        if(dataArrayAccount){
            arrayAccount = JSON.parse(dataArrayAccount);
        } else {
            console.log('error fetch data array account from localStorage');
        }
         bodyLogin.style.display = 'block';
        bodyRegister.style.display = 'none';
        let initializeCart = JSON.stringify([]);
        let initializeGhim = JSON.stringify([]);
        let initializePayment = JSON.stringify([]);
        let initializePaymentCurrent = JSON.stringify([]);
        let initializePaymentDaMua = JSON.stringify([]);
        let initializePaymentDaTuChoi = JSON.stringify([]);

        localStorage.setItem('Cart', initializeCart);
        localStorage.setItem('Ghim', initializeGhim);
        localStorage.setItem('Payment', initializePayment);
        localStorage.setItem('PaymentCurrent', initializePaymentCurrent);
        localStorage.setItem('PaymentXacNhan', initializePaymentDaMua);
        localStorage.setItem('PaymentTuChoi', initializePaymentDaTuChoi);

        renderPageElement(Cars, totalPages, 1);

        handleReloadCart(0);
        handleReloadGhim(0);

    }
})