const inputSuaSanPham = document.getElementById('inputSuaSanPham');
const submitSuaSanPham = document.getElementById('submitSuaSanPham');
const formSua = document.querySelector('.content-suasanpham-input form');
const suaSanPhamKetQua = document.querySelector('.suasanpham-ketqua p');

const suaSanPhamList = document.querySelector('.suasanpham-list ul');

inputSuaSanPham.addEventListener('focus', () => {
    inputSuaSanPham.setAttribute('placeholder', '');
})

let valueInputSuaSanPham;
let arrayCarSuaSanPham = [];

function findCarForSuaSanPham(value){
    for(let i = 0; i < Cars.length ; i++){
        if(Cars[i].ten.toUpperCase().includes(value.toUpperCase())){
            arrayCarSuaSanPham.push(Cars[i]);
        }
    }
}

submitSuaSanPham.addEventListener("click", (e) => {
    e.preventDefault();

    arrayCarSuaSanPham = [];

    valueInputSuaSanPham = inputSuaSanPham.value;

    suaSanPhamKetQua.innerText = `Kết quả tìm kiếm : "${valueInputSuaSanPham}"`;

    findCarForSuaSanPham(valueInputSuaSanPham)

    renderCarSuaSanPham(arrayCarSuaSanPham);

    inputSuaSanPham.value = '';
})

formSua.addEventListener('submit', (e) => {
    e.preventDefault();

    arrayCarSuaSanPham = [];

    valueInputSuaSanPham = inputSuaSanPham.value;

    suaSanPhamKetQua.innerText = `Kết quả tìm kiếm : "${valueInputSuaSanPham}"`;

    findCarForSuaSanPham(valueInputSuaSanPham)

    renderCarSuaSanPham(arrayCarSuaSanPham);

    inputSuaSanPham.blur();
    inputSuaSanPham.value = '';
})

function renderCarSuaSanPham(listCarSuaSanPham){
    let ul = '';
    for(let i = 0 ; i < listCarSuaSanPham.length ; i++){
        ul +=
        `
            <li class="suasanpham-item">
                  <div class="suasanpham-item-img">
                    <img src="${listCarSuaSanPham[i].hinhanh}" alt="">
                  </div>
                  <div class="suasanpham-item-ten">
                    <p>${listCarSuaSanPham[i].ten}</p>
                  </div>
                  <div class="suasanpham-item-button">
                    <button value="${listCarSuaSanPham[i].id}"
                    onclick="handleOpenAreaRepair(this.value)">
                      <p>
                        <i class="fa-solid fa-pencil"></i>
                      </p>
                    </button>
                  </div>
                </li>
        `
    }
    suaSanPhamList.innerHTML = ul;
}