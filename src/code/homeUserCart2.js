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