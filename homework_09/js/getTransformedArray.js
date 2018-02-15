 function forEach(func, arr) {
     for (var i = 0; i < arr.length; i++) {
         func(arr[i]);
     };
 };

 function getTransformedArray(func, arr) {
     forEach(func, arr);
 }
 getTransformedArray(function increment(item) {
     console.log(item + 1);
 }, [1, 5, 3]);