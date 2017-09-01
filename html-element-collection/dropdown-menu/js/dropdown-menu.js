'use strict';

let wrapperDropdown = document.getElementsByClassName('wrapper-dropdown')[0];

wrapperDropdown.onclick = () => {
    wrapperDropdown.classList.toggle("active");
};

/*wrapperDropdown.onclick = () => {
    let classNames = wrapperDropdown.className.split(' '),
        index = classNames.indexOf('active');
    index === -1 ? classNames.push('active') : classNames.splice(index, 1);
    wrapperDropdown.className = classNames.join(' ');
}*/