function getMin() {
    let min = arguments[0];
    let i = arguments.length;
    while (i--) {
        min = arguments[i] < min ? arguments[i] : min;
    }
    return min;
}
getMin(3, 0, -3);