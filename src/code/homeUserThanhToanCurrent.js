const handleCongCurrent = (value, position) => {
    if(arrayQuantityCarCurrent[position] > 0){
        arrayQuantityCarCurrent[position]++;
        renderHoaDonCurrent(paymentCarCurrent, arrayQuantityCarCurrent);  
        renderTotalCurrent(paymentCarCurrent, arrayQuantityCarCurrent);
    }
  }
  
  const handleTruCurrent = (value, position) => {
    if(arrayQuantityCarCurrent[position] > 1){
      arrayQuantityCarCurrent[position]--;
      renderHoaDonCurrent(paymentCarCurrent, arrayQuantityCarCurrent);
      renderTotalCurrent(paymentCarCurrent, arrayQuantityCarCurrent);
    }
  }
  
  
  /* render */
  const initializeQuantityOneCurrent = (lengthCart) => {
    for(let i = 0 ; i < lengthCart; i++){
      arrayQuantityCarCurrent[i] = 1;
    }
  }
  
  let sumSoluongCurrent = 0;
  let sumPhiVanChuyenCurrent = 0;
  let sumTongGiaXeCurrent = 0;
  let sumPhiDichVuCurrent = 10;
  let sumPhiCocBaoDuongXeCurrent = 50;
  
  function handleSoLuongCurrent(listCart){
      let sum = 0;
      for(let i = 0 ; i < listCart.length; i++){
        sum += listCart[i];
      }
      sumSoluongCurrent = sum;
      return sum;
  }
  
  function handlePhiVanChuyenCurrent(listCart){
    let sum = 0;
    for(let i = 0; i < listCart.length ; i++){
      sum += listCart[i] * 20;
    }
    sumPhiVanChuyenCurrent = sum;
  
    if(sum > 1000){
      return handleGiaTien(sum);
    }
    return sum;
  }
  
  function handleTongGiaXeCurrent(listCart, quantityCar){
    let sum = 0;
    for(let i = 0; i < listCart.length ; i++){
      sum += quantityCar[i] * listCart[i].giatieuchuan;
    }
  
    sumTongGiaXeCurrent = sum;
    return handleGiaTien(sum);
  }
  
  
  function handleTongThanhToanCurrent(){
    return handleGiaTien(sumTongGiaXeCurrent + sumPhiVanChuyenCurrent + sumPhiDichVuCurrent + sumPhiCocBaoDuongXeCurrent);
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
  
  const ulContentBoxCurrent = document.querySelector('.wrapper-body-thanhtoan-current .content-box ul');
  
  function renderHoaDonCurrent(listCart, listQuantityCar){
    let ul = 
    `
      <li>
        <div class="box-stt">
          <p>STT</p>
        </div>
        <div class="box-tenmau">
          <p>Tên Mẫu</p>
        </div>
        <div class="box-gia">
          <p>Giá Tiền</p>
        </div>
        <div class="box-soluong">
          <p>Số lượng</p>
        </div>
      </li>
    `;
  
    for(let i = 0; i < listCart.length ; i++){
      if(listCart[i]){
        ul +=
        `
          <li>
            <div class="box-stt">
              <p>${i + 1}</p>
            </div>
            <div class="box-tenmau">
              <p>${listCart[i].ten}</p>
            </div>
            <div class="box-gia">
              <p>${handleGiaTien(listCart[i].giatieuchuan)}.000.000 vnđ</p>
            </div>
            <div class="box-soluong">
              <button id="tru-${i}" value="${listQuantityCar[i]}" name="${i}"  onclick="handleTruCurrent(this.value, this.name)">
                <i class="fa-solid fa-minus"></i>
              </button>
              <p>${listQuantityCar[i]}</p>
              <button id="cong-${i}" value="${listQuantityCar[i]}" name="${i}" onclick="handleCongCurrent(this.value, this.name)">
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </li>
        `
      }
    }
    ulContentBoxCurrent.innerHTML = ul;
  }
  
  const ulTotalBoxCurrent = document.querySelector('.wrapper-body-thanhtoan-current .total-box ul');
  
  function renderTotalCurrent(listCart, quantityCar){
    let ul = 
    `
      <li>
        <p>Tổng số lượng</p>
        <p>x${handleSoLuongCurrent(quantityCar)}</p>
      </li>
      <li>
        <p>Phí vận chuyển (xe/20.000.000)</p>
        <p>${handlePhiVanChuyenCurrent(quantityCar)}.000.000 vnđ</p>
      </li>
      <li>
        <p>Phí dịch vụ</p>
        <p>10.000.000 vnđ</p>
      </li>
      <li>
        <p>Phí cọc bảo dưỡng xe</p>
        <p>50.000.000 vnđ</p>
      </li>
      <li>
        <p>Tổng giá xe</p>
        <p>${handleTongGiaXeCurrent(listCart, quantityCar)}.000.000 vnđ</p>
      </li>
      <li>
        <p>Tổng Thanh Toán</p>
        <p>${handleTongThanhToanCurrent()}.000.000 vnđ</p>
      </li>
    `;
  
    ulTotalBoxCurrent.innerHTML = ul;
  }