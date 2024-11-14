let arrayPaymentDangChoXuly;

window.addEventListener('DOMContentLoaded', () => {
    const dataPayment = localStorage.getItem('Payment');

    if(dataPayment){
        const newDataPayment = JSON.parse(dataPayment);

        arrayPaymentDangChoXuly = newDataPayment;
        renderDangChoXuLy(arrayPaymentDangChoXuly);
    } else {
        console.log('error fetch data payment');
    }
})



/* handle xu ly tu choi */

// let arrayPaymentTuChoi = [];

// window.addEventListener('DOMContentLoaded', () => {
//   const postPaymentTuChoi = JSON.stringify(arrayPaymentTuChoi);

//   if(postPaymentTuChoi){
//     localStorage.setItem('PaymentTuChoi', postPaymentTuChoi);
//   } else {
//     console.log('not post payment tu choi');
//   }
// })

let arrayPaymentTuChoi;

window.addEventListener('DOMContentLoaded', () => {
  const dataPaymentTuChoi = localStorage.getItem('PaymentTuChoi');

  if(dataPaymentTuChoi){
    arrayPaymentTuChoi = JSON.parse(dataPaymentTuChoi);
  } else {
    console.log('not fetch data payment tu choi');
  }
})

const postPaymentTuChoi = (i) => {
  const postArrayPaymentTuChoi = JSON.stringify(arrayPaymentTuChoi);

  if(postPaymentTuChoi){
    localStorage.setItem('PaymentTuChoi', postArrayPaymentTuChoi);
  } else {
    console.log('erro post data payment tu choi');
  }

  const postArrayPayment = JSON.stringify(arrayPaymentDangChoXuly);

  if(postArrayPayment){
    localStorage.setItem('Payment', postArrayPayment);
  } else {
    console.log('erro post data payment');
  }

  renderPaymentDaTuChoi(arrayPaymentTuChoi);
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

const handleDangChoXuLyTuChoi = (i) => {
  const timeNow = handleRealTimePayment();
  arrayPaymentDangChoXuly[i].thoigiantuchoi = timeNow;
  arrayPaymentTuChoi.push(arrayPaymentDangChoXuly[i]);

  handleDeleteDangChoXuLy(i);

  renderDangChoXuLy(arrayPaymentDangChoXuly);

  thongBaoAdmin('tuChoiXuLy');

  postPaymentTuChoi(i);
}


/* handle xu ly xac nhan */

// let arrayPaymentXacNhan = [];
// window.addEventListener('DOMContentLoaded', () => {
//   const postPaymentXacNhan = JSON.stringify(arrayPaymentXacNhan);

//   if(postPaymentXacNhan){
//     localStorage.setItem('PaymentXacNhan', postPaymentXacNhan);
//   } else {
//     console.log('not post payment xac nhan');
//   }
// })

let arrayPaymentXacNhan;

window.addEventListener('DOMContentLoaded', () => {
  const dataPaymentXacNhan = localStorage.getItem('PaymentXacNhan');

  if(dataPaymentXacNhan){
    arrayPaymentXacNhan = JSON.parse(dataPaymentXacNhan);
  } else {
    console.log('not fetch data payment xac nhan');
  }
})

const handleDeleteDangChoXuLy = (index) => {
  arrayPaymentDangChoXuly.splice(index, 1);
}

const postPaymentXacNhan = (i) => {
  const postArrayPaymentXacNhan = JSON.stringify(arrayPaymentXacNhan);

  if(postPaymentXacNhan){
    localStorage.setItem('PaymentXacNhan', postArrayPaymentXacNhan);
  } else {
    console.log('erro post data payment xac nhan');
  }

  const postArrayPayment = JSON.stringify(arrayPaymentDangChoXuly);

  if(postArrayPayment){
    localStorage.setItem('Payment', postArrayPayment);
  } else {
    console.log('erro post data payment');
  }

  renderPaymentDaXacNhan(arrayPaymentXacNhan);
}

const handleDangChoXuLyXacNhan = (i) => {
  const timeNow = handleRealTimePayment();
  arrayPaymentDangChoXuly[i].thoigianxacnhan = timeNow;
  arrayPaymentXacNhan.push(arrayPaymentDangChoXuly[i]);

  handleDeleteDangChoXuLy(i);

  renderDangChoXuLy(arrayPaymentDangChoXuly);

  thongBaoAdmin('xacNhanXuLy');

  postPaymentXacNhan(i);


  renderThongKe(arrayPaymentXacNhan);
  renderAdmin();
}


/* handle xu ly more */
const dangChoXuLyTenTrenThe = document.getElementById('dangchoxuly-tentrenthe');
const dangChoXuLySoThe = document.getElementById('dangchoxuly-sothe');
const dangChoXyLySoCVV = document.getElementById('dangchoxuly-cvv');
const dangChoXuLyNgayHetHan = document.getElementById('dangchoxuly-ngayhethan');
const dangChoXuLyPhuongThuc = document.getElementById('dangchoxuly-phuongthuc');
const dangChoXuLyTenSanPham = document.getElementById('dangchoxuly-tensanpham');
const dangChoXuLyGiaTriSanPham = document.getElementById('dangchoxuly-giatrisanpham');
const dangChoXuLyThoiGian = document.getElementById('dangchoxuly-thoigian');

const btnDangChoXuLyClose = document.getElementById('dangchoxuly-close');

const quanLyDonHangDangChoXuLyMore = document.querySelector('.quanlydonhang-dangchoxuly-more');

const openAreaDangChoXuLy = (type) => {
  if(type == 'open'){
    quanLyDonHangDangChoXuLyMore.style.transform = 'translateY(0)';
  } else {
    quanLyDonHangDangChoXuLyMore.style.transform = 'translateY(-150%)';
  }
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

const handleOpenMoreThongTinDangChoXuLy = (i) => {
  openAreaDangChoXuLy('open');
  console.log(arrayPaymentDangChoXuly[i]);


  dangChoXuLyTenTrenThe.innerText = `${arrayPaymentDangChoXuly[i].tentrenthe}`;
  dangChoXuLySoThe.innerText = `${arrayPaymentDangChoXuly[i].sothe}`;
  dangChoXyLySoCVV.innerText = `${arrayPaymentDangChoXuly[i].cvv}`;
  dangChoXuLyNgayHetHan.innerText = `${arrayPaymentDangChoXuly[i].ngayhethan}`;
  dangChoXuLyPhuongThuc.innerText = `${arrayPaymentDangChoXuly[i].phuongthuc}`;
  dangChoXuLyTenSanPham.innerText = `${arrayPaymentDangChoXuly[i].ten}`;
  dangChoXuLyGiaTriSanPham.innerText = `${handleGiaTien(arrayPaymentDangChoXuly[i].giatieuchuan)}.000.000 vnđ`;
  dangChoXuLyThoiGian.innerText = `${arrayPaymentDangChoXuly[i].thoigian}`;
}

btnDangChoXuLyClose.addEventListener('click', () => {
  openAreaDangChoXuLy('close');
})

const dangchoxulyList = document.querySelector('.dangchoxuly-list ul');

function renderDangChoXuLy(listCar){
    let ul = 
    `
        <li class="dangchoxuly-item">
                    <div class="dangchoxuly-item-tensanpham">
                      <p>Tên Sản Phẩm</p>
                    </div>
                    <div class="dangchoxuly-item-tenkhachhang">
                      <p>Tên Thẻ</p>
                    </div>
                    <div class="dangchoxuly-item-phuongthuc">
                      <p>Phương Thức</p>
                    </div>
                    <div class="dangchoxuly-item-xemthem">
                      <p>Thông Tin</p>
                    </div>
                    <div class="dangchoxuly-item-xacnhan">
                      <p>Xác Nhận</p>
                    </div>
                    <div class="dangchoxuly-item-tuchoi">
                      <p>Từ Chối</p>
                    </div>
                  </li>
    `

    for(let i = 0; i < listCar.length ; i++){
        if(listCar[i]){
            ul +=
            `
                <li class="dangchoxuly-item">
                    <div class="dangchoxuly-item-tensanpham">
                      <p>${listCar[i].ten}</p>
                    </div>
                    <div class="dangchoxuly-item-tenkhachhang">
                      <p>${listCar[i].tentrenthe}</p>
                    </div>
                    <div class="dangchoxuly-item-phuongthuc">
                      <p>${listCar[i].phuongthuc}</p>
                    </div>
                    <div class="dangchoxuly-item-xemthem">
                      <button value="${i}" onclick="handleOpenMoreThongTinDangChoXuLy(this.value)">
                        Xem thêm
                      </button>
                    </div>
                    <div class="dangchoxuly-item-xacnhan">
                      <button value="${i}" onclick="handleDangChoXuLyXacNhan(this.value)">
                        Xác nhận
                      </button>
                    </div>
                    <div class="dangchoxuly-item-tuchoi">
                      <button value="${i}" onclick="handleDangChoXuLyTuChoi(this.value)">
                        Từ chối
                      </button>
                    </div>
                  </li>
            `
        }
    }

    dangchoxulyList.innerHTML = ul;
}