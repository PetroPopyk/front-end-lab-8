 function forEach(func, arr) {
     for (var i = 0; i < arr.length; i++) {
         func(arr[i]);
     };
 };

 function getFilteredArray(func, arr) {
     forEach(func, arr.sort());
     console.log(arr.filter(func));
 };

 function predicateFunction(item) {
     return item < 3;
 }
 getFilteredArray(predicateFunction, [1, 3, -1, 5, 7, 2, 3, 0]);