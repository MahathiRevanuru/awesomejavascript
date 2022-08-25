let studentRecords = 
          [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 
          console.log(studentRecords);
//1."Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.
//['JOHN', 'BABA', 'YAGA', 'WICK']
let array1=[];
let n= studentRecords.length
for(let i=0; i<n;i++ ){
    array1.push(studentRecords[i].name)
}
console.log(array1);
const upper = array1.map(element => {
    return element.toUpperCase();
  });
  console.log(upper);

  //2."Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

  //[{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"

console.log(studentRecords.filter(a=>a.marks > 50))

// 3.Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.
console.log(studentRecords.filter(a=>a.marks > 50).filter(b=>b.id > 120) )

//Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.
let sum=0;
for(let i=0;i<n;i++){
    sum=sum+studentRecords[i].marks
}
console.log(sum)
//Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.
let array2=[]
for(let i=0; i<n;i++ ){
    if(studentRecords[i].marks>50)
    array2.push(studentRecords[i].marks)
}
console.log(array2);

// Question 6: This time we are required to print the sum of marks of the students with id > 120.
let idsum=0;
for(let i=0;i<n;i++){
    if(studentRecords[i].id>120)
    idsum=idsum+studentRecords[i].marks
}
console.log(idsum)
//Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.
let grace=0;
for(let i=0;i<n;i++){
    grace=grace+studentRecords[i].marks+15
}
console.log(grace)
//Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 
function student (fName, classes, roll) {
    this.fName = fName;
    this.classes = classes;
    this.roll= roll;
}
const array3=[new student("mahathi","eighth",04),new student("sweety","tenth",42),new student("sony","fifth",36),new student("sandy","fouth",90),new student("anu","second",01),new student("ram","seventh",02)]

console.log(array3);