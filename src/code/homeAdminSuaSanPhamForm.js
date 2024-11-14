/*  Chinh sua ten */
let areaTen1
let areaTen2
let valueAreaTen
let btnSuaSanPhamTenSua
let btnSuaSanPhamTenCheck
let suaSanPhamTen

/*  Chinh sua cong suat */
let areaCongSuat1
let areaCongSuat2
let valueAreaCongSuat
let btnSuaSanPhamCongSuatSua
let btnSuaSanPhamCongSuatCheck
let suaSanPhamCongSuat

/*  Chinh sua cao */
let areaCao1
let areaCao2
let valueAreaCao
let btnSuaSanPhamCaoSua
let btnSuaSanPhamCaoCheck
let suaSanPhamCao

/*  Chinh sua dai */
let areaDai1
let areaDai2
let valueAreaDai
let btnSuaSanPhamDaiSua
let btnSuaSanPhamDaiCheck
let suaSanPhamDai


/*  Chinh sua tang toc */
let areaTangToc1
let areaTangToc2
let valueAreaTangToc
let btnSuaSanPhamTangTocSua
let btnSuaSanPhamTangTocCheck
let suaSanPhamTangToc

/*  Chinh sua toc do */
let areaTocDo1;
let areaTocDo2
let valueAreaTocDo;
let btnSuaSanPhamTocDoSua
let btnSuaSanPhamTocDoCheck;
let suaSanPhamTocDo


/*  Chinh sua gia tieu chuan */
let areaGiaTieuChuan1
let areaGiaTieuChuan2
let valueAreaGiaTieuChuan;
let btnSuaSanPhamGiaTieuChuanSua;
let btnSuaSanPhamGiaTieuChuanCheck;
let suaSanPhamGiaTieuChuan;

/*  Chinh sua hinh anh */
let areaHinhAnh1
let valueAreaHinhAnh;
let suaSanPhamHinhAnh;


let valueTenSua;
let valueCongSuatSua;
let valueCaoSua;
let valueDaiSua;
let valueTangTocSua;
let valueTocDoSua;
let valueGiaTieuChuanSua;
let valueHinhAnhSua;

let booleanTenSua = false;
let booleanCongSuatSua = false;
let booleanCaoSua = false;
let booleanDaiSua = false;
let booleanTangTocSua = false;
let booleanTocDoSua = false;
let booleanGiaTieuChuanSua = false;
let booleanHinhAnhSua = false;

/* handle Onclick btn repair */


areaTen1 = document.querySelector('.area-ten-1');
    areaTen2 = document.querySelector('.area-ten-2');
    valueAreaTen = document.getElementById('valueAreaTen');
    btnSuaSanPhamTenCheck = document.getElementById('suasanpham-ten-check');
    btnSuaSanPhamTenSua = document.getElementById('suasanpham-ten-sua');
    suaSanPhamTen = document.getElementById('suasanpham-ten');

    valueAreaCongSuat = document.getElementById('valueAreaCongSuat');
    areaCongSuat1 = document.querySelector('.area-congsuat-1');
    areaCongSuat2 = document.querySelector('.area-congsuat-2');
    btnSuaSanPhamCongSuatSua = document.getElementById('suasanpham-congsuat-sua');
    btnSuaSanPhamCongSuatCheck = document.getElementById('suasanpham-congsuat-check');
    suaSanPhamCongSuat = document.getElementById('suasanpham-congsuat');

    suaSanPhamCao = document.getElementById('suasanpham-cao');
    btnSuaSanPhamCaoCheck = document.getElementById('suasanpham-cao-check');
    btnSuaSanPhamCaoSua = document.getElementById('suasanpham-cao-sua');
    valueAreaCao = document.getElementById('valueAreaCao');
    areaCao2 = document.querySelector('.area-cao-2');
    areaCao1 = document.querySelector('.area-cao-1');

    areaDai2 = document.querySelector('.area-dai-2');
    areaDai1 = document.querySelector('.area-dai-1');
    valueAreaDai = document.getElementById('valueAreaDai');
    btnSuaSanPhamDaiSua = document.getElementById('suasanpham-dai-sua');
    btnSuaSanPhamDaiCheck = document.getElementById('suasanpham-dai-check');
    suaSanPhamDai = document.getElementById('suasanpham-dai');

    areaTangToc1 = document.querySelector('.area-tangtoc-1');
    areaTangToc2 = document.querySelector('.area-tangtoc-2');
    valueAreaTangToc = document.getElementById('valueAreaTangToc');
    btnSuaSanPhamTangTocSua = document.getElementById('suasanpham-tangtoc-sua');
    btnSuaSanPhamTangTocCheck = document.getElementById('suasanpham-tangtoc-check');
    suaSanPhamTangToc = document.getElementById('suasanpham-tangtoc');

    areaTocDo1 = document.querySelector('.area-tocdo-1');
    areaTocDo2 = document.querySelector('.area-tocdo-2');
    valueAreaTocDo = document.getElementById('valueAreaTocDo');
    btnSuaSanPhamTocDoSua = document.getElementById('suasanpham-tocdo-sua');
    suaSanPhamTocDo = document.getElementById('suasanpham-tocdo');
    btnSuaSanPhamTocDoCheck = document.getElementById('suasanpham-tocdo-check');

    areaGiaTieuChuan1 = document.querySelector('.area-giatieuchuan-1');
    areaGiaTieuChuan2 = document.querySelector('.area-giatieuchuan-2');
    valueAreaGiaTieuChuan = document.getElementById('valueAreaGiaTieuChuan');
    btnSuaSanPhamGiaTieuChuanSua = document.getElementById('suasanpham-giatieuchuan-sua');
    btnSuaSanPhamGiaTieuChuanCheck = document.getElementById('suasanpham-giatieuchuan-check');
    suaSanPhamGiaTieuChuan = document.getElementById('suasanpham-giatieuchuan');

    areaHinhAnh1 = document.querySelector('.area-hinhanh-1');
    valueAreaHinhAnh = document.getElementById('valueAreaHinhAnh');
    suaSanPhamHinhAnh = document.getElementById('suasanpham-hinhanh');



