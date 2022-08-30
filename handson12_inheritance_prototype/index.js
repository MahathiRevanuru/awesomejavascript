//Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype.
const parent = {
        name: "mahathi",
        age:21,
      parentDetails: function(){
            console.log(`name ${this.name}age ${this.age}`);
             return(`name ${this.name}age ${this.age} `)
        
        }   
    }
    const child={
        name:"revanuru",
        age:31
    }
    child.__proto__= parent;
    console.log(child.age);
    console.log(child)
    console.log(child.parentDetails());
    child.parentDetails();
//Write code to explain prototype chaining.

//That means all the objects in JavaScript, inherit the properties and methods from Object. prototype.
// This is called Prototype chaining

const studentOne = {
    name: "mahathi",
    age:21,
   StudentDetails: function(){
        console.log(`name ${this.name}age ${this.age}`);
   
    }   
}
const studentTwo = {
    name:"revanuru",
}
console.log(studentOne.__proto__);
console.log(studentTwo.__proto__);
console.log(studentTwo.__proto__.__proto__); //null

// Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays

const sum ={
    addition:function(arr){
        let arraysum=0;
        let n= arr.length;
        for( let i=0 ; i<n ; i++){
            arraysum=arraysum+arr[i];
        }
        console.log(arraysum);
    }
}
Array.__proto__=sum;
arr1= [1,2,4,6,8];
Array.addition(arr1);
arr2=[23,56,899]
Array.addition(arr2);

//Write a JavaScript function to retrieve all the names of object's own and inherited properties.

// const parent = {
//     name: "mahathi",
//     age:21,
//   parentDetails: function(){
//         console.log(`name ${this.name}age ${this.age}`);
//          return(`name ${this.name}age ${this.age} `)
    
//     }   
// }
// const child={
//     name:"revanuru",
//     age:31
// }
// child.__proto__= parent;
// console.log(child.age);
// console.log(child)
// console.log(child.parentDetails());
// child.parentDetails();
 var keys=[];
 for( let key in parent) keys.push(key);
 console.log(keys);


    
  