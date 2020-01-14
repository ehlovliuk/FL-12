//1.
function convert() {
    let myArr = [];
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === 'number') {
          myArr.push(arguments[i].toString());
       } else {
        myArr.push(parseInt(arguments[i]));
      }
    }
    return myArr;
}
const a = 2;
const b = 3;
convert('1', a, b, '4');

//2.
function executeforEach(arr, callback) {
    return callback(arr);
}
function doubleArgument(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] * 2);
    }
}
const c = 1;
const d = 2;
const e = 3;
executeforEach([c, d, e], doubleArgument);

//3.
function mapArray(arr) {
let updatedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            updatedArr.push(parseInt(arr[i]) + 3);
        } else {
        updatedArr.push(arr[i] + 3);
        }
    }
return updatedArr;
}
const f = 2;
const g = 8;
executeforEach([f, '5', g], mapArray);

//4.
function filterArray(arr) {
    let evenNumbersArr = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          evenNumbersArr.push(arr[i]);
        }
      }
    return evenNumbersArr;
}
const h = 2; 
const j = 5;
const k = 8;
executeforEach([h, j, k], filterArray);

//5.
function flipOver(str) {
    let o = '';
    for (let i = str.length - 1; i >= 0; i--) {
        o += str[i];
    }
    return o;
  }
  console.log(flipOver('hey world'));

  //6.
  function makeListFromRange(range) {
    let myList = [];
    let start = range[0];
    let end = range[1];
    for (let i = start; i <= end; i++) {
      myList.push(i);
    }
    return myList;
  }
  const l = 2;
  const m = 7;
  console.log(makeListFromRange([l, m]));

  //7.
  const actors = [
    {name: 'tommy',
    age: 36},
    {name: 'lee',
    age: 28}
  ];
  function getArrayOfKeys() {
   let keysArray = [];
   for (let i = 0; i < actors.length; i++) {
     keysArray.push(actors[i].name);
   }
   return keysArray;
  }
  console.log(getArrayOfKeys(actors, 'name'));

  //8.
  function substitute(myArr) {
    let substitutedArr = [];
    let filterNum = 30;
    for (let i = 0; i < myArr.length; i++) {
      myArr[i] > filterNum ? substitutedArr.push(myArr[i]) : substitutedArr.push('*');
    }
    return substitutedArr;
  }
  const n = 58;
  const o = 14;
  const p = 48;
  const r = 2;
  console.log(substitute([n, o, p, r]));

  //9.
const date = new Date(2019, 0, 2);
function getPastDate(date, daysAgo) {
    let dateClone = new Date(date);
    dateClone.setDate(date.getDate() - daysAgo);
    return dateClone.getDate();
}
const subtractedDays = 365; 
alert( getPastDate(date, subtractedDays) ); 
