function collectIds(arr) {
    getFilteredArray(item => {
        if (item['rating'] > 3) {
            console.log(item['id']);
        }
    });
};