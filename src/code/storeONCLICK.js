window.addEventListener('DOMContentLoaded', () => {
  const string = JSON.stringify(Cars);
  localStorage.setItem('Cars', string);
});




let arrayCars;

window.addEventListener('DOMContentLoaded', () => {
    const dataCars = localStorage.getItem('Cars');
    if(dataCars){
        Cars = JSON.parse(dataCars);
        arrayCars = JSON.parse(dataCars);
    } else {
        console.log('not fetch data cars from localStorage');
    }
})

/* -------------------------BODY RENDER --------------------------*/
const bodyRegister = document.getElementById('body-register');
const bodyLogin = document.getElementById('body-login');
const bodyHome = document.getElementById('body-home');
const bodyStore = document.getElementById('body-store');
const bodyCart = document.getElementById('body-cart');
const bodyGhim = document.getElementById('body-ghim');
const bodyUser = document.getElementById('body-user');
const bodyInformationCar = document.getElementById('body-information-car');
const bodyThanhToanCurrent = document.getElementById('body-thanhtoan-current');
const bodyThanhToan = document.getElementById('body-thanhtoan');
/*-----------------------------------------------------------------*/


/* --------------------------BUTTON MAIN---------------------------*/
const buttonBodyHomeMauXe = document.getElementById('home-mauxe');
const buttonBodyHomeThongTin = document.getElementById('home-thongtin');
const buttonBodyHomeUser = document.getElementById('home-user');


const buttonLoginDangKy = document.getElementById('login-dangky');
const buttonRegisterDangNhap = document.getElementById('register-dangnhap');

const buttonStoreHome = document.getElementById('body-store-home');
const buttonStoreCart = document.getElementById('cart');
const buttonStoreGhim = document.getElementById('heart');
const buttonStoreUser = document.getElementById('user-store');

const buttonCartGhim = document.getElementById('cartGhim');
const buttonUserGhim = document.getElementById('userGhim');
const buttonHomeGhim = document.getElementById('homeGhim');
const buttonTimKiemGhim = document.getElementById('timkiemGhim');
const buttonThongTinGhim = document.getElementById('thongtinGhim');

const buttonHomeCart = document.getElementById('trangchuCart');
const buttonTimKiemCart = document.getElementById('timkiemCart');
const buttonGhimCart = document.getElementById('ghimCart');
const buttonUserCart = document.getElementById('userCart');
const buttonThongTinCart = document.getElementById('thongtinCart');

const buttonHomeInformationCar = document.getElementById('homeInformationCar');
const buttonTimKiemInformationCar = document.getElementById('timkiemInformationCar');
const buttonThongTinInformationCar = document.getElementById('thongtinInformatioCar');

const buttonGhimInformationCar = document.getElementById('ghimInformationCar');
const buttonCartInformationCar = document.getElementById('cartInformationCar');
const buttonUserInformationCar = document.getElementById('userInformationCar');

const buttonTimKiemUser = document.getElementById('timkiemUser');
const buttonTrangChuUser = document.getElementById('trangchuUser');
const buttonThongTinUser = document.getElementById('thongtinUser');

/*---------------------------------------------------------------*/



/*-------------------------HANDLE TRANSFORM PAGE-----------------------------*/

buttonBodyHomeMauXe.addEventListener('click', () => {
    window.scrollTo(0, 0);
    bodyHome.style.display = 'none';
    bodyStore.style.display = 'block';
    handleReloadCart(arrayCart?arrayCart.length:0);
    handleReloadGhim(arrayGhim?arrayGhim.length:0)
    const dataCar = localStorage.getItem('Cars');
    arrayCars = JSON.parse(dataCar);
    if(arrayCars.length % 6 == 0){
                totalPages = arrayCars.length / 6;
            } else {
                totalPages = Math.ceil(arrayCars.length / 6);
            }
    renderPageElement(Cars, totalPages, 1);
})

buttonBodyHomeUser.addEventListener('click', () => {
    window.scrollTo(0, 0);
    if(userInfo){
        bodyUser.style.display = 'block';
        bodyHome.style.display = 'none';
        renderInformationUser(userInfo);

    } else {
        bodyLogin.style.display = 'block';
        bodyHome.style.display = 'none';
    }
})

buttonLoginDangKy.addEventListener('click', () => {
    window.scrollTo(0, 0);
    bodyLogin.style.display = 'none';
    bodyRegister.style.display = 'block';
})

buttonRegisterDangNhap.addEventListener('click', (e) => {
    window.scrollTo(0, 0);
    bodyLogin.style.display = 'block';
    bodyRegister.style.display = 'none';
    e.preventDefault();
})

buttonStoreHome.addEventListener('click', () => {
    window.scrollTo(0, 0);
    bodyHome.style.display = 'block';
    bodyStore.style.display = 'none';
})

buttonStoreCart.addEventListener('click', () => {
    window.scrollTo(0, 0);
    if(userInfo){
        bodyStore.style.display = 'none';
        bodyCart.style.display = 'block';
        renderInformationUser(userInfo);
        handleReloadCart(arrayCart?arrayCart.length:0);


        const dataCart = localStorage.getItem('Cart');

        if(dataCart){
            arrayCart = JSON.parse(dataCart);
            renderCartHome(arrayCart);
            totalPrice = handleTongGia(arrayCart);
            handleReloadCart(arrayCart?arrayCart.length:0);

            renderTotalPrice(totalPrice);
        } else {
            console.log('not found data Cart');
        }
    } else {
        bodyLogin.style.display = 'block';
        bodyStore.style.display = 'none';
    }

})

buttonStoreGhim.addEventListener('click', () => {

    window.scrollTo(0, 0);
    if(userInfo){
        bodyGhim.style.display = 'block';
        bodyStore.style.display = 'none';
        renderInformationUser(userInfo);
        const dataGhim = localStorage.getItem('Ghim');

        if(dataGhim){
            arrayGhim = JSON.parse(dataGhim);
            handleReloadGhim(arrayGhim?arrayGhim.length:0);
        }

        if(arrayGhim.length % 6 == 0){
            totalPagesGhim = arrayGhim.length / 6;
        } else {
            totalPagesGhim = Math.ceil(arrayGhim.length / 6);
        }

        renderPageElement2(arrayGhim, totalPagesGhim, 1);
    } else {
        bodyLogin.style.display = 'block';
        bodyStore.style.display = 'none';
    }
})

buttonStoreUser.addEventListener('click', () => {
    window.scrollTo(0, 0);
    if(userInfo){
        bodyUser.style.display = 'block';
        bodyStore.style.display = 'none';
        renderInformationUser(userInfo);
    } else {
        bodyLogin.style.display = 'block';
        bodyStore.style.display = 'none';
    }
})


buttonCartGhim.addEventListener('click', () => {
    window.scrollTo(0, 0);
    bodyGhim.style.display = 'none';
    bodyCart.style.display = 'block';
    handleReloadCart(arrayCart?arrayCart.length:0);
    handleReloadGhim(arrayGhim?arrayGhim.length:0);

    const dataCart = localStorage.getItem('Cart');

    if(dataCart){
        arrayCart = JSON.parse(dataCart);
        renderCartHome(arrayCart);
        totalPrice = handleTongGia(arrayCart);
        renderTotalPrice(totalPrice);
    } else {
        console.log('not found data Cart');
    }
})

window.addEventListener('DOMContentLoaded', () => {
    const dataUser = localStorage.getItem('User');
    if(dataUser){
        userInfo = JSON.parse(dataUser);
    } else {
        console.log('not fetch data user from localStorage');
    }
})

buttonUserGhim.addEventListener('click', () => {
    window.scrollTo(0, 0);
    bodyGhim.style.display = 'none';
    bodyUser.style.display = 'block';

    renderInformationUser(userInfo);

})

buttonHomeGhim.addEventListener('click', () => {
    window.scrollTo(0, 0);
    bodyHome.style.display = 'block';
    bodyGhim.style.display = 'none';
})

buttonTimKiemGhim.addEventListener('click', () => {
    window.scrollTo(0, 0);
    bodyStore.style.display = 'block';
    bodyGhim.style.display = 'none';
    const dataCar = localStorage.getItem('Cars');
    arrayCars = JSON.parse(dataCar);
    if(arrayCars.length % 6 == 0){
                totalPages = arrayCars.length / 6;
            } else {
                totalPages = Math.ceil(arrayCars.length / 6);
            }
    renderPageElement(Cars, totalPages, 1);
})

buttonThongTinGhim.addEventListener('click', () => {
    window.scrollTo(0, document.body.scrollHeight);
})

buttonHomeCart.addEventListener('click', () => {
    window.scrollTo(0, 0);
    bodyCart.style.display = 'none';
    bodyHome.style.display = 'block';
})

buttonTimKiemCart.addEventListener('click', () => {
    window.scrollTo(0, 0);

    bodyStore.style.display = 'block';
    bodyCart.style.display = 'none';
    const dataCar = localStorage.getItem('Cars');
    arrayCars = JSON.parse(dataCar);
    if(arrayCars.length % 6 == 0){
                totalPages = arrayCars.length / 6;
            } else {
                totalPages = Math.ceil(arrayCars.length / 6);
            }
    renderPageElement(arrayCars, totalPages, 1);
})


buttonGhimCart.addEventListener('click', () => {
    window.scrollTo(0, 0);

    bodyGhim.style.display = 'block';
    bodyCart.style.display = 'none';

    const dataGhim = localStorage.getItem('Ghim');

    if(dataGhim){
        arrayGhim = JSON.parse(dataGhim);
    }
    handleReloadCart(arrayCart?arrayCart.length:0);
    handleReloadGhim(arrayGhim?arrayGhim.length:0);

    if(arrayGhim.length % 6 == 0){
        totalPagesGhim = arrayGhim.length / 6;
    } else {
        totalPagesGhim = Math.ceil(arrayGhim.length / 6);
    }

    renderPageElement2(arrayGhim, totalPagesGhim, 1);
})


buttonUserCart.addEventListener('click', () => {
    window.scrollTo(0, 0);

    bodyUser.style.display = 'block';
    bodyCart.style.display = 'none';
    if(userInfo){
        bodyUser.style.display = 'block';
        bodyHome.style.display = 'none';
        renderInformationUser(userInfo);

    } else {
        bodyLogin.style.display = 'block';
        bodyHome.style.display = 'none';
    }
})

buttonThongTinCart.addEventListener('click', () => {
    window.scrollTo(0, document.body.scrollHeight);
})

buttonHomeInformationCar.addEventListener('click', () => {
    window.scrollTo(0, 0);

    bodyHome.style.display = 'block';
    bodyInformationCar.style.display = 'none';
})

buttonTimKiemInformationCar.addEventListener('click', () => {
    window.scrollTo(0, 0);

    bodyStore.style.display = 'block';
    bodyInformationCar.style.display = 'none';

    const dataCar = localStorage.getItem('Cars');
    arrayCars = JSON.parse(dataCar);
    if(arrayCars.length % 6 == 0){
                totalPages = arrayCars.length / 6;
            } else {
                totalPages = Math.ceil(arrayCars.length / 6);
            }
    renderPageElement(Cars, totalPages, 1);
})

buttonThongTinInformationCar.addEventListener('click', () => {
    window.scrollTo(0, document.body.scrollHeight);
})


