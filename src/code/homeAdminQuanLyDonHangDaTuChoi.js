let arrayPaymentDaTuChoi;

window.addEventListener('DOMContentLoaded', () => {
  const dataPaymentDaTuChoi = localStorage.getItem('PaymentTuChoi');

  if(dataPaymentDaTuChoi){
    arrayPaymentDaTuChoi = JSON.parse(dataPaymentDaTuChoi);

    renderPaymentDaTuChoi(arrayPaymentDaTuChoi);
  } else {
    console.log('error fetch payment da tu choi')
  }
})

const daTuChoiList = document.querySelector('.datuchoi-list ul');

function renderPaymentDaTuChoi(listCar){
  let ul = 
  `
    <li class="datuchoi-item">
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
                      <p>Thời Gian Từ Chối</p>
                    </div>
                  </li>
  `
  ;
  for(let i = 0; i < listCar.length; i++){
    if(listCar[i]){
      ul +=
      `
        <li class="datuchoi-item">
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
                      <p>${listCar[i].thoigiantuchoi}</p>
                    </div>
                  </li>
      `
    }
  }

  daTuChoiList.innerHTML = ul;
}