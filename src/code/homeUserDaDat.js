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