const themByTen = document.getElementById('themByTen');
const themByCao = document.getElementById('themByCao');
const themByDai = document.getElementById('themByDai');
const themByGiaTieuChuan = document.getElementById('themByGiaTieuChuan');
const themByTangToc = document.getElementById('themByTangToc');
const themByCongSuat = document.getElementById('themByCongSuat');
const themByTocDo = document.getElementById('themByTocDo');
const themByHinhAnh = document.getElementById('themByHinhAnh');

const themByTenA = document.getElementById('themByTenA');
const themByTenB = document.getElementById('themByTenB');
const themByCaoA = document.getElementById('themByCaoA');
const themByCaoB = document.getElementById('themByCaoB');
const themByDaiA = document.getElementById('themByDaiA');
const themByDaiB = document.getElementById('themByDaiB');
const themByGiaTieuChuanA = document.getElementById('themByGiaTieuChuanA');
const themByGiaTieuChuanB = document.getElementById('themByGiaTieuChuanB');
const themByTangTocA = document.getElementById('themByTangTocA');
const themByTangTocB = document.getElementById('themByTangTocB');
const themByCongSuatA = document.getElementById('themByCongSuatA');
const themByCongSuatB = document.getElementById('themByCongSuatB');
const themByTocDoA = document.getElementById('themByTocDoA');
const themByTocDoB = document.getElementById('themByTocDoB');
const done = document.querySelector('.done');
const themByHinhAnhA = document.getElementById('themByHinhAnhA');


const themButton = document.getElementById('themButton');

let valueTen;
let valueCao;
let valueDai;
let valueGiaTieuChuan;
let valueTangToc;
let valueCongSuat;
let valueTocDo;
let valueHinhAnh;

let booleanTen = false;
let booleanCao = false;
let booleanDai = false;
let booleanGiaTieuChuan = false;
let booleanTangToc = false;
let booleanCongSuat = false;
let booleanTocDo = false;
let booleanHinhAnh = false;

function handleTen(){
  if(themByTen.value == ''){
    booleanTen = false;
    themByTenA.classList.add('active');
    themByTenB.classList.remove('active');
    themByTen.style.backgroundColor = 'goldenrod';
    themByTen.style.color = 'black';
  } else if(themByTen.value.length < 5){
    booleanTen = false;
    themByTenA.classList.remove('active');
    themByTenB.classList.add('active');
    themByTen.style.backgroundColor = 'goldenrod';
    themByTen.style.color = 'black';
  } else {
    booleanTen = true;
    valueTen = themByTen.value;
    themByTenA.classList.remove('active');
    themByTenB.classList.remove('active');
    themByTen.style.backgroundColor = 'limegreen';
    themByTen.style.color = 'white';
  }
}

function handleCao(){
  if(themByCao.value == ''){
    booleanCao = false;
    themByCaoA.classList.add('active');
    themByCaoB.classList.remove('active');
    themByCao.style.backgroundColor = 'goldenrod';
    themByCao.style.color = 'black';
  } else if(isNaN(themByCao.value)){
    booleanCao = false;
    themByCaoA.classList.remove('active');
    themByCaoB.classList.add('active');
    themByCao.style.backgroundColor = 'goldenrod';
    themByCao.style.color = 'black';
  } else {
    booleanCao = true;
    valueCao = themByCao.value;
    themByCaoA.classList.remove('active');
    themByCaoB.classList.remove('active');
    themByCao.style.backgroundColor = 'limegreen';
    themByCao.style.color = 'white';
  }
}

function handleDai(){
  if(themByDai.value == ''){
    booleanDai = false;
    themByDaiA.classList.add('active');
    themByDaiB.classList.remove('active');
    themByDai.style.backgroundColor = 'goldenrod';
    themByDai.style.color = 'black';
  } else if(isNaN(themByDai.value)){
    booleanDai = false;
    themByDaiA.classList.remove('active');
    themByDaiB.classList.add('active');
    themByDai.style.backgroundColor = 'goldenrod';
    themByDai.style.color = 'black';
  } else {
    booleanDai = true;
    valueDai = themByDai.value;
    themByDaiA.classList.remove('active');
    themByDaiB.classList.remove('active');
    themByDai.style.backgroundColor = 'limegreen';
    themByDai.style.color = 'white';
  }
}

