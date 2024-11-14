const adminTongSoMau = document.getElementById('admin-tongsomau');
const adminTongDaBan = document.getElementById('admin-tongdaban');
const adminTongDoanhThu = document.getElementById('admin-tongdoanhthu');

function renderAdmin(){

    const dataPaymentDaXacNhan = localStorage.getItem('PaymentXacNhan');

      if(dataPaymentDaXacNhan){
        arrayPaymentDaXacNhan = JSON.parse(dataPaymentDaXacNhan);
      } else {
        console.log('error fetch payment da xac nhan')
      }

    adminTongSoMau.innerText = `${Cars.length}`;
    adminTongDaBan.innerText = `${arrayPaymentDaXacNhan.length}`;
    adminTongDoanhThu.innerText = `${handleGiaTien(doanhThuTong)}.000.000 vnđ`;
}



const handleDangXuatAdmin = () => {
    const postAdminEmpty = JSON.stringify(null);
    localStorage.setItem('Admin', postAdminEmpty);
}