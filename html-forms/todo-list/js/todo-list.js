'use strict';

const listBlock = document.getElementsByClassName('list-block')[0],
  tasks = listBlock.getElementsByTagName('input'),
  taskCounter = listBlock.querySelector('h3 > output');
let counter = 0;

for (let task of tasks) {
  taskCount(task, tasks, 1);
  task.addEventListener('click', () => { taskCount(task, tasks, 1, 1) });
}

function taskCount(task, tasks, plus, minus = 0) {
  task.checked ? counter += plus : counter -= minus;
  taskCounter.value = `${counter} из ${tasks.length}`;
  counter === tasks.length ? listBlock.classList.add('complete') :
    listBlock.classList.remove('complete');
}