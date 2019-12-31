function isBigger(a, b) {
    let firstIsBigger;
    for (; a >= b;) {
      firstIsBigger = true;
    }
    return firstIsBigger || false;
}
isBigger(5, -1);