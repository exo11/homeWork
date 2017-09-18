'usr strict';

const todoList = document.getElementsByClassName('todo-list')[0];

checkTodoList(todoList);

function checkTodoList(container) {

  const done = container.getElementsByClassName('done')[0],
    undone = container.getElementsByClassName('undone')[0],
    labels = container.getElementsByTagName('label');

  Array.from(labels).forEach(item => {
    moveCase(item);
    item.addEventListener('change', () => moveCase(item));
  })

  function moveCase(item) {
    let input = item.querySelector('input');
    input.checked ? done.appendChild(item) : undone.appendChild(item);
  }

}