function handleGiaTieuChuan(){
  if(themByGiaTieuChuan.value == ''){
    booleanGiaTieuChuan = false;
    themByGiaTieuChuanA.classList.add('active');
    themByGiaTieuChuanB.classList.remove('active');
    themByGiaTieuChuan.style.backgroundColor = 'goldenrod';
    themByGiaTieuChuan.style.color = 'black';
  } else if(isNaN(themByGiaTieuChuan.value)){
    booleanGiaTieuChuan = false;
    themByGiaTieuChuanA.classList.remove('active');
    themByGiaTieuChuanB.classList.add('active');
    themByGiaTieuChuan.style.backgroundColor = 'goldenrod';
    themByGiaTieuChuan.style.color = 'black';
  } else {
    booleanGiaTieuChuan = true;
    valueGiaTieuChuan = themByGiaTieuChuan.value;
    themByGiaTieuChuanA.classList.remove('active');
    themByGiaTieuChuanB.classList.remove('active');
    themByGiaTieuChuan.style.backgroundColor = 'limegreen';
    themByGiaTieuChuan.style.color = 'white';
  }
}

function handleTangToc(){
  if(themByTangToc.value == ''){
    booleanTangToc = false;
    themByTangTocA.classList.add('active');
    themByTangTocB.classList.remove('active');
    themByTangToc.style.backgroundColor = 'goldenrod';
    themByTangToc.style.color = 'black';
  } else if(isNaN(themByTangToc.value)){
    booleanTangToc = false;
    themByTangTocA.classList.remove('active');
    themByTangTocB.classList.add('active');
    themByTangToc.style.backgroundColor = 'goldenrod';
    themByTangToc.style.color = 'black';
  } else {
    booleanTangToc = true;
    valueTangToc = themByTangToc.value;
    themByTangTocA.classList.remove('active');
    themByTangTocB.classList.remove('active');
    themByTangToc.style.backgroundColor = 'limegreen';
    themByTangToc.style.color = 'white';
  }
}

function handleCongSuat(){
  if(themByCongSuat.value == ''){
    booleanCongSuat = false;
    themByCongSuatA.classList.add('active');
    themByCongSuatB.classList.remove('active');
    themByCongSuat.style.backgroundColor = 'goldenrod';
    themByCongSuat.style.color = 'black';
  } else if(isNaN(themByCongSuat.value)){
    booleanCongSuat = false;
    themByCongSuatA.classList.remove('active');
    themByCongSuatB.classList.add('active');
    themByCongSuat.style.backgroundColor = 'goldenrod';
    themByCongSuat.style.color = 'black';
  } else {
    booleanCongSuat = true;
    valueCongSuat = themByCongSuat.value;
    themByCongSuatA.classList.remove('active');
    themByCongSuatB.classList.remove('active');
    themByCongSuat.style.backgroundColor = 'limegreen';
    themByCongSuat.style.color = 'white';
  }
}

function handleTocDo(){
  if(themByTocDo.value == ''){
    booleanTocDo = false;
    themByTocDoA.classList.add('active');
    themByTocDoB.classList.remove('active');
    themByTocDo.style.backgroundColor = 'goldenrod';
    themByTocDo.style.color = 'black';
  } else if(isNaN(themByTocDo.value)){
    booleanTocDo = false;
    themByTocDoA.classList.remove('active');
    themByTocDoB.classList.add('active');
    themByTocDo.style.backgroundColor = 'goldenrod';
    themByTocDo.style.color = 'black';
  } else {
    booleanTocDo = true;
    valueTocDo = themByTocDo.value;
    themByTocDoA.classList.remove('active');
    themByTocDoB.classList.remove('active');
    themByTocDo.style.backgroundColor = 'limegreen';
    themByTocDo.style.color = 'white';
  }
}

function handleHinhAnh(){
  if(themByHinhAnh.value == ''){
    booleanHinhAnh = false;
    themByHinhAnhA.classList.add('active');
    done.classList.remove('active');
    themByHinhAnh.style.backgroundColor = 'goldenrod';
  } else {
    booleanHinhAnh = true;
    valueHinhAnh = '../database/Image/' + themByHinhAnh.files[0].name;
    themByHinhAnhA.classList.remove('active');
    done.classList.add('active');
    themByHinhAnh.style.backgroundColor = 'limegreen';
  }
}

function resetValue(){
  valueTen = '';
  valueCao = '';
  valueDai = '';
  valueGiaTieuChuan = '';
  valueTangToc = '';
  valueCongSuat = '';
  valueTocDo = '';
  valueHinhAnh = '';
}

