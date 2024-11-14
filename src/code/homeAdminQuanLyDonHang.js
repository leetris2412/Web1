const btnQuanLyDonHangDangChoXuLy = document.getElementById('quanlydonhang-dangchoxuly');
const btnQuanLyDonHangDaXacNhan = document.getElementById('quanlydonhang-daxacnhan');
const btnQuanLyDonHangDaTuChoi = document.getElementById('quanlydonhang-datuchoi');


const contentQuanLyDonHangDangChoXuLy = document.querySelector('.content-quanlydonhang-dangchoxuly');
const contentQuanLyDonHangDaXacNhan = document.querySelector('.content-quanlydonhang-daxacnhan');
const contentQuanLyDonHangDaTuChoi = document.querySelector('.content-quanlydonhang-datuchoi');


btnQuanLyDonHangDangChoXuLy.addEventListener('click', () => {
    btnQuanLyDonHangDangChoXuLy.classList.add('active');
    btnQuanLyDonHangDaXacNhan.classList.remove('active');
    btnQuanLyDonHangDaTuChoi.classList.remove('active');

    contentQuanLyDonHangDangChoXuLy.style.display = 'block';
    contentQuanLyDonHangDaXacNhan.style.display = 'none';
    contentQuanLyDonHangDaTuChoi.style.display = 'none';
})

btnQuanLyDonHangDaXacNhan.addEventListener('click', () => {
    btnQuanLyDonHangDangChoXuLy.classList.remove('active');
    btnQuanLyDonHangDaXacNhan.classList.add('active');
    btnQuanLyDonHangDaTuChoi.classList.remove('active');

    contentQuanLyDonHangDangChoXuLy.style.display = 'none';
    contentQuanLyDonHangDaXacNhan.style.display = 'block';
    contentQuanLyDonHangDaTuChoi.style.display = 'none';
})

btnQuanLyDonHangDaTuChoi.addEventListener('click', () => {
    btnQuanLyDonHangDangChoXuLy.classList.remove('active');
    btnQuanLyDonHangDaXacNhan.classList.remove('active');
    btnQuanLyDonHangDaTuChoi.classList.add('active');

    contentQuanLyDonHangDangChoXuLy.style.display = 'none';
    contentQuanLyDonHangDaXacNhan.style.display = 'none';
    contentQuanLyDonHangDaTuChoi.style.display = 'block';
})