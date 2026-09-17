'use strict';

const table = document.querySelector('table');

for (const row of table.rows) {
  const second = row.querySelector(':nth-child(2)').cloneNode(true);
  const fourth = row.querySelector(':nth-child(4)');

  fourth.after(second);
}
