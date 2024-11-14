const inputSearch = document.getElementById('input-search');
const buttonSearch = document.getElementById('search');
const formSearch = document.getElementById('formSearch');
const middleItem = document.getElementById('middle-item');

const contentSearch = document.getElementById('contentSearch');


/* FILTER BY INPUT */
let valueSearch;
let open = true;
const positionSrollSearch = 1988;

const handleContentSearch = (value, kind) => {
    contentSearch.classList.add('active');

    if(kind == 'search'){
        contentSearch.innerText = `Kết quả tìm kiếm của bạn : "${value}"`;
    } else if(kind == 'filter'){
        contentSearch.innerText = `Kết quả bộ lọc của bạn : ${value}`;
    }
}



const handleRenderResultCar = (arraySearch) => {
    const quantityCar = arraySearch.length;

    if(quantityCar % 6 == 0){
        totalPages = quantityCar / 6;
        renderPageElement(arraySearch, totalPages, 1);
        resultSearchByInput = [];
    } else {
        totalPages = Math.ceil(quantityCar / 6);
        renderPageElement(arraySearch, totalPages, 1);
        resultSearchByInput = [];
    }
}

const handleSearchByInput = (value) => {
    let resultSearchByInput = [];

    const valueUpperCase = value.toUpperCase();
    for(let i = 0; i < Cars.length; i++){
        if(Cars[i].ten.toUpperCase().includes(valueUpperCase)){
            resultSearchByInput.push(Cars[i]);
        }
    }

    arrayCars = resultSearchByInput; // array main in cars.js

    handleRenderResultCar(arrayCars);
}

formSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    valueSearch = inputSearch.value;
    inputSearch.value = '';
    handleContentSearch(valueSearch, 'search');

    window.scrollTo({
        top : positionSrollSearch,
        behavior : 'smooth',
    })
    inputSearch.blur();
    handleSearchByInput(valueSearch);
})

buttonSearch.addEventListener('submit', (event) => {
    inputSearch.focus();
    valueSearch = inputSearch.value;
    inputSearch.value = '';
    handleContentSearch(valueSearch, 'search');

    window.scrollTo({
        top : positionSrollSearch,
        behavior : 'smooth',
    })
    inputSearch.blur();
    handleSearchByInput(valueSearch);
})


/* FILTER BY CHECKECD */

const formChecked = document.getElementById('formChecked');
const buttonCheckedSubmit = document.getElementById('submit');

let listCondition = [];

const checkedMauXe = document.querySelectorAll('.checked-mauxe');
const checkedTocDo = document.querySelectorAll('.checked-tocdo');
const checkedCongSuat = document.querySelectorAll('.checked-congsuat');
const checkedTangToc = document.querySelectorAll('.checked-tangtoc');
const checkedCao = document.querySelectorAll('.checked-cao');
const checkedDai = document.querySelectorAll('.checked-dai');
const rangeGiaTien = document.getElementById('filter-price');
const valueRange = document.querySelector('.valueRange');

rangeGiaTien.addEventListener('mousemove', () => {
    const value = rangeGiaTien.value;
    valueRange.innerText = value + ' tỷ vnđ';
})

const handleCheckedMauXe = () => {
    for(let i = 0; i < checkedMauXe.length; i++){
        if(checkedMauXe[i].checked){
            let object = {
                "mauxe" : `${checkedMauXe[i].value}`
            }
            listCondition.push(object);
        }
    }
}

const handleCheckedTocDo = () => {
    for(let i = 0; i < checkedTocDo.length; i++){
        if(checkedTocDo[i].checked){
            let object = {
                "tocdo" : checkedTocDo[i].value
            }
            listCondition.push(object);
        }
    }
}

const handleCheckedCongSuat = () => {
    for(let i = 0; i < checkedCongSuat.length; i++){
        if(checkedCongSuat[i].checked){
            let object = {
                "congsuat" : checkedCongSuat[i].value
            }
            listCondition.push(object);
        }
    }
}

