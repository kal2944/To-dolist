import './index.css';
import { addTask, actions } from '../modules/actions.js';

const addBtn = document.querySelector('.add-btn');
const clearCompleted = document.querySelector('.clear');
const tasksList = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];

let id = 1;
addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (addTask.value !== '') {
    const task = {
      description: `${addTask.value}`,
      completed: false,
      index: id,
    };

    tasksList.push(task);

    const tasks = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
    tasks.push(task);
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].index = i + 1;
    }
    localStorage.setItem('data', JSON.stringify(tasks));
  }
  id += 1;
  actions();
});

clearCompleted.addEventListener('click', (e) => {
  e.preventDefault();
  const notDeleted = tasksList.filter((x) => x.completed === false);

  for (let i = 0; i < notDeleted.length; i += 1) {
    notDeleted[i].index = i + 1;
  }
  localStorage.setItem('data', JSON.stringify(notDeleted));
  actions();
});
