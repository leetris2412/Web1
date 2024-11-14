const thongKeDoanhThuHomNay = document.getElementById('thongke-doanhthuhomnay');

const thongKeDoanhThuTongDoanhThu = document.getElementById('thongke-tongdoanhthu');

let doanhThuHomNay = 0;
let doanhThuTong = 0;

let sumPhiDichVu = 10;
let sumPhiCocBaoDuongXe = 50;
let phiMoiXe = 20;

const handleGetDayInString = (string) => {
    return string.charAt(0) + string.charAt(1);
}

const handleTinhDoanhThuHomNay = (listCarXacNhan) => {
    let date = new Date();
    let today = date.getDate();

    if(today < 10){
        today += '0';
    }

    let totalPriceToday = 0;
    for(let i = 0; i < listCarXacNhan.length ; i++){
        if(handleGetDayInString(listCarXacNhan[i].thoigianxacnhan) == today){
            let totalPrice = listCarXacNhan[i].giatieuchuan + phiMoiXe;
            totalPriceToday += totalPrice;
        }
    }

    totalPriceToday = totalPriceToday + sumPhiDichVu + sumPhiCocBaoDuongXe;

    doanhThuHomNay = totalPriceToday;
}

const handleTinhTongDoanhThu = (listCarXacNhan) => {
    let totalPriceAll = 0;

    for(let i = 0; i < listCarXacNhan.length ; i++){
        let totalPrice = listCarXacNhan[i].giatieuchuan + phiMoiXe;
        totalPriceAll += totalPrice;
    }

    totalPriceAll = totalPriceAll + sumPhiDichVu + sumPhiCocBaoDuongXe;

    doanhThuTong = totalPriceAll;

    renderAdmin();
}


function renderThongKe(listCarXacNhan){
    handleTinhDoanhThuHomNay(listCarXacNhan);

    thongKeDoanhThuHomNay.innerText = `${handleGiaTien(doanhThuHomNay)}.000.000 vnđ`;

    handleTinhTongDoanhThu(listCarXacNhan);

    thongKeDoanhThuTongDoanhThu.innerText = `${handleGiaTien(doanhThuTong)}.000.000 vnđ`;

    handlePhanLoaiCacSanPhamCungNgay(listCarXacNhan);
}

let arrayNhomCacCarCoCungNgayXacNhan;

const thongKeListBox = document.querySelector('.thongke-list-box');


function handleGetDayMonthYear(date){
    let stringDate = '';

    for(let i = 0; i < 10; i++){
        stringDate += date.charAt(i);
    }
    return stringDate;
}

function handlePhanLoaiCacSanPhamCungNgay(listCarXacNhan){

    // Đối tượng Map để lưu trữ các mảng con dựa trên ngày
    const groupedByDate = new Map();

    // Lặp qua mảng đối tượng và phân loại chúng dựa trên ngày
    listCarXacNhan.forEach(obj => {
      const ngay = handleGetDayInString(obj.thoigianxacnhan);

      if (groupedByDate.has(ngay)) {
        // Nếu đã có mảng con cho ngày này, thêm đối tượng vào mảng
        groupedByDate.get(ngay).push(obj);
      } else {
        // Nếu chưa có mảng con cho ngày này, tạo mảng mới và thêm đối tượng vào
        groupedByDate.set(ngay, [obj]);
      }
    });

    // Chuyển Map thành mảng các mảng con
    const resultArray = Array.from(groupedByDate.values());

    arrayNhomCacCarCoCungNgayXacNhan = resultArray;


    renderThongKeChiTietTheoNgay(arrayNhomCacCarCoCungNgayXacNhan);
}

function renderThongKeChiTietTheoNgay(arrayNhomCar){
    let ul = '';

    for(let i = 0; i < arrayNhomCar.length ; i++){
        let ulChild = 
        `
        <li class="thongke-middle-day">
            <div class="day-thongke-title">
                <h3>${handleGetDayMonthYear(arrayNhomCar[i][0].thoigianxacnhan)}</h3>
            </div>
            <div class="day-thongke-list">
                        <ul>
                        <li class="day-list-item">
                            <div>
                              <p>Tên mẫu</p> 
                            </div>
                            <div>
                              <p>Giá trị mẫu</p> 
                            </div>
                            <div> 
                              <p>Tổng (Cả Phí)</p>
                            </div>
                          </li>
        `
        ;

        for(let j = 0; j < arrayNhomCar[i].length ; j++){
            ulChild +=
            `
                <li class="day-list-item">
                            <div>
                              <p>${arrayNhomCar[i][j].ten}</p> 
                            </div>
                            <div>
                              <p>${handleGiaTien(arrayNhomCar[i][j].giatieuchuan)}.000.000 vnđ</p> 
                            </div>
                            <div> 
                              <p>${handleGiaTien(arrayNhomCar[i][j].giatieuchuan + phiMoiXe)}.000.000 vnđ</p>
                            </div>
                          </li>
            `
        }

        ulChild += 
        `
        </ul> 
                      </div>
                    </li>
        `

        ul += ulChild;
    }
    thongKeListBox.innerHTML = ul;
}