buttonGhimInformationCar.addEventListener('click', () => {
    window.scrollTo(0, 0);

    bodyInformationCar.style.display = 'none';
    bodyGhim.style.display = 'block';
    handleReloadCart(arrayCart?arrayCart.length:0);
    handleReloadGhim(arrayGhim?arrayGhim.length:0);

    const dataGhim = localStorage.getItem('Ghim');

    if(dataGhim){
        arrayGhim = JSON.parse(dataGhim);
        handleReloadGhim(arrayGhim?arrayGhim.length:0);
    }

    if(arrayGhim.length % 6 == 0){
        totalPagesGhim = arrayGhim.length / 6;
    } else {
        totalPagesGhim = Math.ceil(arrayGhim.length / 6);
    }

    renderPageElement2(arrayGhim, totalPagesGhim, 1);
})

buttonCartInformationCar.addEventListener('click', () => {
    window.scrollTo(0, 0);

    bodyInformationCar.style.display = 'none';
    bodyCart.style.display = 'block';

    const dataCart = localStorage.getItem('Cart');
    handleReloadCart(arrayCart?arrayCart.length:0);
    handleReloadGhim(arrayGhim?arrayGhim.length:0);
    if(dataCart){
        arrayCart = JSON.parse(dataCart);
        renderCartHome(arrayCart);
        totalPrice = handleTongGia(arrayCart);
        renderTotalPrice(totalPrice);
    } else {
        console.log('not found data Cart');
    }
})

buttonUserInformationCar.addEventListener('click', () => {
    window.scrollTo(0, 0);

    bodyUser.style.display = 'block';
    bodyInformationCar.style.display = 'none';
    if(userInfo){
        bodyUser.style.display = 'block';
        bodyHome.style.display = 'none';
        renderInformationUser(userInfo);
    } else {
        bodyLogin.style.display = 'block';
        bodyHome.style.display = 'none';
    }
})


buttonTimKiemUser.addEventListener('click', () => {
    window.scrollTo(0, 0);

    bodyStore.style.display = 'block';
    bodyUser.style.display = 'none';

    const dataCar = localStorage.getItem('Cars');
    arrayCars = JSON.parse(dataCar);
    if(arrayCars.length % 6 == 0){
                totalPages = arrayCars.length / 6;
            } else {
                totalPages = Math.ceil(arrayCars.length / 6);
            }
    renderPageElement(Cars, totalPages, 1);
})

buttonTrangChuUser.addEventListener('click', () => {
    window.scrollTo(0, 0);

    bodyHome.style.display = 'block';
    bodyUser.style.display = 'none';

})

buttonThongTinUser.addEventListener('click', () => {
    window.scrollTo(0, document.body.scrollHeight);
})

/* ---------------------------------------------------------------------- */


/*-----------------------------register.js----------------------------*/

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

let account = [
    {
        "Ten" : "Đoàn Văn Khoan",
        "Email" : "doanvankhoan124@gmail.com",
        "Password" : "Kcoodown124",
        "Gender" : "Name",
        "Address" : "287/21/21 Âu Dương Lân"
    }
]


window.addEventListener('DOMContentLoaded', () => {
    const postArrrayAccount = JSON.stringify(account);

    if(postArrrayAccount){
        localStorage.setItem('Account', postArrrayAccount);
    } else {
        console.log("error post array account data to localStorage");
    }
})


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

/*----------------------------------------------------------------*/


/*----------------------------login.js-----------------------------*/
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
/*--------------------------------------------------------------------*/



/*-------------------------------home.js----------------------------------*/

let userInfo;

// window.addEventListener('DOMContentLoaded', () => {
//     const arrayUser = null;
//     const postUser = JSON.stringify(arrayUser);

//     if(postUser){
//         localStorage.setItem('User', postUser);
//     } else {
//         console.log('not post user to localStorage');
//     }
// })

window.addEventListener('DOMContentLoaded', () => {
    const dataUser = localStorage.getItem('User');

    if(dataUser){
        userInfo = JSON.parse(dataUser);
    } else {
        console.log('not fetch data user from localStorage');
    }
})

buttonBodyHomeThongTin.addEventListener('click', ()=>{
    window.scrollTo(0, 600)
})


/*--------------------------------------------------------*/

/*----------------------------------cars.js------------------------------------*/
// let Cars;

// window.addEventListener('DOMContentLoaded', () => {
//   const dataCar = localStorage.getItem('Cars');
//   Cars = JSON.parse(dataCar);
//   renderPageElement(Cars, totalPages, 1);
// })


const middleItemList = document.querySelector('.wrapper-body-store .middle-item-list');

let totalPages = 1;
let elementPerPage = 6;


function handleGiaTien(giatien){
  const n = Math.floor(giatien / 1000);
  const decimal = giatien % 1000;
  let paddedDecimal = decimal.toString();
  while (paddedDecimal.length < 3) {
    paddedDecimal = '0' + paddedDecimal;
  }
  return n + '.' + paddedDecimal;
}

const renderPageElement = (arrayCars, totalPages, currentPage) => {

  totalPages = totalPages;
  const firstItem = elementPerPage*(currentPage-1);
  const lastItem = firstItem + elementPerPage;  
  let ulMiddleItemList = '';

  if(arrayCars === undefined){
    arrayCars = Cars;
  }

  if(userInfo){
    for(let i = firstItem; i < lastItem; i++){
        if(arrayCars[i]){
          ulMiddleItemList +=
        `
        <div class="middle-item-box">
                        <div class="item-box-car">
                            <div class="item-box-icon">
                                <div class="icon-left">
                                    <button value="${arrayCars[i].ten}" onclick="handleChitiet(this.value)"><i id="iconGhim-${arrayCars[i].id}" class="fa-solid fa-thumbtack"></i></button>
                                </div>
                                <div class="icon-right">
                                    <button value="${arrayCars[i].ten}" onclick="handleChitietCart(this.value)">
                                    <i id="iconCart-${arrayCars[i].id}" class="fa-solid fa-money-check-dollar"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="car-image">
                                <img src="${arrayCars[i].hinhanh}">
                            </div>
                            <div class="car-buy">
                                <div class="bar-buy-button">
                                    <button value="${arrayCars[i].id}"
                                    onclick="handleMoreInformation(this.value)">Xem chi tiết</button>
                                </div>
                            </div>
                            <div class="car-background">
                                <img src="../database/Image/fake-background.jpg">
                            </div>
                        </div>

                        <div class="item-box-info">
                            <div class="car-info-name">
                                <p>Mẫu xe :</p>
                                <p>${arrayCars[i].ten}</p>
                            </div>
                            <div class="car-info-price">
                                <p>Giá tiêu chuẩn :</p>
                                <p>${handleGiaTien(arrayCars[i].giatieuchuan)}.000.000vnđ</p>
                            </div>
                        </div>
                    </div>
        `
        }
      }

      middleItemList.innerHTML = ulMiddleItemList;
      element(arrayCars, totalPages, currentPage);
  } else {
    for(let i = firstItem; i < lastItem; i++){
        if(arrayCars[i]){
          ulMiddleItemList +=
        `
        <div class="middle-item-box">
                        <div class="item-box-car">
                            <div class="item-box-icon">

                            </div>
                            <div class="car-image">
                                <img src="${arrayCars[i].hinhanh}">
                            </div>
                            <div class="car-buy">
                                <div class="bar-buy-button">
                                    <button value="${arrayCars[i].id}"
                                    onclick="handleMoreInformation(this.value)">Xem chi tiết</button>
                                </div>
                            </div>
                            <div class="car-background">
                                <img src="../database/Image/fake-background.jpg">
                            </div>
                        </div>

                        <div class="item-box-info">
                            <div class="car-info-name">
                                <p>Mẫu xe :</p>
                                <p>${arrayCars[i].ten}</p>
                            </div>
                            <div class="car-info-price">
                                <p>Giá tiêu chuẩn :</p>
                                <p>${handleGiaTien(arrayCars[i].giatieuchuan)}.000.000vnđ</p>
                            </div>
                        </div>
                    </div>
        `
        }
      }

      middleItemList.innerHTML = ulMiddleItemList;
      element(arrayCars, totalPages, currentPage);
  }
}


const ulBodyStorePaginationBox = document.querySelector('#body-store .pagination-box ul')

