// let Cars;

// window.addEventListener('DOMContentLoaded', () => {
//   const dataCar = localStorage.getItem('Cars');
//   Cars = JSON.parse(dataCar);
//   renderPageElement(Cars, totalPages, 1);
// })


const middleItemList = document.querySelector('.wrapper-body-store .middle-item-list');

let totalPages = 1;
let elementPerPage = 6;

let arrayCars = Cars;

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
                                <img src="fake-background.jpg">
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
                                <img src="fake-background.jpg">
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