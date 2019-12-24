let a = parseInt(prompt('Enter a'));
while (isNaN(a) || !isFinite(a) || a <= 0){
    alert('input values should be only numbers');
    a = parseInt(prompt('Enter a'));
    if (a <= 0) {
        alert('A triangle must have 3 sides with a positive definite length')
        a = parseInt(prompt('Enter a'));
    }
}
let b = parseInt(prompt('Enter b'));
while (isNaN(b) || !isFinite(b) || b <= 0){
    alert('input values should be only numbers');
    b = parseInt(prompt('Enter b'));
    if (b <= 0) {
        alert('A triangle must have 3 sides with a positive definite length')
        b = parseInt(prompt('Enter b'));
    }
}
let c = parseInt(prompt('Enter c'));
while (isNaN(c) || !isFinite(c) || c <= 0){
    alert('input values should be only numbers');
    c = parseInt(prompt('Enter c'));
    if (c <= 0) {
        alert('A triangle must have 3 sides with a positive definite length')
        c = parseInt(prompt('Enter c'));
    }
}
console.log(a,b,c)
if (a + b < c || b + c < a || c + a < b) {
    alert("Triangle doesn't exist");
} else if (a === b && b === c && a === c) {
    console.log('Equilateral triangle')
} else if (a === b || b === c || a === c) {
    console.log('Isosceles triangle')
} else {
    console.log('Scalene triangle')
}