suaSanPhamHinhAnh.addEventListener('change', () => {
    console.log(suaSanPhamHinhAnh.files[0].name);
    valueAreaHinhAnh.innerText = `${suaSanPhamHinhAnh.files[0].name}`;
    valueHinhAnhSua = '../database/Image/' + suaSanPhamHinhAnh.files[0].name;
    console.log(valueHinhAnhSua);
})

/* repair Ten */
btnSuaSanPhamTenSua.addEventListener('click', () => {
    if(booleanTenSua == false){
        areaTen1.classList.add('active');
        areaTen2.classList.remove('active');
        booleanTenSua = !booleanTenSua;
        suaSanPhamTen.value = valueTenSua;
    } else {
        areaTen1.classList.remove('active');
        areaTen2.classList.add('active');
        booleanTenSua = !booleanTenSua;
    }
})

btnSuaSanPhamTenCheck.addEventListener('click', () => {
    if(booleanTenSua == true){
        valueTenSua = suaSanPhamTen.value;
        areaTen1.classList.remove('active');
        areaTen2.classList.add('active');
        console.log(valueTenSua);
        booleanTenSua = !booleanTenSua;
        valueAreaTen.innerText = `${valueTenSua}`;
    } else {
        areaTen1.classList.add('active');
        areaTen2.classList.remove('active');
        booleanTenSua = !booleanTenSua;
    }
})

/* repair Cong Suat */
btnSuaSanPhamCongSuatSua.addEventListener('click', () => {
    if(booleanCongSuatSua == false){
        areaCongSuat1.classList.add('active');
        areaCongSuat2.classList.remove('active');
        booleanCongSuatSua = !booleanCongSuatSua;
        suaSanPhamCongSuat.value = valueCongSuatSua;
    } else {
        areaCongSuat1.classList.remove('active');
        areaCongSuat2.classList.add('active');
        booleanCongSuatSua = !booleanCongSuatSua;
    }
})

btnSuaSanPhamCongSuatCheck.addEventListener('click', () => {
    if(booleanCongSuatSua == true){
        valueCongSuatSua = suaSanPhamCongSuat.value;
        areaCongSuat1.classList.remove('active');
        areaCongSuat2.classList.add('active');
        console.log(valueCongSuatSua);
        booleanCongSuatSua = !booleanCongSuatSua;
        valueAreaCongSuat.innerText = `${valueCongSuatSua} PS (220kW)`;
    } else {
        areaCongSuat1.classList.add('active');
        areaCongSuat2.classList.remove('active');
        booleanCongSuatSua = !booleanCongSuatSua;
    }
})

/* repair Chieu cao */
btnSuaSanPhamCaoSua.addEventListener('click', () => {
    if(booleanCaoSua == false){
        areaCao1.classList.add('active');
        areaCao2.classList.remove('active');
        booleanCaoSua = !booleanCaoSua;
        suaSanPhamCao.value = valueCaoSua;
    } else {
        areaCao1.classList.remove('active');
        areaCao2.classList.add('active');
        booleanCaoSua = !booleanCaoSua;
    }
})

