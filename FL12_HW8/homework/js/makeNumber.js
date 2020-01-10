function makeNumber (str) {
    let numberArray = [];
    for (let i = 0; i < str.length; i++) {
     if (!isNaN(str[i])) {
       numberArray.push(str[i]);
      }
    }
    return numberArray.join('');
}
makeNumber("9rer384jjfd123");