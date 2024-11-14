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