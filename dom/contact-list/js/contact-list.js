'use strict';

function addContacts() {

    let arrContacts = JSON.parse(loadContacts()),
        contactsList = document.getElementsByClassName('contacts-list')[0],
        str = '';

    for (let contact of arrContacts) {
        str += `<li data-email='${contact.email}' data-phone='${contact.phone}'>
        <strong>${contact.name}</strong>
        </li>`
    }

    contactsList.innerHTML = str;

}

document.addEventListener('DOMContentLoaded', addContacts);
