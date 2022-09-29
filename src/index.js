import './index.css';

const tasks = [
  {
    description: 'Reading book',
    completed: false,
    index: 0,
  },

  {
    description: 'Exercising',
    completed: false,
    index: 1,
  },

  {
    description: 'Doing project',
    completed: false,
    index: 2,
  },
];

const list = document.getElementById('tasks-list');

window.addEventListener('load', () => {
  for (let i = 0; i < tasks.length; i += 1) {
    // create list item
    const li = document.createElement('li');
    li.classList.add('container-li');

    // create ceckbox
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.classList.add('checkbox');
    input.id = 'checkbox';

    // create description
    const label = document.createElement('label');
    label.textContent = `${tasks[i].description}`;
    label.classList.add('description');
    label.setAttribute('for', 'checkbox');

    // create edit button
    const edit = document.createElement('button');
    edit.classList.add('edit-btn');
    edit.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';

    // append the childs
    li.appendChild(input);
    li.appendChild(label);
    li.appendChild(edit);
    list.appendChild(li);
  }
});