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