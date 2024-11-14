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