btnSuaSanPhamCaoCheck.addEventListener('click', () => {
    if(booleanCaoSua == true){
        valueCaoSua = suaSanPhamCao.value;
        areaCao1.classList.remove('active');
        areaCao2.classList.add('active');
        console.log(valueCaoSua);
        booleanCaoSua = !booleanCaoSua;
        valueAreaCao.innerText = `${valueCaoSua}mm`;
    } else {
        areaCao1.classList.add('active');
        areaCao2.classList.remove('active');
        booleanCaoSua = !booleanCaoSua;
    }
})

/* repair Chieu dai */
btnSuaSanPhamDaiSua.addEventListener('click', () => {
    if(booleanDaiSua == false){
        areaDai1.classList.add('active');
        areaDai2.classList.remove('active');
        booleanDaiSua = !booleanDaiSua;
        suaSanPhamDai.value = valueDaiSua;
    } else {
        areaDai1.classList.remove('active');
        areaDai2.classList.add('active');
        booleanDaiSua = !booleanDaiSua;
    }
})

btnSuaSanPhamDaiCheck.addEventListener('click', () => {
    if(booleanDaiSua == true){
        valueDaiSua = suaSanPhamDai.value;
        areaDai1.classList.remove('active');
        areaDai2.classList.add('active');
        console.log(valueDaiSua);
        booleanDaiSua = !booleanDaiSua;
        valueAreaDai.innerText = `${valueDaiSua}mm`;
    } else {
        areaDai1.classList.add('active');
        areaDai2.classList.remove('active');
        booleanDaiSua = !booleanDaiSua;
    }
})

/* repair Tang toc */
btnSuaSanPhamTangTocSua.addEventListener('click', () => {
    if(booleanTangTocSua == false){
        areaTangToc1.classList.add('active');
        areaTangToc2.classList.remove('active');
        booleanTangTocSua = !booleanTangTocSua;
        suaSanPhamTangToc.value = valueTangTocSua;
    } else {
        areaTangToc1.classList.remove('active');
        areaTangToc2.classList.add('active');
        booleanTangTocSua = !booleanTangTocSua;
    }
})

btnSuaSanPhamTangTocCheck.addEventListener('click', () => {
    if(booleanTangTocSua == true){
        valueTangTocSua = suaSanPhamTangToc.value;
        areaTangToc1.classList.remove('active');
        areaTangToc2.classList.add('active');
        console.log(valueTangTocSua);
        booleanTangTocSua = !booleanTangTocSua;
        valueAreaTangToc.innerText = `${valueTangTocSua} (s)`;
    } else {
        areaTangToc1.classList.add('active');
        areaTangToc2.classList.remove('active');
        booleanTangTocSua = !booleanTangTocSua;
    }
})

/* repair Toc do */
btnSuaSanPhamTocDoSua.addEventListener('click', () => {
    if(booleanTocDoSua == false){
        areaTocDo1.classList.add('active');
        areaTocDo2.classList.remove('active');
        booleanTocDoSua = !booleanTocDoSua;
        suaSanPhamTocDo.value = valueTocDoSua;
    } else {
        areaTocDo1.classList.remove('active');
        areaTocDo2.classList.add('active');
        booleanTocDoSua = !booleanTocDoSua;
    }
})

btnSuaSanPhamTocDoCheck.addEventListener('click', () => {
    if(booleanTocDoSua == true){
        valueTocDoSua = suaSanPhamTocDo.value;
        areaTocDo1.classList.remove('active');
        areaTocDo2.classList.add('active');
        console.log(valueTocDoSua);
        booleanTocDoSua = !booleanTocDoSua;
        valueAreaTocDo.innerText = `${valueTocDoSua}  (km/h)`;
    } else {
        areaTocDo1.classList.add('active');
        areaTocDo2.classList.remove('active');
        booleanTocDoSua = !booleanTocDoSua;
    }
})

/* repair Gia Tieu Chuan */
btnSuaSanPhamGiaTieuChuanSua.addEventListener('click', () => {
    if(booleanGiaTieuChuanSua == false){
        areaGiaTieuChuan1.classList.add('active');
        areaGiaTieuChuan2.classList.remove('active');
        booleanGiaTieuChuanSua = !booleanGiaTieuChuanSua;
        suaSanPhamGiaTieuChuan.value = valueGiaTieuChuanSua;
    } else {
        areaGiaTieuChuan1.classList.remove('active');
        areaGiaTieuChuan2.classList.add('active');
        booleanGiaTieuChuanSua = !booleanGiaTieuChuanSua;
    }
})


