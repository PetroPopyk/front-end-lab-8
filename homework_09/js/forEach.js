 function forEach(func, arr) {
     for (var i = 0; i < arr.length; i++) {
         func(arr[i]);
     };
 };
 forEach(function (el) {
     console.log(el);
 }, [0, 5, 3]);