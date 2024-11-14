const inputXoaSanPham = document.getElementById('inputXoaSanPham');
const submitXoaSanPham = document.getElementById('submitXoaSanPham');
const form = document.querySelector('.content-xoasanpham-input form');
const xoaSanPhamKetQua = document.querySelector('.xoasanpham-ketqua p');

const xoaSanPhamList = document.querySelector('.xoasanpham-list ul');
const wrapperThongBao = document.querySelector('.wrapper-thongbao p');
const boxWrapperThongBao = document.querySelector('.wrapper-thongbao')

const contentHoiTruocKhiXoa = document.querySelector('.content-xoasanpham-hoitruockhixoa');
const chacChanXoa = document.getElementById('chacChanXoa');
const tuChoiXoa = document.getElementById('tuChoiXoa');


inputXoaSanPham.addEventListener('focus', () => {
    inputXoaSanPham.setAttribute('placeholder', '');
})

let valueInputXoaSanPham;
let arrayCarXoaSanPham = [];

function findCarForXoaSanPham(value){
    for(let i = 0; i < Cars.length ; i++){
        if(Cars[i].ten.toUpperCase().includes(value.toUpperCase())){
            arrayCarXoaSanPham.push(Cars[i]);
        }
    }
}

function thongBaoAdmin(typeThongBao){
    if(typeThongBao == 'xoaSanPham'){
        wrapperThongBao.innerText = 'Xóa Sản Phẩm Thành Công';
        handleDisplayThongBao()
    } else if(typeThongBao == 'themSanPham'){
        wrapperThongBao.innerText = 'Thêm Sản Phẩm Thành Công';
        handleDisplayThongBao()
    } else if(typeThongBao == 'suaSanPham'){
        wrapperThongBao.innerText = 'Sửa Sản Phẩm Thành Công';
        handleDisplayThongBao()
    } else if (typeThongBao == 'xacNhanXuLy') {
        wrapperThongBao.innerText = 'Xác Nhận Sản Phẩm Thành Công';
        handleDisplayThongBao()
    } else if(typeThongBao == 'tuChoiXuLy') {
        wrapperThongBao.innerText = 'Từ Chối Sản Phẩm Thành Công';
        handleDisplayThongBao()
    } else {
        wrapperThongBao.innerText = 'Đăng Suat Thành Công';
        handleDisplayThongBao()
    }
}

const handleDisplayThongBao = () => {
    boxWrapperThongBao.style.top = "5%";

  const timer = setTimeout(() => {
    clearTimeout(timer);
    boxWrapperThongBao.style.top = "-20%";
  }, 1500);
}

submitXoaSanPham.addEventListener("click", (e) => {
    e.preventDefault();

    arrayCarXoaSanPham = [];

    valueInputXoaSanPham = inputXoaSanPham.value;
    findCarForXoaSanPham(valueInputXoaSanPham);

    xoaSanPhamKetQua.innerText = `Kết quả tìm kiếm : "${valueInputXoaSanPham}"`;

    renderCarXoaSanPham(arrayCarXoaSanPham);

    inputXoaSanPham.value = '';
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    arrayCarXoaSanPham = [];

    valueInputXoaSanPham = inputXoaSanPham.value;
    findCarForXoaSanPham(valueInputXoaSanPham);

    xoaSanPhamKetQua.innerText = `Kết quả tìm kiếm : "${valueInputXoaSanPham}"`;

    renderCarXoaSanPham(arrayCarXoaSanPham);

    inputXoaSanPham.blur();
    inputXoaSanPham.value = '';
})

const handleResetIdCarMain = (listCar) => {
    for(let i = 0 ; i < listCar.length ; i++){
        listCar[i].id = String(i + 1);
    }
}

const handlePostNewCarXoaSanPham = (listCar) => {
    const postNewCars = JSON.stringify(listCar);

    if(postNewCars){
        localStorage.setItem('Cars', postNewCars);
    } else {
        console.log('error for upload new cars');
    }
}

chacChanXoa.addEventListener('click', () => {

    handleResetIdCarMain(Cars);

    handlePostNewCarXoaSanPham(Cars);

    xoaSanPhamList.innerHTML = '';
    xoaSanPhamKetQua.innerText = '';

    if(Cars.length % 6 == 0){
        totalPages = Cars.length / 6;
    } else {
        totalPages = Math.ceil(Cars.length / 6);
    }
    renderPageElement(Cars, totalPages, 1);

    thongBaoAdmin('xoaSanPham');

    renderAdmin();

    contentHoiTruocKhiXoa.style.transform = 'translateY(-250%)';
})

tuChoiXoa.addEventListener('click', () => {
    contentHoiTruocKhiXoa.style.transform = 'translateY(-250%)';
})

const handleXoaSanPham = (idCar) => {

    const indexCar = Cars.findIndex(item => item.id === idCar);

    Cars.splice(indexCar, 1);
        
    contentHoiTruocKhiXoa.style.transform = 'translateY(0)';
}

function renderCarXoaSanPham(listCarXoaSanPham){
    let ul = '';
    for(let i = 0 ; i < listCarXoaSanPham.length ; i++){
        ul +=
        `
            <li class="xoasanpham-item">
                  <div class="xoasanpham-item-img">
                    <img src="${listCarXoaSanPham[i].hinhanh}" alt="">
                  </div>
                  <div class="xoasanpham-item-ten">
                    <p>${listCarXoaSanPham[i].ten}</p>
                  </div>
                  <div class="xoasanpham-item-button">
                    <button value="${listCarXoaSanPham[i].id}" onclick="handleXoaSanPham(this.value)">
                      <p>
                        <i class="fa-solid fa-trash-can"></i>
                      </p>
                    </button>
                  </div>
                </li>
        `
    }
    xoaSanPhamList.innerHTML = ul;
}