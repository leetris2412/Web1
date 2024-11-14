let Cars;

window.addEventListener('DOMContentLoaded', () => {
  const dataCar = localStorage.getItem('Cars');

  if(dataCar){
    Cars = JSON.parse(dataCar);
    if(Cars.length % 6 == 0){
        totalPages = Cars.length / 6;
    } else {
        totalPages = Math.ceil(Cars.length / 6);
    }
    renderPageElement(Cars, totalPages, 1);
  } else {
    console.log('error fetch Cars');
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

const ulTatCaSanPham = document.querySelector('.tatcasanpham-box-list .list-item')

let totalPages;
let elementPerPage = 6;

let arrayCars = Cars;

const renderPageElement = (arrayCars, totalPages, currentPage) => {
  totalPages = totalPages;

  const firstItem = elementPerPage*(currentPage-1);
  const lastItem = firstItem + elementPerPage;

  let ulMiddleItemList = '';

  if(arrayCars === undefined){
    arrayCars = Cars;
  }

  for(let i = firstItem; i < lastItem; i++){
    if(arrayCars[i]){
      ulMiddleItemList +=
    `
    <li class="tatcasanpham-item">
                  <div class="tatcasanpham-list-img">
                    <div class="img-box">
                      <img src="${arrayCars[i].hinhanh}" alt="">
                    </div>
                  </div>
                  <div class="tatcasanpham-list-infor">
                    <ul>
                      <li>
                         <p>Tên mẫu</p>
                         <p>${arrayCars[i].ten}</p>
                      </li>
                      <li>
                        <p>Công suất</p>
                        <p>${arrayCars[i].congxuat} PS (220kW)</p>
                     </li>
                      <li>
                        <p>Cao</p>
                        <p>${arrayCars[i].cao}mm</p>
                      </li>
                      <li>
                        <p>Dài</p>
                        <p>${arrayCars[i].dai}mm</p>
                      </li>
                      <li>
                        <p>Mô men xoắn cực đại</p>
                        <p>380 Nm</p>
                      </li>
                      <li>
                        <p>Tăng tốc từ 0 - 100 km/giờ</p>
                        <p>${arrayCars[i].tangtoc} giây</p>
                      </li>
                      <li>
                        <p>Tốc độ tối đa</p>
                        <p>${arrayCars[i].tocdo} km/giờ</p>
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
                        <p>${handleGiaTien(arrayCars[i].giatieuchuan)}.000.000 vnđ</p>
                      </li>
                    </ul>
                  </div>
                </li>
    `
    }
  }

  ulTatCaSanPham.innerHTML = ulMiddleItemList;
  element(arrayCars, totalPages, currentPage);
}

const ulPaginationBox = document.querySelector('.pagination-box ul')

function element(arrayCars, totalPages, pageCurrent){


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

    ulPaginationBox.innerHTML = liTag;
}

