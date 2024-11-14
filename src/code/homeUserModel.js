const Modals = [
    {
        "name" : "Boxster",
        "img" : "./model(1).jpg",
        "describe" : "Mẫu xe thể thao mui trần hai cửa với động cơ mạnh mẽ và khả năng xử lý linh hoạt."
    },
    {
        "name" : "Cayman",
        "img" : "./model(2).jpg",
        "describe" : "Mẫu xe thể thao mui cứng hai cửa với động cơ mạnh mẽ và khả năng xử lý linh hoạt."
    },
    {
        "name" : "Carrera S",
        "img" : "./model(3).jpg",
        "describe" : "Mẫu xe thể thao hai cửa với động cơ tăng áp mạnh mẽ và khả năng xử lý linh hoạt."
    },
    {
        "name" : "Carrera",
        "img" : "./model(4).jpg",
        "describe" : "Mẫu xe thể thao hai cửa với động cơ hút khí tự nhiên và khả năng xử lý linh hoạt."
    },
    {
        "name" : "Targa",
        "img" : "./model(5).jpg",
        "describe" : "Mẫu xe thể thao mui trần hai cửa với phần mui có thể tháo rời."
    },
    {
        "name" : "Turbo",
        "img" : "./model(6).jpg",
        "describe" : "Mẫu xe thể thao hai cửa với động cơ tăng áp mạnh mẽ và khả năng xử lý linh hoạt."
    },
    {
        "name" : "Cayenne",
        "img" : "./model(7).jpg",
        "describe" : "Mẫu SUV hạng sang với khả năng vận hành mạnh mẽ và khả năng off-road tốt."
    },
    {
        "name" : "Cross Turismo",
        "img" : "./model(8).jpg",
        "describe" : "Mẫu SUV lai thể thao với khả năng vận hành mạnh mẽ và khả năng off-road tốt."
    },
    {
        "name" : "Macan",
        "img" : "./model(9).jpg",
        "describe" : "Mẫu SUV hạng sang cỡ nhỏ với khả năng vận hành mạnh mẽ và khả năng off-road tốt."
    },
    {
        "name" : "Panamera",
        "img" : "./model(10).jpg",
        "describe" : "Mẫu sedan hạng sang với khả năng vận hành mạnh mẽ và khả năng vận hành tốt."
    },
    {
        "name" : "Taycan",
        "img" : "./model(11).jpg",
        "describe" : "Mẫu xe thể thao điện với khả năng vận hành mạnh mẽ và khả năng chạy đường trường tốt."
    },
]


const middleModelsList = document.querySelector('.middle-models-list');

let buttonModalsCar;

const renderModels = () => {
    let ulModel = '';
    for(let i = 0; i < Modals.length; i++){
        ulModel +=
        `
             <li class="model">
                        <img src="./model(${i + 1}).jpg">
                        <div class="name-model">
                            <p>${Modals[i].name}</p>
                        </div>
                        <div class="middle-more">
                            <button class="button-modals-car" onclick="handleClickModals(this.value)" value="${Modals[i].name}">Lọc mẫu</button>
                            <div class="middle-more-info">
                                <p>${Modals[i].describe}</p>
                            </div>
                        </div>
                    </li>
        `
    }
    middleModelsList.innerHTML = ulModel;
    buttonModalsCar = document.querySelectorAll('.button-modals-car');
}

let listModalsFilter = [];
const handleClickModals = (nameModal) => {
    for(let i = 0 ; i < Cars.length; i++){
        if(Cars[i].ten.toUpperCase().includes(nameModal.toUpperCase())){
            listModalsFilter.push(Cars[i]);
        }
    }

    window.scrollTo({
        top : positionSrollSearch,
        behavior : 'smooth',
    })

    arrayCars = listModalsFilter;
    handleRenderResultCar(arrayCars);
    handleContentSearch(nameModal, 'search');

    listModalsFilter = [];
}

renderModels();