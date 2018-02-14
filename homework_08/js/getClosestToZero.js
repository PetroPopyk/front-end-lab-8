 function getClosestToZero() {
     var difference = Math.abs(0 - arguments[0]);
     for (let i = 0; i < arguments.length; i++) {
         var newdiff = Math.abs(0 - arguments[i]);
         if (newdiff < difference) {
             difference = newdiff;
             curr = arguments[i];
         }
     }
     return curr;
 }
 console.log(getClosestToZero(5, 4, 6, 1, 3, 2, 7));