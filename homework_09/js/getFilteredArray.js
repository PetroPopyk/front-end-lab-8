function getFilteredArray(func, arr) {
    var arr_2 = [];
    forEach(item => {
        if (func(item)) {
            arr_2.concat(item);
        }
    }, arr);
    return arr_2;
};