import { save, load, compare } from './data.js';

const theBigList = document.querySelector('.todos');

function getDragAfterElement(tdle, y) {
  const dragableElements = [...tdle.querySelectorAll('.todo:not(.dragging)')];

  return dragableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child };
    } return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function hold(element) {
  element.classList.add('dragging');
}

function drag(element) {
  element.classList.remove('dragging');
}

export function makeDrageable(element) {
  const newTodo = [];
  element.addEventListener('dragstart', () => { hold(element); });
  element.addEventListener('dragend', () => {
    drag(element);
    const e = theBigList.querySelectorAll('.todo');
    let todo = load();

    todo.sort(compare);
    for (let i = 0; i < e.length; i += 1) {
      const otherId = parseInt(e[i].id, 10);
      newTodo[i] = todo[otherId];
      newTodo[i].index = i;
      e[i].id = [i];
    }
    save(newTodo);
    todo = load(todo);
  });
}

export function makeContainer(tdl) {
  tdl.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(tdl, e.clientY);
    const dragable = document.querySelector('.dragging');
    if (afterElement == null) {
      tdl.appendChild(dragable);
    } else {
      tdl.insertBefore(dragable, afterElement);
    }
  });
}