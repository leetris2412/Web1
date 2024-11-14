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