btnSuaSanPhamGiaTieuChuanCheck.addEventListener('click', () => {
    if(booleanGiaTieuChuanSua == true){
        valueGiaTieuChuanSua = suaSanPhamGiaTieuChuan.value;
        areaGiaTieuChuan1.classList.remove('active');
        areaGiaTieuChuan2.classList.add('active');
        console.log(valueGiaTieuChuanSua);
        booleanGiaTieuChuanSua = !booleanGiaTieuChuanSua;
        valueAreaGiaTieuChuan.innerText = `${handleGiaTien(valueGiaTieuChuanSua)}.000.000`;
    } else {
        areaGiaTieuChuan1.classList.add('active');
        areaGiaTieuChuan2.classList.remove('active');
        booleanGiaTieuChuanSua = !booleanGiaTieuChuanSua;
    }
})

const contentSuaSanPhamArea = document.querySelector('.content-suasanpham-area');


let carCurrentInformationRepair;

const findCarByCarId = (idCar) =>{
    const indexCar = arrayCarSuaSanPham.findIndex(item => item.id === idCar);

    carCurrentInformationRepair = arrayCarSuaSanPham[indexCar];

    valueTenSua = carCurrentInformationRepair.ten;
    valueCongSuatSua = carCurrentInformationRepair.congxuat;
    valueCaoSua = carCurrentInformationRepair.cao;
    valueDaiSua = carCurrentInformationRepair.dai;
    valueTangTocSua = carCurrentInformationRepair.tangtoc;
    valueTocDoSua = carCurrentInformationRepair.tocdo;
    valueGiaTieuChuanSua = carCurrentInformationRepair.giatieuchuan;
    valueHinhAnhSua = carCurrentInformationRepair.hinhanh;
}


const handleOpenArea = (status) => {
    if(status == 'open'){
        contentSuaSanPhamArea.style.transform = 'translateY(0)';
    } else {
        contentSuaSanPhamArea.style.transform = 'translateY(-150%)';
    }
}


const suaSanPhamTuChoi = document.getElementById('suasanpham-tuchoi');
const suaSanPhamDongY = document.getElementById('suasanpham-dongy');


suaSanPhamTuChoi.addEventListener('click', () =>{
    handleOpenArea('close');
})

const handleRepairCar  = ()  =>{
    const indexCar  = Cars.findIndex(item => item.id  === carCurrentInformationRepair.id);

    console.log(Cars[indexCar]);

    Cars[indexCar].ten = valueTenSua;
    Cars[indexCar].congxuat = valueCongSuatSua;
    Cars[indexCar].cao = valueCaoSua;
    Cars[indexCar].dai = valueDaiSua;
    Cars[indexCar].tangtoc = valueTangTocSua;
    Cars[indexCar].tocdo = valueTocDoSua;
    Cars[indexCar].hinhanh = valueHinhAnhSua;
    Cars[indexCar].giatieuchuan = valueGiaTieuChuanSua;

    console.log(Cars[indexCar]);
}


const handlePostNewArrayRepair = (newArrayCar) => {
    const postArrayCar = JSON.stringify(newArrayCar);

    if(postArrayCar){
        localStorage.setItem('Cars', postArrayCar);
    } else {
        console.log('error for not found post array car')
    }
}

suaSanPhamDongY.addEventListener('click', () =>{
    handleRepairCar();
    handleOpenArea('close');

    thongBaoAdmin('suaSanPham');
    handleDisplayThongBao();


    console.log(Cars);
    if(Cars.length % 6 == 0){
        totalPages = Cars.length / 6;
    } else {
        totalPages = Math.ceil(Cars.length / 6);
    }
    renderPageElement(Cars, totalPages, 1);

    suaSanPhamList.innerHTML = '';
    suaSanPhamKetQua.innerText = '';

    handlePostNewArrayRepair(Cars);

    renderAdmin();
})



const handleOpenAreaRepair = (carId) =>{
    findCarByCarId(carId);


    handleOpenArea('open');

    valueAreaTen.innerText = `${carCurrentInformationRepair.ten}`;
    valueAreaCongSuat.innerText = `${carCurrentInformationRepair.congxuat} PS(220kW)`
    valueAreaCao.innerText = `${carCurrentInformationRepair.cao}mm`
    valueAreaDai.innerText = `${carCurrentInformationRepair.dai}mm`
    valueAreaTangToc.innerText = `${carCurrentInformationRepair.tangtoc} (s)`
    valueAreaTocDo.innerText = `${carCurrentInformationRepair.tocdo} (km/h)`
    valueAreaGiaTieuChuan.innerText = `${handleGiaTien(carCurrentInformationRepair.giatieuchuan)}.000.000 vnđ`
    valueAreaHinhAnh.innerText = `${carCurrentInformationRepair.hinhanh}`
}

