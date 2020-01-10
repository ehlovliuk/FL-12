function countNumber(myUniqueString) {
    let checkingArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let matchObj = {};
    for (let n = 0; n < checkingArray.length; n++) {
    let counter = 0;
    for (let i = 0; i < myUniqueString.length; i++) {
     if (checkingArray[n] === myUniqueString[i] ) {
        counter++;
        matchObj[checkingArray[n]] = counter;
     }
    }
   }
    return matchObj;
  }
 countNumber('jdjjka000466588kkkfs662555');