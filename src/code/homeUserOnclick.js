window.addEventListener('DOMContentLoaded', () => {
    const string = JSON.stringify(Cars);
    localStorage.setItem('Cars', string);
  });
  
  
  
  let Cars = [
    {
      "id" : "1",
      "ten" : "718 Boxster",
      "hinhanh" : "718-boxster.png",
      "congxuat" : 350,
      "tocdo" : 275,
      "tangtoc" : 4.7,
      "cao" : 1285,
      "dai" : 4895,
      "giatieuchuan" : 3960,
    },
    {
      "id" : "2",
      "ten" : "911 Carrera S",
      "hinhanh" : "911-carrera-s.png",
      "congxuat" : 375,
      "tocdo" : 300,
      "tangtoc" : 3.7,
      "cao" : 1295,
      "dai" : 4950,
      "giatieuchuan" : 8530
    },
    {
      "id" : "3",
      "ten" : "911 Carrera",
      "hinhanh" : "911-carrera.png",
      "congxuat" : 425,
      "tocdo" : 325,
      "tangtoc" : 4.2,
      "cao" : 1305,
      "dai" : 4756,
      "giatieuchuan" : 7620
    },
    {
      "id" : "4",
      "ten" : "911 Targa 4",
      "hinhanh" : "911-targa-4.png",
      "congxuat" : 450,
      "tocdo" : 350,
      "tangtoc" : 4.4,
      "cao" : 1305,
      "dai" : 4950,
      "giatieuchuan" : 8910
    },
    {
      "id" : "5",
      "ten" : "911 Turbo",
      "hinhanh" : "911-turbo.png",
      "congxuat" : 500,
      "tocdo" : 350,
      "tangtoc" : 2.8,
      "cao" : 1285,
      "dai" : 4756,
      "giatieuchuan" : 14250
    },
    {
      "id" : "6",
      "ten" : "Cayenne",
      "hinhanh" : "cayenne.png",
      "congxuat" : 500,
      "tocdo" : 275,
      "tangtoc" : 6.0,
      "cao" : 1295,
      "dai" : 4895,
      "giatieuchuan" : 5560
    },
    {
      "id" : "7",
      "ten" : "Taycan 4 Cross Turismo",
      "hinhanh" : "taycan-4-cross-turismo.png",
      "congxuat" : 375,
      "tocdo" : 300,
      "tangtoc" : 5.1,
      "cao" : 1305,
      "dai" : 4950,
      "giatieuchuan" : 4880
    },
    {
      "id" : "8",
      "ten" : "Macan",
      "hinhanh" : "macan.png",
      "congxuat" : 500,
      "tocdo" : 350,
      "tangtoc" : 6.4,
      "cao" : 1305,
      "dai" : 4895,
      "giatieuchuan" : 3350
    },
    {
      "id" : "9",
      "ten" : "Panamera",
      "hinhanh" : "panamera.png",
      "congxuat" : 350,
      "tocdo" : 270,
      "tangtoc" : 5.6,
      "cao" : 1285,
      "dai" : 4756,
      "giatieuchuan" : 5560
    },
    {
      "id" : "10",
      "ten" : "Taycan",
      "hinhanh" : "taycan.png",
      "congxuat" : 375,
      "tocdo" : 300,
      "tangtoc" : 5.4,
      "cao" : 1295,
      "dai" : 4950,
      "giatieuchuan" : 4260
    },
    {
      "id" : "11",
      "ten" : "Taycan 4S",
      "hinhanh" : "taycan-4s.png",
      "congxuat" : 450,
      "tocdo" : 325,
      "tangtoc" : 4.0,
      "cao" : 1305,
      "dai" : 4895,
      "giatieuchuan" : 5140
    },
    {
      "id" : "12",
      "ten" : "Taycan GTS",
      "hinhanh" : "taycan-gts.png",
      "congxuat" : 425,
      "tocdo" : 275,
      "tangtoc" : 3.7,
      "cao" : 1305,
      "dai" : 4895,
      "giatieuchuan" : 6160
    },
    {
      "id" : "13",
      "ten" : "Taycan Turbo",
      "hinhanh" : "taycan-turbo.png",
      "congxuat" : 375,
      "tocdo" : 325,
      "tangtoc" : 3.2,
      "cao" : 1295,
      "dai" : 4950,
      "giatieuchuan" : 7130
    },
    {
      "id" : "14",
      "ten" : "Taycan Turbo S",
      "hinhanh" : "taycan-turbo-s.png",
      "congxuat" : 375,
      "tocdo" : 300,
      "tangtoc" : 2.8,
      "cao" : 1285,
      "dai" : 4756,
      "giatieuchuan" : 8500
    },
    {
      "id" : "15",
      "ten" : "Panamera Platinum Edition",
      "hinhanh" : "panamera-platinum-edition.png",
      "congxuat" : 500,
      "tocdo" : 350,
      "tangtoc" : 5.6,
      "cao" : 1295,
      "dai" : 4895,
      "giatieuchuan" : 6030
    },
    {
      "id" : "16",
      "ten" : "Panamera 4",
      "hinhanh" : "panamera-4.png",
      "congxuat" : 500,
      "tocdo" : 325,
      "tangtoc" : 5.3,
      "cao" : 1305,
      "dai" : 4895,
      "giatieuchuan" : 5700
    },
    {
      "id" : "17",
      "ten" : "Panamera 4 Platinum Edition",
      "hinhanh" : "panamera-4-platinum-edition.png",
      "congxuat" : 350,
      "tocdo" : 325,
      "tangtoc" : 5.3,
      "cao" : 1305,
      "dai" : 4950,
      "giatieuchuan" : 6210
    },
    {
      "id" : "18",
      "ten" : "Macan T",
      "hinhanh" : "macan-t.png",
      "congxuat" : 375,
      "tocdo" : 300,
      "tangtoc" : 6.4,
      "cao" : 1285,
      "dai" : 4895,
      "giatieuchuan" : 3570
    },
    {
      "id" : "19",
      "ten" : "Macan S",
      "hinhanh" : "macan-s.png",
      "congxuat" : 425,
      "tocdo" : 300,
      "tangtoc" : 4.8,
      "cao" : 1295,
      "dai" : 4895,
      "giatieuchuan" : 4400
    },
    {
      "id" : "20",
      "ten" : "Macan GTS",
      "hinhanh" : "macan-gts.png",
      "congxuat" : 450,
      "tocdo" : 350,
      "tangtoc" : 4.5,
      "cao" : 1305,
      "dai" : 4756,
      "giatieuchuan" : 5340
    },
    {
      "id" : "21",
      "ten" : "Taycan 4S Cross Turismo",
      "hinhanh" : "taycan-4s-cross-turismo.png",
      "congxuat" : 375,
      "tocdo" : 325,
      "tangtoc" : 4.1,
      "cao" : 1295,
      "dai" : 4950,
      "giatieuchuan" : 5350
    },
    {
      "id" : "22",
      "ten" : "Taycan Turbo Cross Turismo",
      "hinhanh" : "taycan-turbo-cross-turismo.png",
      "congxuat" : 350,
      "tocdo" : 325,
      "tangtoc" : 3.3,
      "cao" : 1305,
      "dai" : 4950,
      "giatieuchuan" : 7190
    },
    {
      "id" : "23",
      "ten" : "Cayenne Coupe",
      "hinhanh" : "cayenne-coupe.png",
      "congxuat" : 500,
      "tocdo" : 300,
      "tangtoc" : 5.7,
      "cao" : 1305,
      "dai" : 4895,
      "giatieuchuan" : 5810
    },
    {
      "id" : "24",
      "ten" : "Cayenne S",
      "hinhanh" : "cayenne-s.png",
      "congxuat" : 375,
      "tocdo" : 275,
      "tangtoc" : 5.0,
      "cao" : 1295,
      "dai" : 4950,
      "giatieuchuan" : 7770
    },
    {
      "id" : "25",
      "ten" : "Cayenne S Coupe",
      "hinhanh" : "cayenne-s-coupe.png",
      "congxuat" : 375,
      "tocdo" : 300,
      "tangtoc" : 4.7,
      "cao" : 1295,
      "dai" : 4756,
      "giatieuchuan" : 8070
    },
    {
      "id" : "26",
      "ten" : "Cayenne Turbo GT",
      "hinhanh" : "cayenne-turbo-gt.png",
      "congxuat" : 350,
      "tocdo" : 300,
      "tangtoc" : 3.3,
      "cao" : 1305,
      "dai" : 4895,
      "giatieuchuan" : 14360
    },
    {
      "id" : "27",
      "ten" : "911 Turbo Cabriolet",
      "hinhanh" : "911-turbo-cabriolet.png",
      "congxuat" : 425,
      "tocdo" : 350,
      "tangtoc" : 2.9,
      "cao" : 1285,
      "dai" : 4895,
      "giatieuchuan" : 15070
    },
    {
      "id" : "28",
      "ten" : "911 Turbo S",
      "hinhanh" : "911-turbo-s.png",
      "congxuat" : 425,
      "tocdo" : 325,
      "tangtoc" : 2.7,
      "cao" : 1295,
      "dai" : 4950,
      "giatieuchuan" : 16500
    },
    {
      "id" : "29",
      "ten" : "911 Turbo S Cabriolet",
      "hinhanh" : "911-turbo-s-cabriolet.png",
      "congxuat" : 450,
      "tocdo" : 350,
      "tangtoc" : 2.8,
      "cao" : 1305,
      "dai" : 4756,
      "giatieuchuan" : 17380
    },
    {
      "id" : "30",
      "ten" : "911 Targa 4S",
      "hinhanh" : "911-targa-4s.png",
      "congxuat" : 375,
      "tocdo" : 275,
      "tangtoc" : 3.8,
      "cao" : 1305,
      "dai" : 4950,
      "giatieuchuan" : 9850
    },
    {
      "id" : "31",
      "ten" : "911 Targa 4 GTS",
      "hinhanh" : "911-targa-4-gts.png",
      "congxuat" : 500,
      "tocdo" : 325,
      "tangtoc" : 3.5,
      "cao" : 1295,
      "dai" : 4895,
      "giatieuchuan" : 11000
    },
    {
      "id" : "32",
      "ten" : "911 Carrera T",
      "hinhanh" : "911-carrera-t.png",
      "congxuat" : 375,
      "tocdo" : 350,
      "tangtoc" : 4.0,
      "cao" : 1305,
      "dai" : 4950,
      "giatieuchuan" : 8310
    },
    {
      "id" : "33",
      "ten" : "911 Carrera Cabriolet",
      "hinhanh" : "911-carrera-cabriolet.png",
      "congxuat" : 350,
      "tocdo" : 300,
      "tangtoc" : 4.4,
      "cao" : 1295,
      "dai" : 4895,
      "giatieuchuan" : 8470
    },
    {
      "id" : "34",
      "ten" : "911 Carrera GTS",
      "hinhanh" : "911-carrera-gts.png",
      "congxuat" : 480,
      "tocdo" : 275,
      "tangtoc" : 3.2,
      "cao" : 1285,
      "dai" : 4756,
      "giatieuchuan" : 9630
    },
    {
      "id" : "35",
      "ten" : "911 Carrera GTS Cabriolet",
      "hinhanh" : "911-carrera-gts-cabriolet.png",
      "congxuat" : 480,
      "tocdo" : 325,
      "tangtoc" : 3.6,
      "cao" : 1285,
      "dai" : 4895,
      "giatieuchuan" : 10510
    },
    {
      "id" : "36",
      "ten" : "911 Carrera 4",
      "hinhanh" : "911-carrera-4.png",
      "congxuat" : 450,
      "tocdo" : 300,
      "tangtoc" : 4.2,
      "cao" : 1305,
      "dai" : 4950,
      "giatieuchuan" : 8100
    },
    {
      "id" : "37",
      "ten" : "911 Carrera 4 Cabriolet",
      "hinhanh" : "911-carrera-4-cabriolet.png",
      "congxuat" : 450,
      "tocdo" : 275,
      "tangtoc" : 4.4,
      "cao" : 1305,
      "dai" : 4895,
      "giatieuchuan" : 8910
    },
    {
      "id" : "38",
      "ten" : "911 Carrera 4 GTS",
      "hinhanh" : "911-carrera-4-gts.png",
      "congxuat" : 350,
      "tocdo" : 350,
      "tangtoc" : 3.3,
      "cao" : 1285,
      "dai" : 4950,
      "giatieuchuan" : 10120
    },
    {
      "id" : "39",
      "ten" : "911 Carrera 4 GTS Cabriolet",
      "hinhanh" : "911-carrera-4-gts-cabriolet.png",
      "congxuat" : 350,
      "tocdo" : 275,
      "tangtoc" : 3.5,
      "cao" : 1295,
      "dai" : 4756,
      "giatieuchuan" : 11000
    },
    {
      "id" : "40",
      "ten" : "911 Carrera S Cabriolet",
      "hinhanh" : "911-carrera-s-cabriolet.png",
      "congxuat" : 375,
      "tocdo" : 325,
      "tangtoc" : 3.9,
      "cao" : 1295,
      "dai" : 4895,
      "giatieuchuan" : 9350
    },
    {
      "id" : "41",
      "ten" : "911 Carrera 4S",
      "hinhanh" : "911-carrera-4s.png",
      "congxuat" : 450,
      "tocdo" : 325,
      "tangtoc" : 3.6,
      "cao" : 1285,
      "dai" : 4950,
      "giatieuchuan" : 8980
    },
    {
      "id" : "42",
      "ten" : "911 Carrera 4S Cabriolet",
      "hinhanh" : "911-carrera-4s-cabriolet.png",
      "congxuat" : 450,
      "tocdo" : 325,
      "tangtoc" : 3.8,
      "cao" : 1305,
      "dai" : 4950,
      "giatieuchuan" : 9850
    },
    {
      "id" : "43",
      "ten" : "718 Cayman Style Edition",
      "hinhanh" : "718-cayman-style-edition.png",
      "congxuat" : 425,
      "tocdo" : 275,
      "tangtoc" : 4.9,
      "cao" : 1295,
      "dai" : 4756,
      "giatieuchuan" : 4260
    },
    {
      "id" : "44",
      "ten" : "718 Cayman T",
      "hinhanh" : "718-cayman-t.png",
      "congxuat" : 500,
      "tocdo" : 275,
      "tangtoc" : 4.9,
      "cao" : 1305,
      "dai" : 4756,
      "giatieuchuan" : 4090
    },
    {
      "id" : "45",
      "ten" : "718 Cayman S",
      "hinhanh" : "718-cayman-s.png",
      "congxuat" : 350,
      "tocdo" : 275,
      "tangtoc" : 4.4,
      "cao" : 1285,
      "dai" : 4895,
      "giatieuchuan" : 4770
    },
    {
      "id" : "46",
      "ten" : "718 Boxster Style Edition",
      "hinhanh" : "718-boxster-style-edition.png",
      "congxuat" : 500,
      "tocdo" : 275,
      "tangtoc" : 4.9,
      "cao" : 1305,
      "dai" : 4950,
      "giatieuchuan" : 4380
    },
    {
      "id" : "47",
      "ten" : "718 Boxster T",
      "hinhanh" : "718-boxster-t.png",
      "congxuat" : 425,
      "tocdo" : 275,
      "tangtoc" : 4.9,
      "cao" : 1295,
      "dai" : 4756,
      "giatieuchuan" : 4210
    },
    {
      "id" : "48",
      "ten" : "718 Boxster S",
      "hinhanh" : "718-boxster-s.png",
      "congxuat" : 350,
      "tocdo" : 300,
      "tangtoc" : 4.4,
      "cao" : 1285,
      "dai" : 4950,
      "giatieuchuan" : 4880
    },
  ]
  
  
  window.addEventListener('DOMContentLoaded', () => {
      const dataCars = localStorage.getItem('Cars');
      if(dataCars){
          Cars = JSON.parse(dataCars);
          arrayCars = JSON.parse(dataCars);
      } else {
          console.log('not fetch data cars from localStorage');
      }
  })
  
  /* -------------------------BODY RENDER --------------------------*/
  const bodyRegister = document.getElementById('body-register');
  const bodyLogin = document.getElementById('body-login');
  const bodyHome = document.getElementById('body-home');
  const bodyStore = document.getElementById('body-store');
  const bodyCart = document.getElementById('body-cart');
  const bodyGhim = document.getElementById('body-ghim');
  const bodyUser = document.getElementById('body-user');
  const bodyInformationCar = document.getElementById('body-information-car');
  const bodyThanhToanCurrent = document.getElementById('body-thanhtoan-current');
  const bodyThanhToan = document.getElementById('body-thanhtoan');
  /*-----------------------------------------------------------------*/
  
  
  /* --------------------------BUTTON MAIN---------------------------*/
  const buttonBodyHomeMauXe = document.getElementById('home-mauxe');
  const buttonBodyHomeThongTin = document.getElementById('home-thongtin');
  const buttonBodyHomeUser = document.getElementById('home-user');
  
  
  const buttonLoginDangKy = document.getElementById('login-dangky');
  const buttonRegisterDangNhap = document.getElementById('register-dangnhap');
  
  const buttonStoreHome = document.getElementById('body-store-home');
  const buttonStoreCart = document.getElementById('cart');
  const buttonStoreGhim = document.getElementById('heart');
  const buttonStoreUser = document.getElementById('user-store');
  
  const buttonCartGhim = document.getElementById('cartGhim');
  const buttonUserGhim = document.getElementById('userGhim');
  const buttonHomeGhim = document.getElementById('homeGhim');
  const buttonTimKiemGhim = document.getElementById('timkiemGhim');
  const buttonThongTinGhim = document.getElementById('thongtinGhim');
  
  const buttonHomeCart = document.getElementById('trangchuCart');
  const buttonTimKiemCart = document.getElementById('timkiemCart');
  const buttonGhimCart = document.getElementById('ghimCart');
  const buttonUserCart = document.getElementById('userCart');
  const buttonThongTinCart = document.getElementById('thongtinCart');
  
  const buttonHomeInformationCar = document.getElementById('homeInformationCar');
  const buttonTimKiemInformationCar = document.getElementById('timkiemInformationCar');
  const buttonThongTinInformationCar = document.getElementById('thongtinInformatioCar');
  
  const buttonGhimInformationCar = document.getElementById('ghimInformationCar');
  const buttonCartInformationCar = document.getElementById('cartInformationCar');
  const buttonUserInformationCar = document.getElementById('userInformationCar');
  
  const buttonTimKiemUser = document.getElementById('timkiemUser');
  const buttonTrangChuUser = document.getElementById('trangchuUser');
  const buttonThongTinUser = document.getElementById('thongtinUser');
  
  /*---------------------------------------------------------------*/
  
  
  
  /*-------------------------HANDLE TRANSFORM PAGE-----------------------------*/
  
  buttonBodyHomeMauXe.addEventListener('click', () => {
      window.scrollTo(0, 0);
  
      bodyHome.style.display = 'none';
      bodyStore.style.display = 'block';
      handleReloadCart(arrayCart?arrayCart.length:0);
      handleReloadGhim(arrayGhim?arrayGhim.length:0)
      const dataCar = localStorage.getItem('Cars');
      arrayCars = JSON.parse(dataCar);
      if(arrayCars.length % 6 == 0){
                  totalPages = arrayCars.length / 6;
              } else {
                  totalPages = Math.ceil(arrayCars.length / 6);
              }
      renderPageElement(Cars, totalPages, 1);
  })
  
  buttonBodyHomeUser.addEventListener('click', () => {
      window.scrollTo(0, 0);
      if(userInfo){
          bodyUser.style.display = 'block';
          bodyHome.style.display = 'none';
          renderInformationUser(userInfo);
  
      } else {
          bodyLogin.style.display = 'block';
          bodyHome.style.display = 'none';
      }
  })
  
  buttonLoginDangKy.addEventListener('click', () => {
      window.scrollTo(0, 0);
      bodyLogin.style.display = 'none';
      bodyRegister.style.display = 'block';
  })
  
  buttonRegisterDangNhap.addEventListener('click', (e) => {
      window.scrollTo(0, 0);
      bodyLogin.style.display = 'block';
      bodyRegister.style.display = 'none';
      e.preventDefault();
  })
  
  buttonStoreHome.addEventListener('click', () => {
      window.scrollTo(0, 0);
      bodyHome.style.display = 'block';
      bodyStore.style.display = 'none';
  })
  
  buttonStoreCart.addEventListener('click', () => {
      window.scrollTo(0, 0);
      if(userInfo){
          bodyStore.style.display = 'none';
          bodyCart.style.display = 'block';
          renderInformationUser(userInfo);
          handleReloadCart(arrayCart?arrayCart.length:0);
  
  
          const dataCart = localStorage.getItem('Cart');
  
          if(dataCart){
              arrayCart = JSON.parse(dataCart);
              renderCartHome(arrayCart);
              totalPrice = handleTongGia(arrayCart);
              handleReloadCart(arrayCart?arrayCart.length:0);
  
              renderTotalPrice(totalPrice);
          } else {
              console.log('not found data Cart');
          }
      } else {
          bodyLogin.style.display = 'block';
          bodyStore.style.display = 'none';
      }
  
  })
  
  buttonStoreGhim.addEventListener('click', () => {
  
      window.scrollTo(0, 0);
      if(userInfo){
          bodyGhim.style.display = 'block';
          bodyStore.style.display = 'none';
          renderInformationUser(userInfo);
          const dataGhim = localStorage.getItem('Ghim');
  
          if(dataGhim){
              arrayGhim = JSON.parse(dataGhim);
              handleReloadGhim(arrayGhim?arrayGhim.length:0);
          }
  
          if(arrayGhim.length % 6 == 0){
              totalPagesGhim = arrayGhim.length / 6;
          } else {
              totalPagesGhim = Math.ceil(arrayGhim.length / 6);
          }
  
          renderPageElement2(arrayGhim, totalPagesGhim, 1);
      } else {
          bodyLogin.style.display = 'block';
          bodyStore.style.display = 'none';
      }
  })
  
  buttonStoreUser.addEventListener('click', () => {
      window.scrollTo(0, 0);
      if(userInfo){
          bodyUser.style.display = 'block';
          bodyStore.style.display = 'none';
          renderInformationUser(userInfo);
      } else {
          bodyLogin.style.display = 'block';
          bodyStore.style.display = 'none';
      }
  })
  
  
  buttonCartGhim.addEventListener('click', () => {
      window.scrollTo(0, 0);
      bodyGhim.style.display = 'none';
      bodyCart.style.display = 'block';
      handleReloadCart(arrayCart?arrayCart.length:0);
      handleReloadGhim(arrayGhim?arrayGhim.length:0);
  
      const dataCart = localStorage.getItem('Cart');
  
      if(dataCart){
          arrayCart = JSON.parse(dataCart);
          renderCartHome(arrayCart);
          totalPrice = handleTongGia(arrayCart);
          renderTotalPrice(totalPrice);
      } else {
          console.log('not found data Cart');
      }
  })
  
  window.addEventListener('DOMContentLoaded', () => {
      const dataUser = localStorage.getItem('User');
      if(dataUser){
          userInfo = JSON.parse(dataUser);
      } else {
          console.log('not fetch data user from localStorage');
      }
  })
  
  buttonUserGhim.addEventListener('click', () => {
      window.scrollTo(0, 0);
      bodyGhim.style.display = 'none';
      bodyUser.style.display = 'block';
  
      renderInformationUser(userInfo);
  
  })
  
  buttonHomeGhim.addEventListener('click', () => {
      window.scrollTo(0, 0);
      bodyHome.style.display = 'block';
      bodyGhim.style.display = 'none';
  })
  
  buttonTimKiemGhim.addEventListener('click', () => {
      window.scrollTo(0, 0);
      bodyStore.style.display = 'block';
      bodyGhim.style.display = 'none';
      const dataCar = localStorage.getItem('Cars');
      arrayCars = JSON.parse(dataCar);
      if(arrayCars.length % 6 == 0){
                  totalPages = arrayCars.length / 6;
              } else {
                  totalPages = Math.ceil(arrayCars.length / 6);
              }
      renderPageElement(Cars, totalPages, 1);
  })
  
  buttonThongTinGhim.addEventListener('click', () => {
      window.scrollTo(0, document.body.scrollHeight);
  })
  
  buttonHomeCart.addEventListener('click', () => {
      window.scrollTo(0, 0);
      bodyCart.style.display = 'none';
      bodyHome.style.display = 'block';
  })
  
  buttonTimKiemCart.addEventListener('click', () => {
      window.scrollTo(0, 0);
  
      bodyStore.style.display = 'block';
      bodyCart.style.display = 'none';
      const dataCar = localStorage.getItem('Cars');
      arrayCars = JSON.parse(dataCar);
      if(arrayCars.length % 6 == 0){
                  totalPages = arrayCars.length / 6;
              } else {
                  totalPages = Math.ceil(arrayCars.length / 6);
              }
      renderPageElement(arrayCars, totalPages, 1);
  })
  
  
  buttonGhimCart.addEventListener('click', () => {
      window.scrollTo(0, 0);
  
      bodyGhim.style.display = 'block';
      bodyCart.style.display = 'none';
  
      const dataGhim = localStorage.getItem('Ghim');
  
      if(dataGhim){
          arrayGhim = JSON.parse(dataGhim);
      }
      handleReloadCart(arrayCart?arrayCart.length:0);
      handleReloadGhim(arrayGhim?arrayGhim.length:0);
  
      if(arrayGhim.length % 6 == 0){
          totalPagesGhim = arrayGhim.length / 6;
      } else {
          totalPagesGhim = Math.ceil(arrayGhim.length / 6);
      }
  
      renderPageElement2(arrayGhim, totalPagesGhim, 1);
  })
  
  
  buttonUserCart.addEventListener('click', () => {
      window.scrollTo(0, 0);
  
      bodyUser.style.display = 'block';
      bodyCart.style.display = 'none';
      if(userInfo){
          bodyUser.style.display = 'block';
          bodyHome.style.display = 'none';
          renderInformationUser(userInfo);
  
      } else {
          bodyLogin.style.display = 'block';
          bodyHome.style.display = 'none';
      }
  })
  
  buttonThongTinCart.addEventListener('click', () => {
      window.scrollTo(0, document.body.scrollHeight);
  })
  
  buttonHomeInformationCar.addEventListener('click', () => {
      window.scrollTo(0, 0);
  
      bodyHome.style.display = 'block';
      bodyInformationCar.style.display = 'none';
  })
  
  buttonTimKiemInformationCar.addEventListener('click', () => {
      window.scrollTo(0, 0);
  
      bodyStore.style.display = 'block';
      bodyInformationCar.style.display = 'none';
  
      const dataCar = localStorage.getItem('Cars');
      arrayCars = JSON.parse(dataCar);
      if(arrayCars.length % 6 == 0){
                  totalPages = arrayCars.length / 6;
              } else {
                  totalPages = Math.ceil(arrayCars.length / 6);
              }
      renderPageElement(Cars, totalPages, 1);
  })
  
  buttonThongTinInformationCar.addEventListener('click', () => {
      window.scrollTo(0, document.body.scrollHeight);
  })
  
  
  buttonGhimInformationCar.addEventListener('click', () => {
      window.scrollTo(0, 0);
  
      bodyInformationCar.style.display = 'none';
      bodyGhim.style.display = 'block';
      handleReloadCart(arrayCart?arrayCart.length:0);
      handleReloadGhim(arrayGhim?arrayGhim.length:0);
  
      const dataGhim = localStorage.getItem('Ghim');
  
      if(dataGhim){
          arrayGhim = JSON.parse(dataGhim);
          handleReloadGhim(arrayGhim?arrayGhim.length:0);
      }
  
      if(arrayGhim.length % 6 == 0){
          totalPagesGhim = arrayGhim.length / 6;
      } else {
          totalPagesGhim = Math.ceil(arrayGhim.length / 6);
      }
  
      renderPageElement2(arrayGhim, totalPagesGhim, 1);
  })
  
  buttonCartInformationCar.addEventListener('click', () => {
      window.scrollTo(0, 0);
  
      bodyInformationCar.style.display = 'none';
      bodyCart.style.display = 'block';
  
      const dataCart = localStorage.getItem('Cart');
      handleReloadCart(arrayCart?arrayCart.length:0);
      handleReloadGhim(arrayGhim?arrayGhim.length:0);
      if(dataCart){
          arrayCart = JSON.parse(dataCart);
          renderCartHome(arrayCart);
          totalPrice = handleTongGia(arrayCart);
          renderTotalPrice(totalPrice);
      } else {
          console.log('not found data Cart');
      }
  })
  
  buttonUserInformationCar.addEventListener('click', () => {
      window.scrollTo(0, 0);
  
      bodyUser.style.display = 'block';
      bodyInformationCar.style.display = 'none';
      if(userInfo){
          bodyUser.style.display = 'block';
          bodyHome.style.display = 'none';
          renderInformationUser(userInfo);
      } else {
          bodyLogin.style.display = 'block';
          bodyHome.style.display = 'none';
      }
  })
  
  
  buttonTimKiemUser.addEventListener('click', () => {
      window.scrollTo(0, 0);
  
      bodyStore.style.display = 'block';
      bodyUser.style.display = 'none';
  
      const dataCar = localStorage.getItem('Cars');
      arrayCars = JSON.parse(dataCar);
      if(arrayCars.length % 6 == 0){
                  totalPages = arrayCars.length / 6;
              } else {
                  totalPages = Math.ceil(arrayCars.length / 6);
              }
      renderPageElement(Cars, totalPages, 1);
  })
  
  buttonTrangChuUser.addEventListener('click', () => {
      window.scrollTo(0, 0);
  
      bodyHome.style.display = 'block';
      bodyUser.style.display = 'none';
  
  })
  
  buttonThongTinUser.addEventListener('click', () => {
      window.scrollTo(0, document.body.scrollHeight);
  })