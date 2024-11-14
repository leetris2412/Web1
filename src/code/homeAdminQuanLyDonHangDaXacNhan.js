let arrayPaymentDaXacNhan;

window.addEventListener('DOMContentLoaded', () => {
  const dataPaymentDaXacNhan = localStorage.getItem('PaymentXacNhan');

  if(dataPaymentDaXacNhan){
    arrayPaymentDaXacNhan = JSON.parse(dataPaymentDaXacNhan);

    renderPaymentDaXacNhan(arrayPaymentDaXacNhan);
    renderThongKe(arrayPaymentDaXacNhan);
  } else {
    console.log('error fetch payment da xac nhan')
  }
})

const daXacNhanList = document.querySelector('.daxacnhan-list ul');

function renderPaymentDaXacNhan(listCar){
  let ul = 
  `
    <li class="daxacnhan-item">
                    <div>
                      <p>Tên Sản Phẩm</p>
                    </div>
                    <div>
                      <p>Tên Thẻ</p>
                    </div>
                    <div>
                      <p>Phương Thức</p>
                    </div>
                    <div>
                      <p>Thời Gian Mua</p>
                    </div>
                    <div>
                      <p>Thời Gian Xác Nhận</p>
                    </div>
                  </li>
  `
  ;
  for(let i = 0; i < listCar.length; i++){
    if(listCar[i]){
      ul +=
      `
        <li class="daxacnhan-item">
                    <div>
                      <p>${listCar[i].ten}</p>
                    </div>
                    <div>
                      <p>${listCar[i].tentrenthe}</p>
                    </div>
                    <div>
                      <p>${listCar[i].phuongthuc}</p>
                    </div>
                    <div>
                      <p>${listCar[i].thoigian}</p>
                    </div>
                    <div>
                      <p>${listCar[i].thoigianxacnhan}</p>
                    </div>
                  </li>
      `
    }
  }

  daXacNhanList.innerHTML = ul;
}