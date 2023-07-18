function mul(...elements) {
    result = 1;
    numberCount = 0;
    for (const item of elements) {
        if (typeof item === 'number') {
            result *= item;
            numberCount++;
        }
    }
    if (numberCount > 0)
        return result;
    else
        return 0;
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0