const handleCheckedTangToc = () => {
    for(let i = 0; i < checkedTangToc.length; i++){
        if(checkedTangToc[i].checked){
            let object = {
                "tangtoc" : checkedTangToc[i].value
            }
            listCondition.push(object);
        }
    }
}

const handleCheckedCao = () => {
    for(let i = 0; i < checkedCao.length; i++){
        if(checkedCao[i].checked){
            let object = {
                "cao" : checkedCao[i].value
            }
            listCondition.push(object);
        }
    }
}

const handleCheckedDai = () => {
    for(let i = 0; i < checkedDai.length; i++){
        if(checkedDai[i].checked){
            let object = {
                "dai" : checkedDai[i].value
            }
            listCondition.push(object);
        }
    }
}

const handleRangeGiaTien = () => {
    let object = {
        "giatien" : `${rangeGiaTien.value}`
    }
    listCondition.push(object);
}


let arrayFilter = [];
function filterCar(conditions){

    for(let i = 0; i < conditions.length ; i++){
        for(let j = 0; j < Cars.length; j++){
            let isCondition = false;
            if(Cars[j] && Cars[j].ten && conditions[i].mauxe && Cars[j].ten.toUpperCase().includes(conditions[i].mauxe.toUpperCase())){
                isCondition = true;
            }
            else if(Cars[j] && Cars[j].tocdo && conditions[i].tocdo && conditions[i].tocdo == Cars[j].tocdo){
                isCondition = true;
            } else if(Cars[j] && Cars[j].congxuat && conditions[i].congsuat && conditions[i].congsuat == Cars[j].congxuat){
                isCondition = true;
            } else if(Cars[j] && Cars[j].tangtoc && conditions[i].tangtoc && conditions[i].tangtoc == Cars[j].tangtoc){
                isCondition = true;
            } else if(Cars[j] && Cars[j].cao && conditions[i].cao && conditions[i].cao == Cars[j].cao){
                isCondition = true;
            } else if(Cars[j] && Cars[j].dai && conditions[i].dai && conditions[i].dai == Cars[j].dai){
                isCondition = true;
            } else if(Cars[j] && conditions[i].giatien && conditions[i].giatien > (Cars[j].giatieuchuan/1000)){
                isCondition = true;
            }

            if(isCondition == true){
                arrayFilter.push(Cars[j]);
            }
        }
    }
    // filter unique cars
    const uniqueArrayFilter = [... new Set(arrayFilter)];

    arrayCars = uniqueArrayFilter;
    handleRenderResultCar(uniqueArrayFilter);
    arrayFilter = [];
}

function handleFilterDisplay(list){
    let text = '';
    for(let i = 0; i < list.length ; i++){
        if(list[i] && list[i].mauxe){
            text += `"${list[i].mauxe}" , `
        } else if(list[i] && list[i].tocdo){
            text += `"${list[i].tocdo}(km/h)" , `
        } else if(list[i] && list[i].congsuat){
            text += `"${list[i].congsuat}(PS)" , `
        } else if(list[i] && list[i].tangtoc){
            text += `"${list[i].tangtoc}(s)" , `
        } else if(list[i] && list[i].cao){
            text += `"${list[i].cao}(cm)" , `
        } else if(list[i] && list[i].dai){
            text += `"${list[i].dai}(cm)" , `
        } else if(list[i] && list[i].giatien){
            text += `"${list[i].giatien}tỷ" , `
        }
    }
    return text;
}


formChecked.addEventListener('submit', (event) => {
    event.preventDefault();
    handleCheckedMauXe();
    handleCheckedTocDo();
    handleCheckedCongSuat();
    handleCheckedTangToc();
    handleCheckedCao();
    handleCheckedDai();
    handleRangeGiaTien();
    window.scrollTo({
        top : positionSrollSearch,
        behavior : 'smooth',
    })
    filterCar(listCondition);
    handleContentSearch(`${handleFilterDisplay(listCondition)}`, 'filter');
    listCondition = [];
})