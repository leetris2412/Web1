let accountUser;

window.addEventListener('DOMContentLoaded', () => {
  const dataAccountUser = localStorage.getItem('User');

  if(dataAccountUser){
    accountUser = JSON.parse(dataAccountUser);
  } else {
    console.log('error fetch account user from localStorage');
  }
})


const handleDangXuatUser = () => {
  const postUserEmpty = JSON.stringify(null);

  localStorage.setItem('User', postUserEmpty);

  bodyUser.style.display = 'none';
  bodyHome.style.display = 'block';
  valueEmailLogin = null;
  userInfo = null;

    let initializeCart = JSON.stringify([]);
    let initializeGhim = JSON.stringify([]);

    if(Cars.length % 6 == 0){
                totalPages = Cars.length / 6;
            } else {
                totalPages = Math.ceil(Cars.length / 6);
            }
    renderPageElement(Cars, totalPages, 1);

    handleReloadCart(0);
    handleReloadGhim(0);

}

const middle2InformationUser = document.querySelector('.middle-2-information-user');

function renderInformationUser(informationUser){
  middle2InformationUser.innerHTML = 
  `
    <div class="user-image">
            <img src="./user.png" alt="">
              <button onclick="handleDangXuatUser()">
                <p>Đăng xuất</p>
              </button>
          </div>
          <div class="user-infor">
            <div>
              <p>Tên người dùng :</p>
              <p>${informationUser?informationUser.Ten:''}</p>
            </div>

            <div>
              <p>Email :</p>
              <p>${informationUser?informationUser.Email:''}</p>
            </div>

            <div>
              <p>Giới tính :</p>
              <p>${informationUser?informationUser.Gender:''}</p>
            </div>

            <div>
              <p>Địa chỉ :</p>
              <p>${informationUser?informationUser.Address:''}</p>
            </div>

            <div>
              <p>Số sản phẩm đã thanh toán :</p>
              <p>${arrayPayment?arrayPayment.length:0}</p>
            </div>

            <div>
              <p>Số sản phẩm đã mua :</p>
              <p>${arrayPaymentDaXacNhan?arrayPaymentDaXacNhan.length:0}</p>
            </div>
          </div>
  `
}