function isSmaller(a, b) {
    let firstIsSmaller;
    for (; a <= b;) {
      firstIsSmaller = true;
    }
    return firstIsSmaller || false;
}
isSmaller(5, -1);