const suaSanPhamAreaContent = document.querySelector('.suasanpham-area-content');

function renderCarCurrentRepair(carCurrentRepair){
    console.log(carCurrentRepair);
    if(carCurrentRepair){
        suaSanPhamAreaContent.innerHTML = 
        `
            <div class="suasanpham-area-ten">
                <div class="area-ten-1">
                  <p>Tên mẫu :</p>
                  <p id="valueAreaTen">Carrera S</p>
                  <button id="suasanpham-ten-sua">
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                </div>
                <div class="area-ten-2 active">
                  <input id="suasanpham-ten" type="text">
                  <button id="suasanpham-ten-check">
                    <i class="fa-solid fa-check"></i>
                  </button>
                </div>
              </div>

              <div class="suasanpham-area-congsuat">
                <div class="area-congsuat-1">
                  <p>Công suất :</p>
                  <p id="valueAreaCongSuat">350 PS (220kW)</p>
                  <button id="suasanpham-congsuat-sua">
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                </div>
                <div class="area-congsuat-2 active">
                  <input id="suasanpham-congsuat" type="" name="">
                  <button id="suasanpham-congsuat-check">
                    <i class="fa-solid fa-check"></i>
                  </button>
                </div>
              </div>

              <div class="suasanpham-area-cao">
                <div class="area-cao-1">
                  <p>Chiều cao mẫu :</p>
                  <p id="valueAreaCao">1285mm</p>
                  <button id="suasanpham-cao-sua">
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                </div>
                <div class="area-cao-2 active">
                  <input id="suasanpham-cao" type="text">
                  <button id="suasanpham-cao-check">
                    <i class="fa-solid fa-check"></i>
                  </button>
                </div>
              </div>

              <div class="suasanpham-area-dai">
                <div class="area-dai-1">
                  <p>Chiều dài mẫu :</p>
                  <p id="valueAreaDai">3950mm</p>
                  <button id="suasanpham-dai-sua">
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                </div>
                <div class="area-dai-2 active">
                  <input id="suasanpham-dai" type="text">
                  <button id="suasanpham-dai-check">
                    <i class="fa-solid fa-check"></i>
                  </button>
                </div>
              </div>         

              <div class="suasanpham-area-tangtoc">
                <div class="area-tangtoc-1">
                  <p>Tăng tốc :</p>
                  <p id="valueAreaTangToc">4.7 (s)</p>
                  <button id="suasanpham-tangtoc-sua">
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                </div>
                <div class="area-tangtoc-2 active">
                  <input id="suasanpham-tangtoc" type="text">
                  <button id="suasanpham-tangtoc-check">
                    <i class="fa-solid fa-check"></i>
                  </button>
                </div>
              </div>

              <div class="suasanpham-area-tocdo">
                <div class="area-tocdo-1">
                  <p>Tốc độ :</p>
                  <p id="valueAreaTocDo">275 km/h</p>
                  <button id="suasanpham-tocdo-sua">
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                </div>
                <div class="area-tocdo-2 active">
                  <input id="suasanpham-tocdo" type="text">
                  <button id="suasanpham-tocdo-check">
                    <i class="fa-solid fa-check"></i>
                  </button>
                </div>
              </div>            

              <div class="suasanpham-area-giatieuchuan">
                <div class="area-giatieuchuan-1">
                  <p>Giá tiếu chuẩn :</p>
                  <p id="valueAreaGiaTieuChuan">12.500.000.000 vnđ</p>
                  <button id="suasanpham-giatieuchuan-sua">
                    <i class="fa-solid fa-pencil"></i>
                  </button>
                </div>
                <div class="area-giatieuchuan-2 active">
                  <input id="suasanpham-giatieuchuan" type="text">
                  <button id="suasanpham-giatieuchuan-check">
                    <i class="fa-solid fa-check"></i>
                  </button>
                </div>
              </div>

              <div class="suasanpham-area-hinhanh">
                <div class="area-hinhanh-1">
                  <p>Đường link ảnh :</p>
                  <p id="valueAreaHinhAnh">macan.png</p>
                </div>
                <div class="area-hinhanh-2">
                  <input id="suasanpham-hinhanh" type="file">
                </div>
              </div>
        `
    }

}
