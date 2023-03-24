////////Строительство//////////////
let title = document.querySelector('.aside__list-title');
let list = document.querySelectorAll('.aside__list-item');

function showList(){
    for(let i=0; i < list.length; i++){
        list[i].hidden = !list[i].hidden;
    }
};

title.addEventListener("click", showList);

////////Проекты//////////////
let titleTwo = document.querySelector('.aside__list-titleTwo');
let listTwo = document.querySelectorAll('.aside__list-itemTwo');

function showListTwo(){
    for(let i=0; i < listTwo.length; i++){
        listTwo[i].hidden = !listTwo[i].hidden;
    }
};

titleTwo.addEventListener("click", showListTwo);

////////Дома от 200м2//////////
let titleThree = document.querySelector('.aside__list-titleThree');
let listThree = document.querySelectorAll('.aside__list-itemThree');

function showListThree(){
    for(let i=0; i < listThree.length; i++){
        listThree[i].hidden = !listThree[i].hidden;
    }
};

titleThree.addEventListener("click", showListThree);