//Write one example explaining how you can write a callback function ?

function names(z) { //function 1
    console.log(z);
}

function mahathi(x, y, sum) { // another  that is function2
    let result = x + y;
    sum(result);
}
mahathi(23, 54, names);// calling the function 1 in function2

//2."Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Explain callback hell.

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"
const num = () => {
    
    setTimeout(() => {
        console.log(1)

        setTimeout(() => {
            console.log(2);

            setTimeout(() => {
                console.log(3);

                setTimeout(() => {

                    console.log(4);

                    setTimeout(() => {
                        console.log(5);

                        setTimeout(() => {
                            console.log(6);

                            setTimeout(() => {
                                console.log(7);
                            }, 1000);

                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);

    }, 1000);
}

//3."Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 

// Numbers
// 1
// 2
// 3
// 4
// 5
// 6
// 7"
let flag = (timer) =>
    new Promise((resolve) => setTimeout(resolve, timer));

for (let num = 1; num <= 7; num++)
    flag(num * 1000).then();

flag(1000).then(() => console.log(1));
flag(2000).then(() => console.log(2));
flag(3000).then(() => console.log(3));
flag(4000).then(() => console.log(4));
flag(5000).then(() => console.log(5));
flag(6000).then(() => console.log(6));
flag(7000).then(() => console.log(7));

//4.Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected .
const getId=new Promise((resolve, reject)=>{  //resolve,rejected are the executor functions  //producer part
	setTimeout(()=>{
		let id= [1,2,3,4,5,6,7,8];
		resolve(id);
		reject("error in fecthing the detalis")
	}, 2000);
});
 getId                      // consumer part
      .then((data)=>{
		console.log("the data is resolved" ,data);
		
	  })
	  .catch ((error)=>{
		console.log(error);
		
	  })
	  .finally(()=>{
		console.log("end of promise");
		
	  });

     
      
//5.Create examples to explain callback function
// A callback is a function passed as an argument to another function

// This technique allows a function to call another function

// A callback function can run after another function has finished

function names(z) { //function 1
    console.log(z);
}

function mahathi(x, y, sum) { // another  that is function2
    let result = x + y;
    sum(result);
}
mahathi(23, 54, names);// calling the function 1 in function2

//6.Create examples to explain callback hell function
// // // //Callback Hell - Callbacks are just the name/convention for using JavaScript. It instead of immediately 
// // // returning results like other functions, takes time to produce the result. So, If we stuck in some 
// // // particular call which prevents us from making further calls ends us into callback Hell.
// // // //The structure of callback hell looks like pyramid/arrow shape.
// // // //This makes our code look haphazard and makes it hard to understand.
// // // // //We should always try to avoid using multiple Callbacks to end up falling into callback hell.
// // // // //We use Promises to prevent using Callbacks and thereby avoiding Callback Hell.

const getEmpId = () => {
	setTimeout(() => {
		console.log("Fetching the ID's");
		let id = [1, 2, 3, 4, 5];
		console.log(id);

		setTimeout(() => {
			let empDetails = {
				fName: 'Harsh',
				lName: 'Bajaj',
				age: 28,
			};
			console.log(`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is 
            ${empDetails.age}`);

			setTimeout(() => {
				(empDetails.gender = 'Male'),
					console.log(
						`The name of the Employee is ${empDetails.fName} ${empDetails.lName} and the age is 
                        ${empDetails.age} and the gender is ${empDetails.gender}`
					);
			}, 2000);
		}, 2000);
	}, 2000);
};

getEmpId();

//7.Create examples to explain promises function

// // // //Promises - Promises are used to handle asynchronous operations in JavaScript. They are easy to manage 
// // // when dealing with multiple asynchronous operations where callbacks can create callback hell leading to 
// // // unmanageable code. It also allows us to make API calls or fetch data from Web Servers successfully. If not 
// // // able to do so fetches us with an error message.

// // // // It have three stages.
// // // // 1. Pending               2. Resolved(fulfilled)          3. Rejected.



// // /////////promises example//////
const getIds=new Promise((resolve, reject)=>{  //resolve,rejected are the executor functions  //producer part
	setTimeout(()=>{
		let id= [1,2,3,4,5,6,7,8];
		resolve(id);
		reject("error in fecthing the detalis")
	}, 2000);
});
 getIds                      // consumer part
      .then((data)=>{
		console.log("the data is resolved" ,data);
		
	  })
	  .catch ((error)=>{
		console.log(error);
		
	  })
	  .finally(()=>{
		console.log("end of promise");
		
	  });

//8.Create examples to explain async await function
// Async/Await - They are used to handle promises more efficiently. The word async before a function 
// // always means that the function always returns a PROMISE. So, we therefore use async before the function name
// //  to return a promise instead of a value. 

// // // Await is used to wait for the result that is to be returned from the promise. So, we use await 
// // when we are calling a function which returns a promise. Also, we can use them(Async/Await) for making
// //  API calls.

// // // Await is always used with the keyword async.

async function tryingPromise(){
	console.log("i am inside the function using async/await");
	const response=await fetch("https://api.github.com/users");
	console.log("befoe the response is fetched");
	const users= await response.json();
	console.log("users resolved");

	return users;
}

console.log("before calling the function");
let data= tryingPromise();
console.log("after calling the function");
console.log("data received",data);
data.then((res)=>{
	console.log(res);

})
console.log("end of code");

//9.Create examples to explain promise.all function
const functionOne = () => {
        return "I am function One";
    }
    
    const functionTwo = () => {
        // return new Promise((res,rej)=>{
            setTimeout(() => {
                return("I am function Two");
            }, 3000);
        // })
    }
    
    const functionThree = () => {
        return "I am function Three";
    }
    
    const callAllFunctions = () => {
        let responseOne = functionOne();
        console.log(responseOne);
    
        
        let responseTwo = functionTwo();
        console.log(responseTwo);
    
        let responseThree = functionThree();
        console.log(responseThree);
    }
    
    callAllFunctions();




