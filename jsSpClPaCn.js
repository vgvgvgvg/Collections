// №1
let cells = document.querySelectorAll("table tr td");

let arr = [];

for (let cell of cells) {
  arr.push(cell);
}
console.log(Array.isArray(cells));
console.log(Array.isArray(arr));

let arr1 = [...cells].map(function (item) {
  return item;
});
console.log(Array.isArray(arr1));

let arr2 = Array.from(cells);
console.log(Array.isArray(arr2));

// №2
let elems = document.querySelectorAll('p');
let res = [...elems].slice(1, -1);
console.log(res[0].textContent);
console.log(res[3].textContent);