function resetInnerText(){
  themByTen.value = '';
  themByCao.value = '';
  themByDai.value = '';
  themByGiaTieuChuan.value = '';
  themByTangToc.value = '';
  themByCongSuat.value ='';
  themByTocDo.value = '';


  themByTen.style.backgroundColor = 'goldenrod';
  themByTen.style.color = 'black';

  themByCao.style.backgroundColor = 'goldenrod';
  themByCao.style.color = 'black';

  themByDai.style.backgroundColor = 'goldenrod';
  themByDai.style.color = 'black';

  themByGiaTieuChuan.style.backgroundColor = 'goldenrod';
  themByGiaTieuChuan.style.color = 'black';

  themByTangToc.style.backgroundColor = 'goldenrod';
  themByTangToc.style.color = 'black';

  themByCongSuat.style.backgroundColor = 'goldenrod';
  themByCongSuat.style.color = 'black';

  themByTocDo.style.backgroundColor = 'goldenrod';
  themByTocDo.style.color = 'black';

  done.classList.remove('active');
  themByHinhAnh.style.backgroundColor = 'goldenrod';
}

function resetBoolean(){
  booleanTen = false;
  booleanCao = false;
  booleanDai = false;
  booleanGiaTieuChuan = false;
  booleanTangToc = false;
  booleanCongSuat = false;
  booleanTocDo = false;
  booleanHinhAnh = false;
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


const demoDongY = document.getElementById('demo-dongy');
const demoTuChoi = document.getElementById('demo-tuchoi');
const themSanPhamDemo = document.querySelector('.themsanpham-demo');

demoDongY.addEventListener('click', () => {
  const newCarDemo = {
    "cao" : Number(valueCao),
    "congxuat" : Number(valueCongSuat),
    "dai" : Number(valueDai),
    "giatieuchuan" : Number(valueGiaTieuChuan),
    "hinhanh" : valueHinhAnh,
    "id" : String(Cars.length + 1),
    "tangtoc" : Number(valueTangToc),
    "ten" : valueTen,
    "tocdo" : Number(valueTocDo)
  }

  Cars.push(newCarDemo);

  resetValue();
  resetInnerText();
  resetBoolean();

  const postCar = JSON.stringify(Cars);

  if(postCar){
    localStorage.setItem('Cars', postCar);

    if(Cars.length % 6 == 0){
        totalPages = Cars.length / 6;
    } else {
        totalPages = Math.ceil(Cars.length / 6);
    }

    renderPageElement(Cars, totalPages, 1);

    themSanPhamDemo.style.top = '-100%';


    thongBaoAdmin('themSanPham');

    renderAdmin();
  } else {
    console.log('error to post data cars ')
  }
})

demoTuChoi.addEventListener('click', () => {
  themSanPhamDemo.style.top = '-100%';
})

const demoBox = document.querySelector('.demo-box');

function renderThemDemoSanPham(){
  demoBox.innerHTML =
  `
    <div class="demo-ten">
                  <p>Tên :</p>
                  <p>${valueTen}</p>
                </div>

                <div class="demo-cao">
                  <p>Cao :</p>
                  <p>${valueCao} (mm)</p>
                </div>

                <div class="demo-dai">
                  <p>Dai :</p>
                  <p>${valueDai} (mm)</p>
                </div>

                <div class="demo-giatieuchuan">
                  <p>Giá tiêu chuẩn :</p>
                  <p>${handleGiaTien(valueGiaTieuChuan)}.000.000 vnđ</p>
                </div>

                <div class="demo-tangtoc">
                  <p>Tăng tốc</p>
                  <p>${valueTangToc} (s)</p>
                </div>

                <div class="demo-congsuat">
                  <p>Công suât</p>
                  <p>${valueCongSuat} (PS)</p>
                </div>

                <div class="demo-tocdo">
                  <p>Tốc độ</p>
                  <p>${valueTocDo} (km/h)</p>
                </div>

                <div class="demo-hinhanh">
                  <img src="${valueHinhAnh}" alt="">
                </div>
  `
}

themButton.addEventListener('click', () => {
  handleTen();
  handleCao();
  handleDai();
  handleGiaTieuChuan();
  handleTangToc();
  handleCongSuat();
  handleTocDo();
  handleHinhAnh();

  renderThemDemoSanPham();

  if(booleanTen && booleanCao && booleanDai && booleanGiaTieuChuan && booleanTangToc && booleanCongSuat && booleanTocDo && booleanHinhAnh){
    themSanPhamDemo.style.top = '20%';
  }
})