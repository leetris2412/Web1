/* BTN */
const btnTatCaSanPham = document.getElementById('btn-tatcasanpham');
const btnThemSanPham = document.getElementById('btn-themsanpham');
const btnXoaSanPham = document.getElementById('btn-xoasanpham');
const btnSuaSanPham = document.getElementById('btn-suasanpham');
const btnQuanLyDonHang = document.getElementById('btn-quanlydonhang');
const btnThongKe = document.getElementById('btn-thongke');
const btnAdmin = document.getElementById('btn-admin');

/* Component */

const middleContentTatCaSanPham = document.querySelector('.middle-content-tatcasanpham');
const middleContentThemSanPham = document.querySelector('.middle-content-themsanpham');
const middleContentXoaSanPham = document.querySelector('.middle-content-xoasanpham');
const middleContentSuaSanPham = document.querySelector('.middle-content-suasanpham');
const middleContentQuanLyDonHang = document.querySelector('.middle-content-quanlydonhang');
const middleContentThongKe = document.querySelector('.middle-content-thongke');
const middleContentAdmin = document.querySelector('.middle-content-admin');


function scrollToHeaderPage(){
    window.scrollTo({
        top : 0,
        behavior : 'smooth',
    })
}


btnThemSanPham.addEventListener('click', () => {
    middleContentTatCaSanPham.style.display = 'none';
    btnTatCaSanPham.classList.remove('active');

    middleContentThemSanPham.style.display = 'block';
    btnThemSanPham.classList.add('active');

    middleContentXoaSanPham.style.display = 'none';
    btnXoaSanPham.classList.remove('active');

    middleContentSuaSanPham.style.display = 'none';
    btnSuaSanPham.classList.remove('active');

    middleContentQuanLyDonHang.style.display = 'none';
    btnQuanLyDonHang.classList.remove('active');

    middleContentThongKe.style.display = 'none';
    btnThongKe.classList.remove('active');

    middleContentAdmin.style.display = 'none';
    btnAdmin.classList.remove('active');

    scrollToHeaderPage();
})

btnTatCaSanPham.addEventListener('click', () => {
    middleContentTatCaSanPham.style.display = 'block';
    btnTatCaSanPham.classList.add('active');

    middleContentThemSanPham.style.display = 'none';
    btnThemSanPham.classList.remove('active');

    middleContentXoaSanPham.style.display = 'none';
    btnXoaSanPham.classList.remove('active');

    middleContentSuaSanPham.style.display = 'none';
    btnSuaSanPham.classList.remove('active');

    middleContentQuanLyDonHang.style.display = 'none';
    btnQuanLyDonHang.classList.remove('active');

    middleContentThongKe.style.display = 'none';
    btnThongKe.classList.remove('active');

    middleContentAdmin.style.display = 'none';
    btnAdmin.classList.remove('active');

    scrollToHeaderPage();
})

btnXoaSanPham.addEventListener('click', () => {
    middleContentTatCaSanPham.style.display = 'none';
    btnTatCaSanPham.classList.remove('active');

    middleContentThemSanPham.style.display = 'none';
    btnThemSanPham.classList.remove('active');

    middleContentXoaSanPham.style.display = 'block';
    btnXoaSanPham.classList.add('active');

    middleContentSuaSanPham.style.display = 'none';
    btnSuaSanPham.classList.remove('active');

    middleContentQuanLyDonHang.style.display = 'none';
    btnQuanLyDonHang.classList.remove('active');

    middleContentThongKe.style.display = 'none';
    btnThongKe.classList.remove('active');

    middleContentAdmin.style.display = 'none';
    btnAdmin.classList.remove('active');

    scrollToHeaderPage();
})

btnSuaSanPham.addEventListener('click', () =>{
    middleContentTatCaSanPham.style.display = 'none';
    btnTatCaSanPham.classList.remove('active');

    middleContentThemSanPham.style.display = 'none';
    btnThemSanPham.classList.remove('active');

    middleContentXoaSanPham.style.display = 'none';
    btnXoaSanPham.classList.remove('active');

    middleContentSuaSanPham.style.display = 'block';
    btnSuaSanPham.classList.add('active');

    middleContentQuanLyDonHang.style.display = 'none';
    btnQuanLyDonHang.classList.remove('active');

    middleContentThongKe.style.display = 'none';
    btnThongKe.classList.remove('active');

    middleContentAdmin.style.display = 'none';
    btnAdmin.classList.remove('active');

    scrollToHeaderPage();
})


btnQuanLyDonHang.addEventListener('click', () => {
    middleContentTatCaSanPham.style.display = 'none';
    btnTatCaSanPham.classList.remove('active');

    middleContentThemSanPham.style.display = 'none';
    btnThemSanPham.classList.remove('active');

    middleContentXoaSanPham.style.display = 'none';
    btnXoaSanPham.classList.remove('active');

    middleContentSuaSanPham.style.display = 'none';
    btnSuaSanPham.classList.remove('active');

    middleContentQuanLyDonHang.style.display = 'block';
    btnQuanLyDonHang.classList.add('active');

    middleContentThongKe.style.display = 'none';
    btnThongKe.classList.remove('active');

    middleContentAdmin.style.display = 'none';
    btnAdmin.classList.remove('active');

    scrollToHeaderPage();
})

btnThongKe.addEventListener('click', () => {
    middleContentTatCaSanPham.style.display = 'none';
    btnTatCaSanPham.classList.remove('active');

    middleContentThemSanPham.style.display = 'none';
    btnThemSanPham.classList.remove('active');

    middleContentXoaSanPham.style.display = 'none';
    btnXoaSanPham.classList.remove('active');

    middleContentSuaSanPham.style.display = 'none';
    btnSuaSanPham.classList.remove('active');

    middleContentQuanLyDonHang.style.display = 'none';
    btnQuanLyDonHang.classList.remove('active');

    middleContentThongKe.style.display = 'block';
    btnThongKe.classList.add('active');

    middleContentAdmin.style.display = 'none';
    btnAdmin.classList.remove('active');

    scrollToHeaderPage();
})

btnAdmin.addEventListener('click', () => {
    middleContentTatCaSanPham.style.display = 'none';
    btnTatCaSanPham.classList.remove('active');

    middleContentThemSanPham.style.display = 'none';
    btnThemSanPham.classList.remove('active');

    middleContentXoaSanPham.style.display = 'none';
    btnXoaSanPham.classList.remove('active');

    middleContentSuaSanPham.style.display = 'none';
    btnSuaSanPham.classList.remove('active');

    middleContentQuanLyDonHang.style.display = 'none';
    btnQuanLyDonHang.classList.remove('active');

    middleContentThongKe.style.display = 'none';
    btnThongKe.classList.remove('active');

    middleContentAdmin.style.display = 'block';
    btnAdmin.classList.add('active');

    scrollToHeaderPage();
})