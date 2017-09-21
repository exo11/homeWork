'use strict';

function handleTableClick(event) {
  
  let evTarDat = event.target.dataset;

  if (event.target.classList.contains('prop__name')) {
    table.setAttribute('data-sort-by', evTarDat.propName);

    if (evTarDat.dir === undefined) {
      event.target.setAttribute('data-dir', 1);
    }

    if (evTarDat.dir === '1') {
      sortTable(table.dataset.sortBy, evTarDat.dir);
      evTarDat.dir = -1;
    } else if (evTarDat.dir === '-1') {
      sortTable(table.dataset.sortBy, evTarDat.dir);
      evTarDat.dir = 1;
    }

  }

}