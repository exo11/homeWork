'use strict';

const tabs = document.getElementById('tabs');

checkTabs(tabs);

function checkTabs(container) {

  const tabsContent = container.querySelector('.tabs-content'),
    tabsNav = container.querySelector('.tabs-nav'),
    tabClone = tabsNav.removeChild(tabsNav.firstElementChild),
    articles = tabsContent.children;

  Array.from(articles).forEach(article => {
    
    let tab = tabClone.cloneNode(true),
      link = tab.firstElementChild;

    link.classList.add(article.dataset.tabIcon);
    link.textContent = article.dataset.tabTitle;
    tabsNav.appendChild(tab);

    article.classList.add('hidden');
    articles[0].classList.remove('hidden');
    tabsNav.children[0].classList.add('ui-tabs-active');

    tab.addEventListener('click', changeClass);

    function changeClass() {
      
      Array.from(tabsNav.children).map((tab, i) => {
        tab.classList.remove('ui-tabs-active');
        articles[i].classList.add('hidden');
      });
      
      tab.classList.add('ui-tabs-active');
      article.classList.remove('hidden');
    
    }

  });

}

