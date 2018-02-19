function getTransformedArray(func, arr) {
    var arr_2 = [];
    forEach(item => {
        arr_2.concat(func(item));
    }, arr);
    return arr_2;
};