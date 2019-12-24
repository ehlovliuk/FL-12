let a = parseFloat(prompt('Enter a'));
while (a === 0 || isNaN(a)){
    alert('Invalid input data');
    a = parseFloat(prompt('Enter a'));
}
let b = parseFloat(prompt('Write "b" coefficient'));
while (isNaN(b)) {
    alert('Invalid input data');
    b = parseFloat(prompt('Enter b'));
}
let c = parseFloat(prompt('Write "c" coefficient'));
while (isNaN(c)) {
    alert('Invalid input data');
    c = parseFloat(prompt('Enter c'));
}

if (b === 0 && c ===0) {
    console.log('x=0')
} else if (b === 0) { 
    if (-1 * c/a >= 0) {
        let x1 = Math.sqrt(-1 * c / a);
        let x2 = -1 * Math.sqrt(-1 * c / a);
        console.log('x1=' + x1, 'x2=' + x2)
    } else {
        console.log('No solution')
    }
} else if (c === 0) {
    let x1 = 0;
    let x2 = -1 * b/a;
    console.log('x1=' + x1, 'x2=' + x2)
} else {
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    let x1 = (-1 * b + Math.sqrt(discriminant)) / 2 * a;
    let x2 = (-1 * b - Math.sqrt(discriminant)) / 2 * a;
    let xRoot = -1 * b/(2 * a);
    if (discriminant > 0) {
        console.log('x1=' + x1, 'x2=' + x2);
    } else if (discriminant === 0) {
    console.log(xRoot);
    } else {
        console.log('No solution');
    }
}
