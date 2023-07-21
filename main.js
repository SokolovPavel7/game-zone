const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');
const gameStart = document.querySelectorAll('.game');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

// // for (const placeholder of placeholders) {
// //   console.log(placeholder);
// }
placeholders.forEach((placeholder) => {
  placeholder.addEventListener('dragover', dragOver);
  placeholder.addEventListener('dragenter', dragEnter);
  placeholder.addEventListener('dragleave', dragLeave);
  placeholder.addEventListener('drop', dragDrop);
});

function dragStart(event) {
  event.target.classList.add('flight');
  setTimeout(() => {
    event.target.classList.add('hide');
  }, 0);
}

function dragEnd(event) {
  //   event.target.className = 'item';
  event.target.classList.remove('flight', 'hide');
}

// Выбранный элемент или текст перетаскивается над допустимой целью перетаскивания.
function dragOver(event) {
  event.preventDefault();
}

// Перетаскиваемый элемент или выделенный текст попадает в допустимую цель перетаскивания.
function dragEnter(event) {
  event.target.classList.add('hovered');
}

// Перетаскиваемый элемент или выделенный текст оставляет допустимую цель перетаскивания.
function dragLeave(event) {
  event.target.classList.remove('hovered');
}

// Элемент перетаскивается на допустимую цель перетаскивания.
function dragDrop(event) {
  event.target.append(item);
  event.target.classList.remove('hovered');
}

gameStart.addEventListener('click', openPage);

const openPage = (event) => {
  event.forEach(() => {});
};
