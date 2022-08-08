//Create one function with zero parameter having a console statement;//
function ab() {
    console.log(ab);
}
ab()

//Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"//
function add(a,b){
    let result;
    result=a+b;
    console.log(result);
}
add(3,4) 

//Create one arrow function//

const multiplication = (a,b)  =>{ 
    let result = a*b;
    console.log(result);
}
multiplication(2,9); 
//"Print output: //

var x = 21;
console.log(x);
var girl = function () {
    var x = 20;
    console.log(x);
}
girl ();

//print output;//
var x=21;
girl();
console.log(x);
function girl(){
    console.log(x);
    var x=20;
}

// print output//

//"Print output//

var x = 21;
a();
b();
console.log(a);
a = function() {
    
   x = 20;
  console.log(x);
};
b = function() {
    
    x = 40;
   console.log(x);
};
 
//Write a function that accepts parameter n and returns factorial of n//
let result=1
function fact(n)
{
    if(n==0)
    console.log("1")
    else if(n<0){
        console.log("nothing");
    }
    else{
    for(let i=1;i<=n;i++)
    {
        result = result*i;
    }
    console.log(result)
}
}
 fact(5);
 