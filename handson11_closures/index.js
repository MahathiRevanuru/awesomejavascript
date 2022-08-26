//    function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());

//================================================================================//
// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 1;
//     console.log(count); // What is logged?
//   }
//   console.log(count); // What is logged?
// })();

//===============================================================================//
// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }

//===============================================================================//
//
//Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.


// let f;
// const g = function(){
//     const length = 3;
//     f = function( breadth){
//         console.log(length * breadth);
//     }
// }
// g();
// f( 2 );
// console.dir(f);

//==================================================================================//

//Take a variable in outer function and create an inner function to increase the counter every time it is called.
//  const cat= function(){
//      let b=0;
     
//      return function(){
//         b++;
//         console.log(`The count of b is ${b}`);
//      }
//  }
//  let dog= cat();
//  console.log(dog);
//  console.dir(dog);
//  dog();
//  dog();
//  dog();

//===============================================================================//
// Print Output

// var a = 12;
// (function () {
//   alert(a);
// })();

//=============================================================================//
// var a = 10;
// var x = (function () {
//   var a = 12;
//   return function () {
//     alert(a);
//   };
// })();
// x();

//===================================================================================//
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        ""outerArg = "" + outerArg + ""\n"" + 
        ""innerArg = "" + innerArg + ""\n"" +
        ""outerVar = "" + outerVar + ""\n"" +
        ""innerVar = "" + innerVar + ""\n"" +
        ""globalVar = "" + globalVar);
    
    })(456);
})(123);