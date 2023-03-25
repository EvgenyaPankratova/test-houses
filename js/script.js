////////Строительство//////////////
let title = document.querySelector('.aside__list-title');
let list = document.querySelectorAll('.aside__list-item');
let icon = document.querySelector('.list-title-icon');

function showList(){
    for(let i=0; i < list.length; i++){ //скрываем/показываем элементы списка
        list[i].hidden = !list[i].hidden;
    }
    icon.classList.toggle('list-title-icon-rotate'); //поворачиваем стрелку при закрытии списка
};

title.addEventListener("click", showList);

////////Проекты//////////////
let titleTwo = document.querySelector('.aside__list-titleTwo');
let listTwo = document.querySelectorAll('.aside__list-itemTwo');
let iconTwo = document.querySelector('.list-title-iconTwo');

function showListTwo(){
    for(let i=0; i < listTwo.length; i++){
        listTwo[i].hidden = !listTwo[i].hidden;
    }
    iconTwo.classList.toggle('list-title-icon-rotate');
};

titleTwo.addEventListener("click", showListTwo);

////////Дома от 200м2//////////
let titleThree = document.querySelector('.aside__list-titleThree');
let listThree = document.querySelectorAll('.aside__list-itemThree');
let iconThree = document.querySelector('.list-title-iconThree');

function showListThree(){
    for(let i=0; i < listThree.length; i++){
        listThree[i].hidden = !listThree[i].hidden;
    }
    iconThree.classList.toggle('list-title-icon-rotate');
};

titleThree.addEventListener("click", showListThree);