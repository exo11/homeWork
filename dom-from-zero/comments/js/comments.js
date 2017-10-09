'use strict';

function showComments(list) {
  const commentsContainer = document.querySelector('.comments');
  const comments = list.map(createComment);
  const fragment = comments.reduce((fragment, currentValue) => {
    fragment.appendChild(currentValue);
    return fragment;
  }, document.createDocumentFragment());
  commentsContainer.appendChild(fragment);
}

function el(tagName, attributes, children) {
  const element = document.createElement(tagName);
  if (typeof attributes === 'object') {
    Object.keys(attributes).forEach(i => element.setAttribute(i, attributes[i]));
  }
  if (typeof children === 'string') {
    let strings = children.split('\n');
    const fragment = strings.reduce((fragment, currentValue, i) => {
      if (strings.length === 1) {
        fragment.textContent = currentValue;
      } else {
        fragment.appendChild(document.createTextNode(currentValue));
        if (i !== strings.length - 1) {
          fragment.appendChild(document.createElement('br'));
        }
      }
      return fragment;
    }, document.createDocumentFragment());
    element.appendChild(fragment);
  } else if (children instanceof Array) {
    children.forEach(child => element.appendChild(child));
  }
  return element;
}

function createComment(comment) {
  return el('div', { class: 'comment-wrap' }, [
    el('div', { class: 'photo', title: comment.author.name }, [
      el('div', { class: 'avatar', style: `background-image: url('${comment.author.pic}')` }, '')
    ]),
    el('div', { class: 'comment-block' }, [
      el('p', { class: 'comment-text' }, comment.text),
      el('div', { class: 'bottom-comment' }, [
        el('div', { class: 'comment-date' }, new Date(comment.date).toLocaleString('ru-Ru')),
        el('ul', { class: 'comment-actions' }, [
          el('li', { class: 'complain' }, 'Пожаловаться'),
          el('li', { class: 'reply' }, 'Ответить')
        ])
      ])
    ])
  ]);
}

fetch('https://neto-api.herokuapp.com/comments')
  .then(res => res.json())
  .then(showComments);

/*function createComment(comment) {
  return `<div class="comment-wrap">
    <div class="photo" title="${comment.author.name}">
      <div class="avatar" style="background-image: url('${comment.author.pic}')"></div>
    </div>
    <div class="comment-block">
      <p class="comment-text">
        ${comment.text.split('\n').join('<br>')}
      </p>
      <div class="bottom-comment">
        <div class="comment-date">${new Date(comment.date).toLocaleString('ru-Ru')}</div>
        <ul class="comment-actions">
          <li class="complain">Пожаловаться</li>
          <li class="reply">Ответить</li>
        </ul>
      </div>
    </div>
  </div>`
}*/