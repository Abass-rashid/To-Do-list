/*eslint-disable*/
import _ from "lodash";
/* eslint-enable */
import './style.css';

const todolist = [
  {
    index: 1,
    description: 'wash the dishes',
    completed: false,
  },
  {
    index: 2,
    description: 'clean my room',
    completed: true,
  },
  {
    index: 3,
    description: 'Complete todo list project',
    completed: false,
  },
];
class TODOs {
  constructor() {
    this.toDoList = [];
  }

  add(description, completed) {
    this.toDoList = this.toDoList.concat({
      index: Date.now(),
      description,
      completed,
    });
  }

  remove(id) {
    this.toDoList = this.toDoList.filter((todo) => todo.id !== Number(id));
  }
}
/* eslint-disable */
const todos = new TODOs();
/* eslint-enable */

const todoDiv = document.querySelector('.todos');
const lunchTodoList = () => {
  todolist.forEach((todo) => {
    const li = document.createElement('li');
    li.classList.add('todo');
    const liDiv = document.createElement('div');
    liDiv.classList.add('li-div');
    // create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    liDiv.appendChild(checkbox);
    // create description
    const desc = document.createElement('p');
    desc.innerText = todo.description;
    liDiv.appendChild(desc);
    li.appendChild(liDiv);
    // create 3 vertical dots
    const dots = document.createElement('i');
    dots.classList.add('fa');
    dots.classList.add('fa-ellipsis-v');
    li.appendChild(dots);
    todoDiv.appendChild(li);
  });
};
lunchTodoList();
