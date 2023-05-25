////////Скрытие/показ элементов//////////////

let titleList = document.querySelectorAll(".list-title-toggle");

function showList(e) {
  //скрываем/показываем элементы списка
  let childrenContainer =
    e.target.parentNode.querySelectorAll(".aside__list-item");

  childrenContainer.forEach((elem) => {
    elem.hidden = !elem.hidden;
  });

  //поворачиваем стрелку при закрытии списка
  e.target
    .querySelector(".list-title-icon")
    .classList.toggle("list-title-icon-rotate");
}

titleList.forEach((elem) => {
  elem.addEventListener("click", (e) => showList(e));
});

/////////Узнать подробнее/////////////

let cards = document.querySelector(".cards");
let card = document.querySelector(".card");

function handleClick(e) {
  let button = e.target.closest("button");
  button.classList.toggle("hidden-card__details-button");

  let contentShow = button.parentElement.parentElement.children[2];
  let contentHidden = button.parentElement.parentElement.children[1];

  contentShow.hidden = !contentShow.hidden;
  contentHidden.hidden = !contentHidden.hidden;
}
cards.addEventListener("click", handleClick);