function element(arrayCars, totalPages, pageCurrent){


    renderGhimActive(arrayGhim);
    renderCartActive(arrayCart);


    let liTag = '';
    let beforePages = pageCurrent - 1;
    let afterPages = pageCurrent + 1;

    if(pageCurrent > 1){
        liTag += `<li class='btn prev' onclick='renderPageElement(arrayCars, totalPages, ${pageCurrent - 1})'><span><i class='fa-solid fa-chevron-left'></i> Prev</span></li>`; 
    }

    if(pageCurrent > 2){
        liTag += `<li class="numb" onclick="renderPageElement(arrayCars, totalPages, 1)"><span>1</span></li>`;
        if(pageCurrent > 3){
            liTag += `<li class="numb"><span>...</span></li>`;            
        }
    }

    if(pageCurrent == totalPages){
        beforePages = beforePages - 2;
    } else if(pageCurrent == totalPages - 1){
        beforePages = beforePages - 1;
    }

    if(pageCurrent == 1){
        afterPages = afterPages + 2;
    } else if(pageCurrent == 2){
        afterPages = afterPages + 1;
    }


    for(let i = beforePages; i <= afterPages; i++){
        if(i > totalPages){
            continue;
        }

        if(i < 1){
            continue;
        }

        let activeLi;
        if(i == pageCurrent){
            activeLi = 'active';
        } else { 
            activeLi = '';
        }
        liTag += `<li class='numb ${activeLi}' onclick='renderPageElement(arrayCars, totalPages, ${i})'><span>${i}</span></li>`;
    }

    if(pageCurrent < totalPages - 1){
        if(pageCurrent < totalPages - 2){
            liTag += `<li class="numb"><span>...</span></li>`;           
        }
        liTag += `<li class="numb" onclick="renderPageElement(arrayCars, totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
    }

    if(pageCurrent < totalPages){
        liTag += `<li class='btn next' onclick='renderPageElement(arrayCars, totalPages, ${pageCurrent + 1})'><span> Next<i class='fa-solid fa-chevron-right'></i></span></li>`;
    }

    if (pageCurrent > totalPages) {
      console.log('pageCurrent > totalPages');
        liTag = '';
    }

    if (pageCurrent < 1) {
      console.log('pageCurrent < 1');
        liTag = '';
    }

    // solve total == 3 error
    if(totalPages == 3){
      liTag = '';
      liTag += `<li class='btn prev' onclick='renderPageElement(arrayCars, totalPages, ${pageCurrent - 1})'><span><i class='fa-solid fa-chevron-left'></i> Prev</span></li>`;
      for(let i = 1; i <= 3; i++){
          if(i > totalPages){
              continue;
          }

          if(i < 1){
              continue;
          }

          let activeLi;
          if(i == pageCurrent){
              activeLi = 'active';
          } else { 
              activeLi = '';
          }
          liTag += `<li class='numb ${activeLi}' onclick='renderPageElement(arrayCars, totalPages, ${i})'><span>${i}</span></li>`;
      }
      liTag += `<li class='btn next' onclick='renderPageElement(arrayCars, totalPages, ${pageCurrent + 1})'><span> Next<i class='fa-solid fa-chevron-right'></i></span></li>`;
    }
    ulBodyStorePaginationBox.innerHTML = liTag;
}

/*------------------------------------------------------------------------*/


/* ---------------------------store.js-------------------------------------*/
const background = document.getElementById('background');
const topMauXe = document.getElementById('top-mauxe');
const topThongTin = document.getElementById('top-thongtin');
const topSearch = document.getElementById('top-search');

topMauXe.addEventListener('click', () => {
    window.scrollTo({
        top : positionSrollSearch,
        behavior : 'smooth',
    })
})

topThongTin.addEventListener('click', () => {
    window.scrollTo({
        top : 4600,
        behavior : 'smooth',
    })
})

topSearch.addEventListener('click', () => {
    window.scrollTo({
        top : 1360,
        behavior : 'smooth',
    })
    inputSearch.focus();
})

let count = 0;

const paginationBackground = () => {
    if(count >= 4){
        count = 0;
    }

    let checkLeft = listImg[count].offsetLeft;
    background.style.left = -checkLeft + 'px';
    count++;
}
setInterval(() => {
    paginationBackground();
}, 4000);

const renderBackground = () => {
    let listBackground = '';
    for(let i = 1; i <= 4; i++){
        listBackground +=
        `<img class='background-img' src="../database/Image/background(${i}).jpg" alt="">`;
    }
    background.innerHTML = listBackground;
    listImg = document.querySelectorAll('#background .background-img');
}


window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    const top = document.querySelector('.wrapper-body-store .top');
    const middle = document.getElementById('middle');
    const middleFilter = document.querySelector('.wrapper-body-store .middle-filter');
    const middleItem = document.getElementById('middle-item');
    const middleInformation1Img = document.querySelector('.wrapper-body-store .information-1-img');
    const middleInformation1Content = document.querySelector('.wrapper-body-store .information-1-content');
    const middleInformation2Img = document.querySelector('.wrapper-body-store .information-2-img');
    const middleInformation2Content = document.querySelector('.wrapper-body-store .information-2-content');

    const bottomWrapperBodyHome = document.querySelector('.wrapper-body-home #bottom');

    const star1 = document.querySelector('.reason1');
    const star2 = document.querySelector('.reason2');
    const star3 = document.querySelector('.reason3');
    const star4 = document.querySelector('.reason4');
    const star5 = document.querySelector('.reason5');
    const listStar = [
        star1, star2, star3, star4, star5
    ]

    const bottom = document.getElementById('bottom');

    if(scrollY > 0){
        top.style.backgroundColor = 'white';
        top.style.height = '75px';
    } else {
        top.style.backgroundColor = 'transparent';
        top.style.height = '70px';
    }

    if(scrollY > 351){
        middle.style.transform = 'translateY(0)';
    } else {
        middle.style.transform = 'translateY(-3%)';
    }

    if(scrollY > 500){
        bottomWrapperBodyHome.style.transform = 'translateY(0)'
    } else {
        bottomWrapperBodyHome.style.transform = 'translateY(5%)'
    }

    if(scrollY > 930){
        middleFilter.style.transform = 'translateY(0)';
    } else {
        middleFilter.style.transform = 'translateY(-5%)';
    }

    if(scrollY > 1755){
        middleItem.style.transform = 'translateY(0)';
    } else {
        middleItem.style.transform = 'translateY(-5%)';
    }

    if(scrollY > 2400){
        middleInformation1Img.style.transform = 'translateX(0)';
        middleInformation1Content.style.transform = 'translateX(0)';
    } else {
        middleInformation1Img.style.transform = 'translateX(-5%)';
        middleInformation1Content.style.transform = 'translateX(5%)';
    }

    if(scrollY > 3329){
        middleInformation2Img.style.transform = 'translateX(0)';
        middleInformation2Content.style.transform = 'translateX(0)';
    } else {
        middleInformation2Img.style.transform = 'translateX(5%)';
        middleInformation2Content.style.transform = 'translateX(-5%)';
    }

    if(scrollY > 3975){
        for(let i = 0; i < listStar.length; i++){
            setInterval(() => {
                listStar[i].style.transform = 'translateY(0)';
            }, i*700);
        }
    } else {
        for(let i = 0; i < listStar.length; i++){
            listStar[i].style.transform = 'translateY(10%)';
        }
    }

    // if(scrollY > 4550){
    //     top.style.display = 'none';
    //     bottom.style.transform = 'translateY(0)';
    // } else {
    //     top.style.display = 'block';
    //     bottom.style.transform = 'translateY(-2%)';
    // }
})

renderBackground();
paginationBackground();

/*-----------------------------------------------------------------*/


/*-----------------------handleReloadQuantity------------------*/

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


/*-------------------------------------------------------------*/

/*-------------------------------cart.js----------------------------*/
const quantityCart = document.querySelectorAll('.quantity-cart');

window.addEventListener('DOMContentLoaded', () => {
    const postArrayCart = JSON.stringify(arrayCart);
    localStorage.setItem('Cart', postArrayCart);
})

let arrayCart = [];

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
    if(arrayCart){
        for(let i = 0 ; i < arrayCart.length ; i++){
            if(arrayCart[i].ten == nameCar){
                iconId = arrayCart[i].id;
                check = !check;
            }
        }
        handleCheckCart(check, nameCar, iconId);
    }
}

/*------------------------------------------------------*/


/*-------------------------------models.js--------------------------------*/
const Modals = [
    {
        "name" : "Boxster",
        "img" : "../database/Image/model(1).jpg",
        "describe" : "Mẫu xe thể thao mui trần hai cửa với động cơ mạnh mẽ và khả năng xử lý linh hoạt."
    },
    {
        "name" : "Cayman",
        "img" : "../database/Image/model(2).jpg",
        "describe" : "Mẫu xe thể thao mui cứng hai cửa với động cơ mạnh mẽ và khả năng xử lý linh hoạt."
    },
    {
        "name" : "Carrera S",
        "img" : "../database/Image/model(3).jpg",
        "describe" : "Mẫu xe thể thao hai cửa với động cơ tăng áp mạnh mẽ và khả năng xử lý linh hoạt."
    },
    {
        "name" : "Carrera",
        "img" : "../database/Image/model(4).jpg",
        "describe" : "Mẫu xe thể thao hai cửa với động cơ hút khí tự nhiên và khả năng xử lý linh hoạt."
    },
    {
        "name" : "Targa",
        "img" : "../database/Image/model(5).jpg",
        "describe" : "Mẫu xe thể thao mui trần hai cửa với phần mui có thể tháo rời."
    },
    {
        "name" : "Turbo",
        "img" : "../database/Image/model(6).jpg",
        "describe" : "Mẫu xe thể thao hai cửa với động cơ tăng áp mạnh mẽ và khả năng xử lý linh hoạt."
    },
    {
        "name" : "Cayenne",
        "img" : "../database/Image/model(7).jpg",
        "describe" : "Mẫu SUV hạng sang với khả năng vận hành mạnh mẽ và khả năng off-road tốt."
    },
    {
        "name" : "Cross Turismo",
        "img" : "../database/Image/model(8).jpg",
        "describe" : "Mẫu SUV lai thể thao với khả năng vận hành mạnh mẽ và khả năng off-road tốt."
    },
    {
        "name" : "Macan",
        "img" : "../database/Image/model(9).jpg",
        "describe" : "Mẫu SUV hạng sang cỡ nhỏ với khả năng vận hành mạnh mẽ và khả năng off-road tốt."
    },
    {
        "name" : "Panamera",
        "img" : "../database/Image/model(10).jpg",
        "describe" : "Mẫu sedan hạng sang với khả năng vận hành mạnh mẽ và khả năng vận hành tốt."
    },
    {
        "name" : "Taycan",
        "img" : "../database/Image/model(11).jpg",
        "describe" : "Mẫu xe thể thao điện với khả năng vận hành mạnh mẽ và khả năng chạy đường trường tốt."
    },
]


const middleModelsList = document.querySelector('.middle-models-list');

let buttonModalsCar;

const renderModels = () => {
    let ulModel = '';
    console.log(Modals)
    for(let i = 0; i < Modals.length; i++){
        ulModel +=
        `
             <li class="model">
                        <img src="${Modals[i].img}">
                        <div class="name-model">
                            <p>${Modals[i].name}</p>
                        </div>
                        <div class="middle-more">
                            <button class="button-modals-car" onclick="handleClickModals(this.value)" value="${Modals[i].name}">Lọc mẫu</button>
                            <div class="middle-more-info">
                                <p>${Modals[i].describe}</p>
                            </div>
                        </div>
                    </li>
        `
    }
    middleModelsList.innerHTML = ulModel;
    buttonModalsCar = document.querySelectorAll('.button-modals-car');
}

let listModalsFilter = [];
const handleClickModals = (nameModal) => {
    for(let i = 0 ; i < Cars.length; i++){
        if(Cars[i].ten.toUpperCase().includes(nameModal.toUpperCase())){
            listModalsFilter.push(Cars[i]);
        }
    }

    window.scrollTo({
        top : positionSrollSearch,
        behavior : 'smooth',
    })

    arrayCars = listModalsFilter;
    handleRenderResultCar(arrayCars);
    handleContentSearch(nameModal, 'search');

    listModalsFilter = [];
}

renderModels();

/*------------------------------------------------------------------*/

/*--------------------------------filter.js-------------------------*/
const inputSearch = document.getElementById('input-search');
const buttonSearch = document.getElementById('search');
const formSearch = document.getElementById('formSearch');
const middleItem = document.getElementById('middle-item');

const contentSearch = document.getElementById('contentSearch');


/* FILTER BY INPUT */
let valueSearch;
let open = true;
const positionSrollSearch = 1988;

const handleContentSearch = (value, kind) => {
    contentSearch.classList.add('active');

    if(kind == 'search'){
        contentSearch.innerText = `Kết quả tìm kiếm của bạn : "${value}"`;
    } else if(kind == 'filter'){
        contentSearch.innerText = `Kết quả bộ lọc của bạn : ${value}`;
    }
}



const handleRenderResultCar = (arraySearch) => {
    const quantityCar = arraySearch.length;

    if(quantityCar % 6 == 0){
        totalPages = quantityCar / 6;
        renderPageElement(arraySearch, totalPages, 1);
        resultSearchByInput = [];
    } else {
        totalPages = Math.ceil(quantityCar / 6);
        renderPageElement(arraySearch, totalPages, 1);
        resultSearchByInput = [];
    }
}

const handleSearchByInput = (value) => {
    let resultSearchByInput = [];

    const valueUpperCase = value.toUpperCase();
    for(let i = 0; i < Cars.length; i++){
        if(Cars[i].ten.toUpperCase().includes(valueUpperCase)){
            resultSearchByInput.push(Cars[i]);
        }
    }

    arrayCars = resultSearchByInput; // array main in cars.js

    handleRenderResultCar(arrayCars);
}

formSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    valueSearch = inputSearch.value;
    inputSearch.value = '';
    handleContentSearch(valueSearch, 'search');

    window.scrollTo({
        top : positionSrollSearch,
        behavior : 'smooth',
    })
    inputSearch.blur();
    handleSearchByInput(valueSearch);
})

buttonSearch.addEventListener('submit', (event) => {
    inputSearch.focus();
    valueSearch = inputSearch.value;
    inputSearch.value = '';
    handleContentSearch(valueSearch, 'search');

    window.scrollTo({
        top : positionSrollSearch,
        behavior : 'smooth',
    })
    inputSearch.blur();
    handleSearchByInput(valueSearch);
})


/* FILTER BY CHECKECD */

const formChecked = document.getElementById('formChecked');
const buttonCheckedSubmit = document.getElementById('submit');

let listCondition = [];

const checkedMauXe = document.querySelectorAll('.checked-mauxe');
const checkedTocDo = document.querySelectorAll('.checked-tocdo');
const checkedCongSuat = document.querySelectorAll('.checked-congsuat');
const checkedTangToc = document.querySelectorAll('.checked-tangtoc');
const checkedCao = document.querySelectorAll('.checked-cao');
const checkedDai = document.querySelectorAll('.checked-dai');
const rangeGiaTien = document.getElementById('filter-price');
const valueRange = document.querySelector('.valueRange');

rangeGiaTien.addEventListener('mousemove', () => {
    const value = rangeGiaTien.value;
    valueRange.innerText = value + ' tỷ vnđ';
})

const handleCheckedMauXe = () => {
    for(let i = 0; i < checkedMauXe.length; i++){
        if(checkedMauXe[i].checked){
            let object = {
                "mauxe" : `${checkedMauXe[i].value}`
            }
            listCondition.push(object);
        }
    }
}

const handleCheckedTocDo = () => {
    for(let i = 0; i < checkedTocDo.length; i++){
        if(checkedTocDo[i].checked){
            let object = {
                "tocdo" : checkedTocDo[i].value
            }
            listCondition.push(object);
        }
    }
}

const handleCheckedCongSuat = () => {
    for(let i = 0; i < checkedCongSuat.length; i++){
        if(checkedCongSuat[i].checked){
            let object = {
                "congsuat" : checkedCongSuat[i].value
            }
            listCondition.push(object);
        }
    }
}

const handleCheckedTangToc = () => {
    for(let i = 0; i < checkedTangToc.length; i++){
        if(checkedTangToc[i].checked){
            let object = {
                "tangtoc" : checkedTangToc[i].value
            }
            listCondition.push(object);
        }
    }
}

const handleCheckedCao = () => {
    for(let i = 0; i < checkedCao.length; i++){
        if(checkedCao[i].checked){
            let object = {
                "cao" : checkedCao[i].value
            }
            listCondition.push(object);
        }
    }
}

const handleCheckedDai = () => {
    for(let i = 0; i < checkedDai.length; i++){
        if(checkedDai[i].checked){
            let object = {
                "dai" : checkedDai[i].value
            }
            listCondition.push(object);
        }
    }
}

const handleRangeGiaTien = () => {
    let object = {
        "giatien" : `${rangeGiaTien.value}`
    }
    listCondition.push(object);
}


let arrayFilter = [];
function filterCar(conditions){

    for(let i = 0; i < conditions.length ; i++){
        for(let j = 0; j < Cars.length; j++){
            let isCondition = false;
            if(Cars[j] && Cars[j].ten && conditions[i].mauxe && Cars[j].ten.toUpperCase().includes(conditions[i].mauxe.toUpperCase())){
                isCondition = true;
            }
            else if(Cars[j] && Cars[j].tocdo && conditions[i].tocdo && conditions[i].tocdo == Cars[j].tocdo){
                isCondition = true;
            } else if(Cars[j] && Cars[j].congxuat && conditions[i].congsuat && conditions[i].congsuat == Cars[j].congxuat){
                isCondition = true;
            } else if(Cars[j] && Cars[j].tangtoc && conditions[i].tangtoc && conditions[i].tangtoc == Cars[j].tangtoc){
                isCondition = true;
            } else if(Cars[j] && Cars[j].cao && conditions[i].cao && conditions[i].cao == Cars[j].cao){
                isCondition = true;
            } else if(Cars[j] && Cars[j].dai && conditions[i].dai && conditions[i].dai == Cars[j].dai){
                isCondition = true;
            } else if(Cars[j] && conditions[i].giatien && conditions[i].giatien > (Cars[j].giatieuchuan/1000)){
                isCondition = true;
            }

            if(isCondition == true){
                arrayFilter.push(Cars[j]);
            }
        }
    }
    // filter unique cars
    const uniqueArrayFilter = [... new Set(arrayFilter)];

    arrayCars = uniqueArrayFilter;
    handleRenderResultCar(uniqueArrayFilter);
    arrayFilter = [];
}

function handleFilterDisplay(list){
    let text = '';
    for(let i = 0; i < list.length ; i++){
        if(list[i] && list[i].mauxe){
            text += `"${list[i].mauxe}" , `
        } else if(list[i] && list[i].tocdo){
            text += `"${list[i].tocdo}(km/h)" , `
        } else if(list[i] && list[i].congsuat){
            text += `"${list[i].congsuat}(PS)" , `
        } else if(list[i] && list[i].tangtoc){
            text += `"${list[i].tangtoc}(s)" , `
        } else if(list[i] && list[i].cao){
            text += `"${list[i].cao}(cm)" , `
        } else if(list[i] && list[i].dai){
            text += `"${list[i].dai}(cm)" , `
        } else if(list[i] && list[i].giatien){
            text += `"${list[i].giatien}tỷ" , `
        }
    }
    return text;
}


formChecked.addEventListener('submit', (event) => {
    event.preventDefault();
    handleCheckedMauXe();
    handleCheckedTocDo();
    handleCheckedCongSuat();
    handleCheckedTangToc();
    handleCheckedCao();
    handleCheckedDai();
    handleRangeGiaTien();
    window.scrollTo({
        top : positionSrollSearch,
        behavior : 'smooth',
    })
    filterCar(listCondition);
    handleContentSearch(`${handleFilterDisplay(listCondition)}`, 'filter');
    listCondition = [];
})


/*-------------------------------------------------------------*/

/*---------------------------Ghim.js-----------------------------*/
const quantityGhim = document.querySelectorAll('.quantity-ghim')

window.addEventListener('DOMContentLoaded', () => {
    const postArrayGhim = JSON.stringify(arrayGhim);
    localStorage.setItem('Ghim', postArrayGhim);
});

let arrayGhim = [];

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
    if(arrayGhim){
        for(let i = 0 ; i < arrayGhim.length ; i++){
            if(arrayGhim[i].ten == nameCar){
                iconId = arrayGhim[i].id;
                check = !check;
            }
        }
        handleCheckGhim(check, nameCar, iconId);
    }
}
/*-------------------------------------------------------------*/

/*----------------------moreInformation.js---------------------------*/

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

/*-------------------------------------------------------------*/


/*----------------------homeUserInformation.js---------------------*/
let accountUser;

window.addEventListener('DOMContentLoaded', () => {
  const dataAccountUser = localStorage.getItem('User');

  if(dataAccountUser){
    accountUser = JSON.parse(dataAccountUser);
  } else {
    console.log('error fetch account user from localStorage');
  }
})


const handleDangXuatUser = () => {
  const postUserEmpty = JSON.stringify(null);

  localStorage.setItem('User', postUserEmpty);

  bodyUser.style.display = 'none';
  bodyHome.style.display = 'block';
  valueEmailLogin = null;
  userInfo = null;

    let initializeCart = JSON.stringify([]);
    let initializeGhim = JSON.stringify([]);

    if(Cars.length % 6 == 0){
                totalPages = Cars.length / 6;
            } else {
                totalPages = Math.ceil(Cars.length / 6);
            }
    renderPageElement(Cars, totalPages, 1);

    handleReloadCart(0);
    handleReloadGhim(0);

}

const middle2InformationUser = document.querySelector('.middle-2-information-user');

function renderInformationUser(informationUser){
  middle2InformationUser.innerHTML = 
  `
    <div class="user-image">
            <img src="../database/Image/user.png" alt="">
              <button onclick="handleDangXuatUser()">
                <p>Đăng xuất</p>
              </button>
          </div>
          <div class="user-infor">
            <div>
              <p>Tên người dùng :</p>
              <p>${informationUser?informationUser.Ten:''}</p>
            </div>

            <div>
              <p>Email :</p>
              <p>${informationUser?informationUser.Email:''}</p>
            </div>

            <div>
              <p>Giới tính :</p>
              <p>${informationUser?informationUser.Gender:''}</p>
            </div>

            <div>
              <p>Địa chỉ :</p>
              <p>${informationUser?informationUser.Address:''}</p>
            </div>

            <div>
              <p>Số sản phẩm đã thanh toán :</p>
              <p>${arrayPayment?arrayPayment.length:0}</p>
            </div>

            <div>
              <p>Số sản phẩm đã mua :</p>
              <p>${arrayPaymentDaXacNhan?arrayPaymentDaXacNhan.length:0}</p>
            </div>
          </div>
  `
}

/*----------------------------------------------------------*/

/* ------------------------------homeUserDadat.js--------------------------*/
/* handle Nav */

const btnDaDat = document.getElementById('btnDaDat');
const btnDaMua = document.getElementById('btnDaMua');

const paymentListDat = document.querySelector('.payment-list-dat');
const paymentListDaMua = document.querySelector('.payment-list-damua');


btnDaDat.addEventListener('click', () => {
  btnDaDat.classList.add('active');
  btnDaMua.classList.remove('active');

  paymentListDat.style.display = 'block';
  paymentListDaMua.style.display = 'none';

    window.scrollTo(0, 0);

})


btnDaMua.addEventListener('click', () => {
  btnDaDat.classList.remove('active');
  btnDaMua.classList.add('active');

  paymentListDat.style.display = 'none';
  paymentListDaMua.style.display = 'block';
    window.scrollTo(0, 0);

})

/* handle Main */
let arrayPayment;

function handleDeleteObject(object){
  delete object.cvv;
  delete object.ngayhethan;
  delete object.phuongthuc;
  delete object.sothe;
  delete object.tentrenthe;
  delete object.thoigian;
  return object;
}


const handleCarCurrent = (carId) => {
    window.scrollTo(0, 0);

  const moreCar = findCarById(carId);
    if(carId){
        const postCarCurrent = JSON.stringify(moreCar);
        localStorage.setItem('carCurrent', postCarCurrent);
    } else {
        console.log('car is not found in list car');
    }

    bodyInformationCar.style.display = 'block';
    bodyUser.style.display = 'none';

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



window.addEventListener('DOMContentLoaded', () => {
  const dataPayment = localStorage.getItem('Payment');

  if(dataPayment){
    arrayPayment = JSON.parse(dataPayment);
    renderDataPayment(arrayPayment);
    renderInformationUser(accountUser);
  } else {
    console.log('not fetch this data payment');
  }
})

function handleGiaTien(giatien){
  const n = Math.floor(giatien / 1000);
  const decimal = giatien % 1000;
  let paddedDecimal = decimal.toString();
  while (paddedDecimal.length < 3) {
    paddedDecimal = '0' + paddedDecimal;
  }
  return n + '.' + paddedDecimal;
}

const ulListDatBox = document.querySelector('.list-dat-box ul');

function renderDataPayment(listPayment){
  let ul = 
  `
    <li class="list-dat-item">
                  <div class="item-stt">
                    <p>STT</p>
                  </div>
                  <div class="item-img">
                    <p>Hình ảnh</p>
                  </div>
                  <div class="item-infor">
                    <p>Thông tin xe</p>
                  </div>
                  <div class="item-information-more">
                    <p>Xem thông tin</p>
                  </div>
                  <div class="item-information-payment">
                    <p>Thanh toán</p>
                  </div>
                  <div class="item-status">
                    <p>Trạng thái</p>
                  </div>
                </li>
  `
  for(let i = 0; i < listPayment.length ; i++){
    if(listPayment[i]){
      ul +=
      `
        <li class="list-dat-item">
                  <div class="item-stt">
                    <p>${i + 1}</p>
                  </div>
                  <div class="item-img">
                    <div>
                      <img src="${listPayment[i].hinhanh}" alt="">
                    </div>
                  </div>
                  <div class="item-infor">
                    <p>${listPayment[i].ten}</p>
                    <p>${handleGiaTien(listPayment[i].giatieuchuan)}.000.000 vnđ</p>
                  </div>
                  <div class="item-information-more">
                    <a>
                      <button value="${listPayment[i].id}" onclick="handleCarCurrent(this.value)">
                        <p>Thông tin xe</p>
                      </button>
                    </a>
                  </div>
                  <div class="item-information-payment">
                    <p class="payment-dathanhtoan">Đã thanh toán</p>
                  </div>
                  <div class="item-status">
                    <p class="payment-choxacnhan">Chờ xác nhận</p>
                  </div>
                </li>
      `
    }
  }
  ulListDatBox.innerHTML = ul;
}


// const topThongTin = document.getElementById('top-thongtin');

topThongTin.addEventListener('click',  () => {
  window.scrollTo(0, document.body.scrollHeight);
})

/*------------------------------------------------------------*/

/*-----------------------------------homeUserDamua.js-----------------------------*/
const listDaMuaBox = document.querySelector('.list-damua-box ul');

let arrayPaymentDaXacNhan;

window.addEventListener('DOMContentLoaded', () => {
    const dataPaymentDaXacNhan = localStorage.getItem('PaymentXacNhan');

    if(dataPaymentDaXacNhan){
        arrayPaymentDaXacNhan = JSON.parse(dataPaymentDaXacNhan);
        renderPaymentDaMua(arrayPaymentDaXacNhan);
        renderInformationUser(accountUser);
    } else {
        console.log('error fetch payment da xac nhan');
    }
})


function renderPaymentDaMua(listPaymentDaXacNhan){
    let ul = 
    `
        <li class="list-damua-item">
                  <div class="item-stt">
                    <p>STT</p>
                  </div>
                  <div class="item-img">
                    <p>Hình ảnh</p>
                  </div>
                  <div class="item-infor">
                    <p>Thông tin xe</p>
                  </div>
                  <div class="item-information-more">
                    <p>Phương thức</p>
                  </div>
                  <div class="item-information-payment">
                    <p>Thanh toán</p>
                  </div>
                  <div class="item-status">
                    <p>Trạng thái</p>
                  </div>
                </li>
    `;

    for(let i = 0; i < listPaymentDaXacNhan.length ; i++){
        if(listPaymentDaXacNhan[i]){
            ul +=
            `
                <li class="list-damua-item">
                  <div class="item-stt">
                    <p>${i + 1}</p>
                  </div>
                  <div class="item-img">
                    <div>
                      <img src="${listPaymentDaXacNhan[i].hinhanh}" alt="">
                    </div>
                  </div>
                  <div class="item-infor">
                    <p>Cayenne</p>
                    <p>${handleGiaTien(listPaymentDaXacNhan[i].giatieuchuan)}.000.000 vnđ</p>
                  </div>
                  <div class="item-information-more">
                    <p>${listPaymentDaXacNhan[i].phuongthuc}</p>
                  </div>
                  <div class="item-information-payment">
                    <p class="payment-dathanhtoan">Đã thanh toán</p>
                  </div>
                  <div class="item-status">
                    <p class="payment-daxacnhan">Đang vận chuyển</p>
                  </div>
                </li>
            `
        }
    }

    listDaMuaBox.innerHTML = ul;
}
/*-------------------------------------------------------------------------*/


/*-----------------------homeInformation.js------------------------*/
let carCurrent;

let paymentCarCurrent;
/* Payment Current */



const handleCartCurrent = (idCar) => {
    window.scrollTo(0, 0);

  const indexCar = Cars.findIndex(item => item.id === idCar);

  let arrayPaymentCurrent = [];
  arrayPaymentCurrent.push(Cars[indexCar]);

  const dataPaymentCurrent = JSON.stringify(arrayPaymentCurrent);
  
  if(dataPaymentCurrent){
    localStorage.setItem('PaymentCurrent', dataPaymentCurrent);
  } else {
    console.log("error not found data payment current");
  }

  bodyThanhToanCurrent.style.display = 'block';
  bodyCart.style.display = 'none';

  const dataCart = localStorage.getItem('PaymentCurrent');

      if(dataCart){
        paymentCarCurrent = JSON.parse(dataCart);
        initializeQuantityOneCurrent(paymentCarCurrent.length);
        renderHoaDonCurrent(paymentCarCurrent, arrayQuantityCarCurrent);
        renderTotalCurrent(paymentCarCurrent, arrayQuantityCarCurrent);
      } else {
        console.log('not found data cart');
      }
}

const handleCartCurrentGhim = (idCar) => {
    window.scrollTo(0, 0);

  const indexCar = Cars.findIndex(item => item.id === idCar);

  let arrayPaymentCurrent = [];
  arrayPaymentCurrent.push(Cars[indexCar]);

  const dataPaymentCurrent = JSON.stringify(arrayPaymentCurrent);
  
  if(dataPaymentCurrent){
    localStorage.setItem('PaymentCurrent', dataPaymentCurrent);
  } else {
    console.log("error not found data payment current");
  }

  bodyThanhToanCurrent.style.display = 'block';
  bodyGhim.style.display = 'none';

  const dataCart = localStorage.getItem('PaymentCurrent');

      if(dataCart){
        paymentCarCurrent = JSON.parse(dataCart);
        initializeQuantityOneCurrent(paymentCarCurrent.length);
        renderHoaDonCurrent(paymentCarCurrent, arrayQuantityCarCurrent);
        renderTotalCurrent(paymentCarCurrent, arrayQuantityCarCurrent);
      } else {
        console.log('not found data cart');
      }
}

const handlePaymentCurrentFromInformationCar = (idCar) => {
    window.scrollTo(0, 0);

  const indexCar = Cars.findIndex(item => item.id === idCar);

  let arrayPaymentCurrent = [];
  arrayPaymentCurrent.push(Cars[indexCar]);

  const dataPaymentCurrent = JSON.stringify(arrayPaymentCurrent);
  
  if(dataPaymentCurrent){
    localStorage.setItem('PaymentCurrent', dataPaymentCurrent);
  } else {
    console.log("error not found data payment current");
  }

  bodyThanhToanCurrent.style.display = 'block';
  bodyInformationCar.style.display = 'none';

  const dataCart = localStorage.getItem('PaymentCurrent');

      if(dataCart){
        paymentCarCurrent = JSON.parse(dataCart);
        initializeQuantityOneCurrent(paymentCarCurrent.length);
        renderHoaDonCurrent(paymentCarCurrent, arrayQuantityCarCurrent);
        renderTotalCurrent(paymentCarCurrent, arrayQuantityCarCurrent);
      } else {
        console.log('not found data cart');
      }
}


// window.addEventListener('DOMContentLoaded', () => {
//   const dataCarCurrent = localStorage.getItem('carCurrent');

//   if(dataCarCurrent){
//     carCurrent = JSON.parse(dataCarCurrent);
//     renderCarCurrent(carCurrent);
//   } else {
//     console.log('not found data carCurrent');
//   }
// })



function handleGiaTien(giatien){
  const n = Math.floor(giatien / 1000);
  const decimal = giatien % 1000;
  let paddedDecimal = decimal.toString();
  while (paddedDecimal.length < 3) {
    paddedDecimal = '0' + paddedDecimal;
  }
  return n + '.' + paddedDecimal;
}

const wrapperMiddle = document.querySelector('.wrapper-body-information-car #wrapper-middle');
let middle3Propose;

const renderCarCurrent = (carInformation) => {
    window.scrollTo(0, 0);

  wrapperMiddle.innerHTML =
  `
    <div class="wrapper-middle-1">
            <div class="middle-1-nav">
                <div class="nav-list">
                    <ul>
                        <li>
                            <p>Trang chủ</p>
                            <i class="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                            <p>Trang tìm kiếm</p>
                            <i class="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                            <p>Thông tin xe</p>
                            <i class="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                            <p>${carInformation.ten}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="wrapper-middle-2">
            <div class="middle-2-top">
                <h1>${carInformation.ten}</h1>
                <h2>Giá tiêu chuẩn ${handleGiaTien(carInformation.giatieuchuan)}.000.000 vnđ</h2>
            </div>
            <div class="middle-2-mid">
                <p>* Giá tiêu chuẩn bao gồm thuế nhập khẩu, thuế tiêu thụ đặc biệt và thuế giá trị gia tăng. Đối với dòng xe Panamera, Cayenne, Macan và Taycan giá tiêu chuẩn bao gồm thêm gói dịch vụ 4 năm bảo dưỡng. Bảng giá, thông số kỹ thuật và hình ảnh có thể thay đổi theo từng thời điểm mà không báo trước.</p>
            </div>
            <div class="middle-2-bottom">
                <div class="bottom-congsuat">
                    <p>${carInformation.congxuat} PS (220 kW)</p>
                    <p>Công suất</p>
                </div>
                <div class="bottom-tangtoc">
                    <p>${carInformation.tangtoc} giây (4,7 giây vói gói Sport Chrono)</p>
                    <p>Tăng tốc từ 0 - 100 km/giờ</p>
                </div>
                <div class="bottom-tocdo">
                    <p>${carInformation.tocdo} km/giờ</p>
                    <p>Tốc độ tối đa</p>
                </div>
            </div>
        </div>

        <div class="wrapper-middle-3">

            <div class="middle-3-title">
                <h1>Thông Số Kỹ Thuật</h1>   
            </div>

            <div class="middle-3-content">
                <div class="content-top">
                    <img src="${carInformation.hinhanh}">
                    <p class="content-top-cao">Cao : ${carInformation.cao}mm</p>
                    <p class="content-top-dai">Dài : ${carInformation.dai}mm</p>
                </div>
                <div class="content-middle">
                    <div class="content-middle-list">
                        <ul>
                            <li>
                                <p>Công suất</p>
                                <div>${carInformation.congxuat} PS (220kW)</div>
                            </li>
                            <li>
                                <p>Mô men xoắn cực đại</p>
                                <div>380 Nm</div>
                            </li>
                            <li>
                                <p>Tăng tốc từ 0 - 100 km/giờ</p>
                                <p>${carInformation.tangtoc} giây</p>
                            </li>
                            <li>
                                <p>Tốc độ tối đa</p>
                                <p>${carInformation.tocdo} km/giờ</p>
                            </li>
                            <li>
                                <p>Tiêu thụ nhiên liệu kết hợp (lít/100km)</p>
                                <p>8.1</p>
                            </li>
                            <li>
                                <p>Lượng khí thải C02 (g/km)</p>
                                <p>185</p>
                            </li>
                            <li>
                                <p>Giá tiêu chuẩn</p>
                                <p>${handleGiaTien(carInformation.giatieuchuan)}.000.000 vnđ</p>
                            </li>
                        </ul>
                    </div>
                    <div class="content-middle-bottom">
                        <p>
                            * Giá tiêu chuẩn bao gồm thuế nhập khẩu, thuế tiêu thụ đặc biệt và thuế giá trị gia tăng. Đối với dòng xe Panamera, Cayenne, Macan và Taycan giá tiêu chuẩn bao gồm thêm gói dịch vụ 4 năm bảo dưỡng. Bảng giá, thông số kỹ thuật và hình ảnh có thể thay đổi theo từng thời điểm mà không báo trước.
                        </p>
                    </div>
                    <div class="content-middle-button">
                        <div class="button-muangay">
                            <a >
                                <button value="${carInformation.id}" onclick="handlePaymentCurrentFromInformationCar(this.value)">
                                    <i class="fa-solid fa-dollar-sign"></i>
                                </button>
                            </a>
                        </div>
                        <div class="button-cart">
                            <button id="button-cart-car" value="${carInformation.ten}" onclick="handleChitietCart2(this.value)">
                                <i id="iconCart-${carInformation.id}" class="fa-solid fa-money-check-dollar"></i>
                            </button>
                        </div>
                        <div class="button-ghim">
                            <button id="button-ghim-car" value="${carInformation.ten}" onclick="handleChitiet2(this.value)">
                                <i id="iconGhim-${carInformation.id}" class="fa-solid fa-thumbtack"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="middle-3-propose">
                <div class="propose-title">
                    <h2>Đề xuất mẫu xe tương tự</h2>
                </div>
                <div class="propose-list">
                        <ul>
                            
                        </ul>
                </div>
            </div>
        </div>
  `
  ulMiddle3Propose = document.querySelector('.middle-3-propose .propose-list ul');
  renderPropose(ulMiddle3Propose, carCurrent, Cars);
}


topThongTin.addEventListener('click', ()=>{
    window.scrollTo({
        top : 2550,
        behavior : 'smooth',
    })
})


window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    const wrapperTop = document.querySelector('.wrapper-top .top');
    const wrapperMiddle3 = document.querySelector('.wrapper-middle-3');
    const middle3Propose = document.querySelector('.middle-3-propose');
    const chinhanh1img = document.querySelector('.chinhanh1-img');
    const chinhanh2img = document.querySelector('.chinhanh2-img');
    const chinhanh3img = document.querySelector('.chinhanh3-img');
    const chinhanh1content = document.querySelector('.chinhanh1-content');
    const chinhanh2content = document.querySelector('.chinhanh2-content');
    const chinhanh3content = document.querySelector('.chinhanh3-content');

    if(scrollY > 0){
        wrapperTop.style.height = '75px';
    } else {
        wrapperTop.style.height = '70px';
    }

    if(scrollY > 314){
        wrapperMiddle3.style.transform =  'translateY(0)';
    } else {
        wrapperMiddle3.style.transform = 'translateY(-2%)';
    }

    // if(scrollY > 637){
    //     middle3Propose.style.transform =  'translateY(0)';
    // } else {
    //     middle3Propose.style.transform =  'translateY(-10%)';
    // }

    if(scrollY > 1356){
        chinhanh1img.style.transform = 'translateX(0)';
        chinhanh1content.style.transform = 'translateX(0)';
    } else {
        chinhanh1img.style.transform = 'translateX(-5%)';
        chinhanh1content.style.transform = 'translateX(5%)';
    }

    if(scrollY > 1779){
        chinhanh2img.style.transform = 'translateX(0)';
        chinhanh2content.style.transform = 'translateX(0)';
    } else {
        chinhanh2img.style.transform = 'translateX(5%)';
        chinhanh2content.style.transform = 'translateX(-5%)';
    }

    if(scrollY > 2093){
        chinhanh3img.style.transform = 'translateX(0)';
        chinhanh3content.style.transform = 'translateX(0)';
    } else {
        chinhanh3img.style.transform = 'translateX(-5%)';
        chinhanh3content.style.transform = 'translateX(5%)';
    }

    // if(scrollY > 2500){
    //     bottom.style.transform = 'translateY(0)';
    //     wrapperTop.style.display = 'none';
    // } else {
    //     bottom.style.transform = 'translateY(-3%)';
    //     wrapperTop.style.display = 'block';
    // }
})

/*---------------------------------------------------------------*/


/*----------------------homeInformationPropose.js-----------------*/
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

/*---------------------------------------------------------------*/



/*-------------------homeCart.js-----------------------------*/

// let arrayCart;
let totalPrice;
// let arrayGhim;

// const quantityCart = document.querySelector('.quantity-cart-carthome')
// const quantityGhim = document.querySelector('.quantity-ghim-carthome')

/* Cart Current For Payment Independent */

// const handleCartCurrent = (idCar) => {
//   const indexCar = arrayCart.findIndex(item => item.id === idCar);

//   let arrayPaymentCurrent = [];
//   arrayPaymentCurrent.push(arrayCart[indexCar])

//   const dataPaymentCurrent = JSON.stringify(arrayPaymentCurrent);
  
//   if(dataPaymentCurrent){
//     localStorage.setItem('PaymentCurrent', dataPaymentCurrent);
//   } else {
//     console.log("error not found data payment current");
//   }
// }



/* Transform Car Curent */

const handleTransformCarCurrent = (idCar) => {
    window.scrollTo(0, 0);

  const itemIndex = arrayCart.findIndex(item => item.id === idCar);

  const carCurrentInformation = JSON.stringify(arrayCart[itemIndex]);

  if(carCurrentInformation){
    localStorage.setItem('carCurrent', carCurrentInformation);

  } else {
    console.log('car is not found');
  }

  bodyCart.style.display = 'none';
  bodyInformationCar.style.display = 'block';

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


/* Thong Bao */
const wrapperThongBao = document.querySelector('.wrapper-thongbao');

const handleDisplayThongBao = () => {
    wrapperThongBao.style.top = "5%";

  const timer = setTimeout(() => {
    clearTimeout(timer);
    wrapperThongBao.style.top = "-20%";
  }, 1500);
}

/* delete Ghim */

const handlePostDataCart = (listCart) => {
  const postCart = JSON.stringify(listCart);

  if(postCart){
    localStorage.setItem('Cart', postCart);
  } else {
    console.log('post Cart is not correct');
  }
}

const handleDeteleCart = (value) => {
  const itemIndex = arrayCart.findIndex(item => item.id === value); // cứu sống bản lĩnh đàn ông
  arrayCart.splice(itemIndex, 1);
  handleReloadCart(arrayCart?arrayCart.length:0);
  handlePostDataCart(arrayCart);
  renderCartHome(arrayCart);
  handleDisplayThongBao();
  totalPrice = handleTongGia(arrayCart);
  renderTotalPrice(totalPrice);
}
// let Cars;

/* render */
window.addEventListener('DOMContentLoaded', () => {
    const dataGhim = localStorage.getItem('Cars');
    Cars = JSON.parse(dataGhim);
})

window.addEventListener('DOMContentLoaded', () => {
    const dataGhim = localStorage.getItem('Ghim');
    arrayGhim = JSON.parse(dataGhim);

    if(arrayGhim){
      handleReloadGhim(arrayGhim?arrayGhim.length:0);
    }
})


// window.addEventListener('DOMContentLoaded', () => {
//   const dataCart = localStorage.getItem('Cart');

//   if(dataCart){
//     arrayCart = JSON.parse(dataCart);
//     renderCartHome(arrayCart);
//     totalPrice = handleTongGia(arrayCart);
//     quantityCart.innerText = `${arrayCart.length}`;
//     renderTotalPrice(totalPrice);
//   } else {
//     console.log('not found data Cart');
//   }
// })

function handleTongGia(listCart){
  let sum = 0;
  for(let i = 0; i < listCart.length ; i++){
    sum += listCart[i].giatieuchuan;
  }
  return sum;
}

function handleGiaTien(giatien){
  const n = Math.floor(giatien / 1000);
  const decimal = giatien % 1000;
  let paddedDecimal = decimal.toString();
  while (paddedDecimal.length < 3) {
    paddedDecimal = '0' + paddedDecimal;
  }
  return n + '.' + paddedDecimal;
}

const ulListCart = document.querySelector('.listbox-listCart ul');

function renderCartHome(listCart){
  let ul = '';
  for(let i = 0; i < listCart.length ; i++){
    if(listCart[i]){
      ul +=
      `
        <li class="listCart-item">
          <div class="listCart-stt">
            <div>
              <p>${i + 1}</p>
            </div>
          </div>
          <div class="listCart-img">
            <div>
              <img src="${listCart[i].hinhanh}">
            </div>
          </div>
          <div class="listCart-ten">
            <p>${listCart[i].ten}</p>
            <p>${handleGiaTien(listCart[i].giatieuchuan)}.000.000 vnđ</p>
          </div>
          <div class="listCart-information">
            <a>
              <button value="${listCart[i].id}" onclick="handleTransformCarCurrent(this.value)">
                <p>Thông tin xe</p>
              </button>
            </a>
          </div>
          <div class="listCart-thanhtoanngay">
            <a>
              <button value="${listCart[i].id}" onclick="handleCartCurrent(this.value)">
                <p>Thanh toán ngay</p>
              </button>
            </a>
          </div>
          <div class="listCart-xoaCart">
            <button value="${listCart[i].id}" onclick="handleDeteleCart(this.value)">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </li>
      `
    }
  }

  ulListCart.innerHTML = ul;
}

const total = document.getElementById('total');
function renderTotalPrice(totalPrice){
  total.innerHTML = `${handleGiaTien(totalPrice)}.000.000 vnđ`;
}


const topThongtin = document.getElementById('top-thongtin');
const wrapperMiddle3 = document.querySelector('.wrapper-middle-3');

topThongtin.addEventListener('click',  () => {
  window.scrollTo(0, document.body.scrollHeight);
})

window.addEventListener('scroll', () => {
  const srollY = window.scrollY;


  const wrapperTop = document.querySelector('.top');
  const bottomBodyCart = document.querySelector('.wrapper-body-cart #bottom');
  const middle2Title = document.querySelector('.middle-2-title');

  if(srollY > 0){
    wrapperTop.style.height = '75px';
    middle2Title.style.transform = 'translateY(0)';
  } else {
    wrapperTop.style.height = '70px';
    middle2Title.style.transform = 'translateY(-5%)';
  }

  if(scrollY > 0){
    bottomBodyCart.style.transform = 'translateY(0)';
  } else {
    bottomBodyCart.style.transform = 'translateY(-3%)';
  }
})

/*-------------------------------------------------------------*/

/*---------------------homeThanhToanHoaDon.js--------------------------*/

let arrayQuantityCar = [];
let arrayQuantityCarCurrent = []

/* logic */
let sumSoluong = 0;
let sumPhiVanChuyen = 0;
let sumTongGiaXe = 0;
let sumPhiDichVu = 10;
let sumPhiCocBaoDuongXe = 50;

function handleSoLuong(listCart){
    let sum = 0;
    for(let i = 0 ; i < listCart.length; i++){
      sum += listCart[i];
    }
    sumSoluong = sum;
    return sum;
}

function handlePhiVanChuyen(listCart){
  let sum = 0;
  for(let i = 0; i < listCart.length ; i++){
    sum += listCart[i] * 20;
  }
  sumPhiVanChuyen = sum;

  if(sum > 1000){
    return handleGiaTien(sum);
  }
  return sum;
}

function handleTongGiaXe(listCart, quantityCar){
  let sum = 0;
  for(let i = 0; i < listCart.length ; i++){
    sum += quantityCar[i] * listCart[i].giatieuchuan;
  }

  sumTongGiaXe = sum;
  return handleGiaTien(sum);
}


function handleTongThanhToan(){
  return handleGiaTien(sumTongGiaXe + sumPhiVanChuyen + sumPhiDichVu + sumPhiCocBaoDuongXe);
}


/* Plus Minus */
const handleCong = (value, position) => {
  if(arrayQuantityCar[position] > 0){
      arrayQuantityCar[position]++;
      renderHoaDon(arrayCart, arrayQuantityCar);  
      renderTotal(arrayCart, arrayQuantityCar);
  }
}

const handleTru = (value, position) => {
  if(arrayQuantityCar[position] > 1){
    arrayQuantityCar[position]--;
    renderHoaDon(arrayCart, arrayQuantityCar);
    renderTotal(arrayCart, arrayQuantityCar);
  }
}


/* render */
const initializeQuantityOne = (lengthCart) => {
  for(let i = 0 ; i < lengthCart; i++){
    arrayQuantityCar[i] = 1;
  }
}

// window.addEventListener('DOMContentLoaded', () => {
//   const dataCart = localStorage.getItem('Cart');

//   if(dataCart){
//     arrayCart = JSON.parse(dataCart);
//     initializeQuantityOne(arrayCart.length);
//     renderHoaDon(arrayCart, arrayQuantityCar);
//     renderTotal(arrayCart, arrayQuantityCar);
//   } else {
//     console.log('not found data cart');
//   }
// })

function handleGiaTien(giatien){
  const n = Math.floor(giatien / 1000);
  const decimal = giatien % 1000;
  let paddedDecimal = decimal.toString();
  while (paddedDecimal.length < 3) {
    paddedDecimal = '0' + paddedDecimal;
  }
  return n + '.' + paddedDecimal;
}

const ulContentBox = document.querySelector('.wrapper-body-thanhtoan .content-box ul');

function renderHoaDon(listCart, listQuantityCar){
  let ul = 
  `
    <li>
      <div class="box-stt">
        <p>STT</p>
      </div>
      <div class="box-tenmau">
        <p>Tên Mẫu</p>
      </div>
      <div class="box-gia">
        <p>Giá Tiền</p>
      </div>
      <div class="box-soluong">
        <p>Số lượng</p>
      </div>
    </li>
  `;

  for(let i = 0; i < listCart.length ; i++){
    if(listCart[i]){
      ul +=
      `
        <li>
          <div class="box-stt">
            <p>${i + 1}</p>
          </div>
          <div class="box-tenmau">
            <p>${listCart[i].ten}</p>
          </div>
          <div class="box-gia">
            <p>${handleGiaTien(listCart[i].giatieuchuan)}.000.000 vnđ</p>
          </div>
          <div class="box-soluong">
            <button id="tru-${i}" value="${listQuantityCar[i]}" name="${i}"  onclick="handleTru(this.value, this.name)">
              <i class="fa-solid fa-minus"></i>
            </button>
            <p>${listQuantityCar[i]}</p>
            <button id="cong-${i}" value="${listQuantityCar[i]}" name="${i}" onclick="handleCong(this.value, this.name)">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </li>
      `
    }
  }
  ulContentBox.innerHTML = ul;
}

const ulTotalBox = document.querySelector('.wrapper-body-thanhtoan .total-box ul');

function renderTotal(listCart, quantityCar){
  let ul = 
  `
    <li>
      <p>Tổng số lượng</p>
      <p>x${handleSoLuong(quantityCar)}</p>
    </li>
    <li>
      <p>Phí vận chuyển (xe/20.000.000)</p>
      <p>${handlePhiVanChuyen(quantityCar)}.000.000 vnđ</p>
    </li>
    <li>
      <p>Phí dịch vụ</p>
      <p>10.000.000 vnđ</p>
    </li>
    <li>
      <p>Phí cọc bảo dưỡng xe</p>
      <p>50.000.000 vnđ</p>
    </li>
    <li>
      <p>Tổng giá xe</p>
      <p>${handleTongGiaXe(listCart, quantityCar)}.000.000 vnđ</p>
    </li>
    <li>
      <p>Tổng Thanh Toán</p>
      <p>${handleTongThanhToan()}.000.000 vnđ</p>
    </li>
  `;

  ulTotalBox.innerHTML = ul;
}
/*-----------------------------------------------------------*/

/*-----------------homeThanhToanForm.js---------------------------------*/

const buttonDSTTThanhToan = document.querySelector('.wrapper-body-thanhtoan #dsttThanhToan');

buttonDSTTThanhToan.addEventListener('click', () => {
    bodyCart.style.display = 'block';
    bodyThanhToan.style.display = 'none';
    window.scrollTo(0, 0);
    renderCartHome(arrayCart);
    totalPrice = handleTongGia(arrayCart);
    handleReloadCart(arrayCart?arrayCart.length:0);
    renderTotalPrice(totalPrice);
    renderPageElement(arrayCars, totalPages, 1);
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
let arrayResultPayment = [];//main data result

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

/*-------------------------------------------------------------*/

/*-----------------homeThanhToanFormCurrent.js---------------------------------*/

const buttonDSTTThanhToanCurrent = document.querySelector('.wrapper-body-thanhtoan-current #dsttThanhToanCurrent');

buttonDSTTThanhToanCurrent.addEventListener('click', () => {
    bodyCart.style.display = 'block';
    bodyThanhToanCurrent.style.display = 'none';
    window.scrollTo(0,0)
    renderCartHome(arrayCart);
    totalPrice = handleTongGia(arrayCart);
    handleReloadCart(arrayCart?arrayCart.length:0);
    renderTotalPrice(totalPrice);
    renderPageElement(arrayCars, totalPages, 1);
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
let arrayResultPaymentCR = [];//main data result

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
/*-------------------------------------------------------*/

/*--------------homeThanhToanCurrent.js--------------------*/


/* logic */

const handleCongCurrent = (value, position) => {
  if(arrayQuantityCarCurrent[position] > 0){
      arrayQuantityCarCurrent[position]++;
      renderHoaDonCurrent(paymentCarCurrent, arrayQuantityCarCurrent);  
      renderTotalCurrent(paymentCarCurrent, arrayQuantityCarCurrent);
  }
}

const handleTruCurrent = (value, position) => {
  if(arrayQuantityCarCurrent[position] > 1){
    arrayQuantityCarCurrent[position]--;
    renderHoaDonCurrent(paymentCarCurrent, arrayQuantityCarCurrent);
    renderTotalCurrent(paymentCarCurrent, arrayQuantityCarCurrent);
  }
}


/* render */
const initializeQuantityOneCurrent = (lengthCart) => {
  for(let i = 0 ; i < lengthCart; i++){
    arrayQuantityCarCurrent[i] = 1;
  }
}

let sumSoluongCurrent = 0;
let sumPhiVanChuyenCurrent = 0;
let sumTongGiaXeCurrent = 0;
let sumPhiDichVuCurrent = 10;
let sumPhiCocBaoDuongXeCurrent = 50;

function handleSoLuongCurrent(listCart){
    let sum = 0;
    for(let i = 0 ; i < listCart.length; i++){
      sum += listCart[i];
    }
    sumSoluongCurrent = sum;
    return sum;
}

function handlePhiVanChuyenCurrent(listCart){
  let sum = 0;
  for(let i = 0; i < listCart.length ; i++){
    sum += listCart[i] * 20;
  }
  sumPhiVanChuyenCurrent = sum;

  if(sum > 1000){
    return handleGiaTien(sum);
  }
  return sum;
}

function handleTongGiaXeCurrent(listCart, quantityCar){
  let sum = 0;
  for(let i = 0; i < listCart.length ; i++){
    sum += quantityCar[i] * listCart[i].giatieuchuan;
  }

  sumTongGiaXeCurrent = sum;
  return handleGiaTien(sum);
}


function handleTongThanhToanCurrent(){
  return handleGiaTien(sumTongGiaXeCurrent + sumPhiVanChuyenCurrent + sumPhiDichVuCurrent + sumPhiCocBaoDuongXeCurrent);
}

function handleGiaTien(giatien){
  const n = Math.floor(giatien / 1000);
  const decimal = giatien % 1000;
  let paddedDecimal = decimal.toString();
  while (paddedDecimal.length < 3) {
    paddedDecimal = '0' + paddedDecimal;
  }
  return n + '.' + paddedDecimal;
}

const ulContentBoxCurrent = document.querySelector('.wrapper-body-thanhtoan-current .content-box ul');

function renderHoaDonCurrent(listCart, listQuantityCar){
  let ul = 
  `
    <li>
      <div class="box-stt">
        <p>STT</p>
      </div>
      <div class="box-tenmau">
        <p>Tên Mẫu</p>
      </div>
      <div class="box-gia">
        <p>Giá Tiền</p>
      </div>
      <div class="box-soluong">
        <p>Số lượng</p>
      </div>
    </li>
  `;

  for(let i = 0; i < listCart.length ; i++){
    if(listCart[i]){
      ul +=
      `
        <li>
          <div class="box-stt">
            <p>${i + 1}</p>
          </div>
          <div class="box-tenmau">
            <p>${listCart[i].ten}</p>
          </div>
          <div class="box-gia">
            <p>${handleGiaTien(listCart[i].giatieuchuan)}.000.000 vnđ</p>
          </div>
          <div class="box-soluong">
            <button id="tru-${i}" value="${listQuantityCar[i]}" name="${i}"  onclick="handleTruCurrent(this.value, this.name)">
              <i class="fa-solid fa-minus"></i>
            </button>
            <p>${listQuantityCar[i]}</p>
            <button id="cong-${i}" value="${listQuantityCar[i]}" name="${i}" onclick="handleCongCurrent(this.value, this.name)">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </li>
      `
    }
  }
  ulContentBoxCurrent.innerHTML = ul;
}

const ulTotalBoxCurrent = document.querySelector('.wrapper-body-thanhtoan-current .total-box ul');

function renderTotalCurrent(listCart, quantityCar){
  let ul = 
  `
    <li>
      <p>Tổng số lượng</p>
      <p>x${handleSoLuongCurrent(quantityCar)}</p>
    </li>
    <li>
      <p>Phí vận chuyển (xe/20.000.000)</p>
      <p>${handlePhiVanChuyenCurrent(quantityCar)}.000.000 vnđ</p>
    </li>
    <li>
      <p>Phí dịch vụ</p>
      <p>10.000.000 vnđ</p>
    </li>
    <li>
      <p>Phí cọc bảo dưỡng xe</p>
      <p>50.000.000 vnđ</p>
    </li>
    <li>
      <p>Tổng giá xe</p>
      <p>${handleTongGiaXeCurrent(listCart, quantityCar)}.000.000 vnđ</p>
    </li>
    <li>
      <p>Tổng Thanh Toán</p>
      <p>${handleTongThanhToanCurrent()}.000.000 vnđ</p>
    </li>
  `;

  ulTotalBoxCurrent.innerHTML = ul;
}

/*----------------------------------------------------------------------*/


/*---------------------homeGhim.js--------------------*/
// let Cars;


/* Payment Current */
// const handleCartCurrent = (idCar) => {
//   const indexCar = Cars.findIndex(item => item.id === idCar);

//   let arrayPaymentCurrent = [];
//   arrayPaymentCurrent.push(Cars[indexCar])

//   const dataPaymentCurrent = JSON.stringify(arrayPaymentCurrent);
  
//   if(dataPaymentCurrent){
//     localStorage.setItem('PaymentCurrent', dataPaymentCurrent);
//   } else {
//     console.log("error not found data payment current");
//   }
// }


window.addEventListener('DOMContentLoaded', () => {
  const dataCar = localStorage.getItem('Cars');
  Cars = JSON.parse(dataCar);
  if(Cars){
    if(Cars.length % 6 == 0){
        totalPages = Cars.length / 6;
    } else {
        totalPages = Math.ceil(Cars.length / 6);
    }
  }
})


// let arrayGhim;

// window.addEventListener('DOMContentLoaded', () => {
//   const dataGhim = localStorage.getItem('Ghim');

//   if(dataGhim){
//     arrayGhim = JSON.parse(dataGhim);

//     if(arrayGhim.length % 6 == 0){
//         totalPages = arrayGhim.length / 6;
//     } else {
//         totalPages = Math.ceil(arrayGhim.length / 6);
//     }

//     renderPageElement(arrayGhim, totalPages, 1);
//   } else {
//     console.log('not found data ghim');
//   }
// })

// const quantityCart = document.getElementById('quantity-cart');

// let arrayCart = [];

window.addEventListener('DOMContentLoaded', () => {
    const dataCart = localStorage.getItem('Cart');
    arrayCart = JSON.parse(dataCart);
    handleReloadCart(arrayCart?arrayCart.length:0);
    renderCartActive3(arrayCart);
})


function findCarInListCar(nameCar){
    for(let i = 0 ; i < Cars.length ; i++){
        if(Cars[i].ten == nameCar){
            return Cars[i];
        }
    }
}

function handleCheckCart3(check, nameCar, iconId){
    if(check){
        const infoCar = findCarInListCar(nameCar);

        arrayCart.push(infoCar);

        handleReloadCart(arrayCart?arrayCart.length:0);
        localStorage.setItem('Cart', JSON.stringify(arrayCart));
        let icon = document.getElementById(`iconCartInformation-${infoCar.id}`);
        icon.style.color = 'black';
        let button = document.getElementById(`button-GhimInformation${infoCar.id}`);
        button.style.backgroundColor = 'darkred';
    } else {
        let icon = document.getElementById(`iconCartInformation-${iconId}`);
        let button = document.getElementById(`button-GhimInformation${iconId}`);
        for (let i = 0; i < arrayCart.length; i++) {
            if (arrayCart[i].ten == nameCar) {
                icon.style.color = 'white';
                button.style.backgroundColor = 'goldenrod';
                arrayCart.splice(i, 1);
            }
        }
        handleReloadCart(arrayCart?arrayCart.length:0);
        localStorage.setItem('Cart', JSON.stringify(arrayCart));
    }
}

function renderCartActive3(arrayCart){

    if(arrayCart){
        for(let i = 0 ; i < arrayCart.length; i++){
            let icon = document.getElementById(`iconCartInformation-${arrayCart[i].id}`);
            let button = document.getElementById(`button-GhimInformation${arrayCart[i].id}`);
            if(icon){
                icon.style.color = 'black';
                button.style.backgroundColor = 'darkred';
            }
        }
    }
}

const handleChitietCart3 = (nameCar) => {
    let check = true;
    let iconId;
    for(let i = 0 ; i < arrayCart.length ; i++){
        if(arrayCart[i].ten == nameCar){
            iconId = arrayCart[i].id;
            check = !check;
        }
    }
    handleCheckCart3(check, nameCar, iconId);
}


/* render Ghim */
function handleGiaTien(giatien){
  const n = Math.floor(giatien / 1000);
  const decimal = giatien % 1000;
  let paddedDecimal = decimal.toString();
  while (paddedDecimal.length < 3) {
    paddedDecimal = '0' + paddedDecimal;
  }
  return n + '.' + paddedDecimal;
}

const ulList = document.querySelector('.middle-2-listGhim .ul-list');


const renderPageElement2 = (arrayGhim, totalPagesGhim, currentPage) => {
  totalPagesGhim = totalPagesGhim;
    window.scrollTo(0, 0);


  const firstItem = elementPerPage*(currentPage-1);
  const lastItem = firstItem + elementPerPage;

  let ul = '';
  if(arrayGhim === undefined){
    arrayGhim = arrayGhim;
  }

  for(let i = firstItem; i < lastItem ; i++){
    if(arrayGhim[i]){
        ul +=
    `
      <li class="list-item">
        <div class="list-item-img">
          <div class="item-img-top">
            <img src="${arrayGhim[i].hinhanh}">
          </div>
          <div class="item-img-bottom">
            <div>
              <div class="img-bottom-stt">
                <p>${i + 1}</p>
              </div>
            </div>
            <div>
              <a>
                <button value="${arrayGhim[i].id}" onclick="handleCartCurrentGhim(this.value)">
                    <i class="fa-solid fa-dollar-sign"></i>
                  </button>
              </a>
            </div>
            <div>
              <button id="button-GhimInformation${arrayGhim[i].id}" value="${arrayGhim[i].ten}" onclick="handleChitietCart3(this.value)">
                <i id="iconCartInformation-${arrayGhim[i].id}" class="fa-solid fa-money-check-dollar"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="list-item-content">
          <ul>
            <li>
              <p>Tên mẫu</p>
              <p>${arrayGhim[i].ten}</p>
            </li>
            <li>
              <p>Công suât</p>
              <p>${arrayGhim[i].congxuat} PS (220kW)</p>
            </li>
            <li>
              <p>Cao</p>
              <p>${arrayGhim[i].cao}mm</p>
            </li>
            <li>
              <p>Dài</p>
              <p>${arrayGhim[i].dai}mm</p>
            </li>
            <li>
              <p>Mô men xoắn cực đại</p>
              <p>380 Nm</p>
            </li>
            <li>
              <p>Tăng tốc từ 0 - 100 km/giờ</p>
              <p>${arrayGhim[i].tangtoc} giây</p>
            </li>
            <li>
              <p>Tốc độ tối đa</p>
              <p>${arrayGhim[i].tocdo} km/giờ</p>
            </li>
            <li>
              <p>Tiêu thụ nhiên liệu kết hợp (lít/100km)</p>
              <p>8.1</p>
            </li>
            <li>
              <p>Lượng khí thải CO2 (g/km)</p>
              <p>185</p>
            </li>
            <li>
              <p>Giá tiêu chuẩn</p>
              <p>${handleGiaTien(arrayGhim[i].giatieuchuan)}.000.000 vnđ</p>
            </li>
          </ul>
        </div>
        <div class="list-item-delete">
          <button value=${arrayGhim[i].id} onclick="handleDeleteCar(this.value)">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </li>
    `
    }
  }
  ulList.innerHTML = ul;
  element2(arrayGhim, totalPagesGhim, currentPage);
}


/* pagination */


const ulPaginationBoxBodyGhim = document.querySelector('#body-ghim .pagination-box ul')
function element2(arrayGhim, totalPagesGhim, pageCurrent){

    renderCartActive3(arrayCart)

    let liTag = '';
    let beforePages = pageCurrent - 1;
    let afterPages = pageCurrent + 1;

    if(arrayGhim === undefined){
      arrayGhim = arrayGhim;
    }

    if(pageCurrent > 1){
        liTag += `<li class='btn prev' onclick='renderPageElement2(arrayGhim, totalPagesGhim, ${pageCurrent - 1})'><span><i class='fa-solid fa-chevron-left'></i> Prev</span></li>`; 
    }

    if(pageCurrent > 2){
        liTag += `<li class="numb" onclick="renderPageElement2(arrayGhim, totalPagesGhim, 1)"><span>1</span></li>`;
        if(pageCurrent > 3){
            liTag += `<li class="numb"><span>...</span></li>`;            
        }
    }

    if(pageCurrent == totalPagesGhim){
        beforePages = beforePages - 2;
    } else if(pageCurrent == totalPagesGhim - 1){
        beforePages = beforePages - 1;
    }

    if(pageCurrent == 1){
        afterPages = afterPages + 2;
    } else if(pageCurrent == 2){
        afterPages = afterPages + 1;
    }


    for(let i = beforePages; i <= afterPages; i++){
        if(i > totalPagesGhim){
            continue;
        }

        if(i < 1){
            continue;
        }

        let activeLi;
        if(i == pageCurrent){
            activeLi = 'active';
        } else { 
            activeLi = '';
        }
        liTag += `<li class='numb ${activeLi}' onclick='renderPageElement2(arrayGhim, totalPagesGhim, ${i})'><span>${i}</span></li>`;
    }

    if(pageCurrent < totalPagesGhim - 1){
        if(pageCurrent < totalPagesGhim - 2){
            liTag += `<li class="numb"><span>...</span></li>`;           
        }
        liTag += `<li class="numb" onclick="renderPageElement2(arrayGhim, totalPagesGhim, ${totalPagesGhim})"><span>${totalPagesGhim}</span></li>`;
    }

    if(pageCurrent < totalPagesGhim){
        liTag += `<li class='btn next' onclick='renderPageElement2(arrayGhim, totalPagesGhim, ${pageCurrent + 1})'><span> Next<i class='fa-solid fa-chevron-right'></i></span></li>`;
    }

    if (pageCurrent > totalPagesGhim) {
      console.log('pageCurrent > totalPagesGhim');
        liTag = '';
    }

    if (pageCurrent < 1) {
      console.log('pageCurrent < 1');
        liTag = '';
    }

    // solve total == 3 error
    if(totalPagesGhim == 3){
      liTag = '';
      liTag += `<li class='btn prev' onclick='renderPageElement2(arrayGhim, totalPagesGhim, ${pageCurrent - 1})'><span><i class='fa-solid fa-chevron-left'></i> Prev</span></li>`;
      for(let i = 1; i <= 3; i++){
          if(i > totalPagesGhim){
              continue;
          }

          if(i < 1){
              continue;
          }

          let activeLi;
          if(i == pageCurrent){
              activeLi = 'active';
          } else { 
              activeLi = '';
          }
          liTag += `<li class='numb ${activeLi}' onclick='renderPageElement2(arrayGhim, totalPagesGhim, ${i})'><span>${i}</span></li>`;
      }
      liTag += `<li class='btn next' onclick='renderPageElement2(arrayGhim, totalPagesGhim, ${pageCurrent + 1})'><span> Next<i class='fa-solid fa-chevron-right'></i></span></li>`;
    }

    ulPaginationBoxBodyGhim.innerHTML = liTag;

}

/*-----------------------------------------------------*/

/*----------------------homeGhimXoa.js-------------------*/
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

/*----------------------------------------------------------*/
