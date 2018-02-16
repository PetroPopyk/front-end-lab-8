var movies = [
    {
        "id": 70111470
        , "title": "Die Hard"
        , "boxart": " http://bb-1/654356453"
        , "uri": " http://bb-1/654356453"
        , "rating": 2.7
        , "bookmark": []
}, {
        "id": 654356453
        , "title": "Good Mood"
        , "boxart": "http://bb-1"
        , "uri": " http://bb-1/654356453"
        , "rating": 3.5
        , "bookmark": [{
            time: 65876586
         }]
}, {
        "id": 65432445
        , "title": "The Chamber"
        , "boxart": "http://ch-1"
        , "uri": " http://ch-1/65432445"
        , "rating": 3.0
        , "bookmark": []
}, {
        "id": 675465
        , "title": "Fracture"
        , "boxart": "http://fr-1"
        , "uri": " http://fr-1/675465"
        , "rating": 4.0
        , "bookmark": [{
            time: 65876586
         }]
}];

function forEach(func, arr) {
    for (var i = 0; i < arr.length; i++) {
        func(arr[i]);
    };
};
//function getTransformedArray(func, arr) {
//    forEach(func, arr);
//};
function getFilteredArray(func, arr) {
    forEach(func, arr.sort());
    console.log(arr.filter(func));
};

function collectIds(arr) {
    getFilteredArray(function (item) {
        return item['rating'] > 3;
    }, arr);
};
collectIds(movies);