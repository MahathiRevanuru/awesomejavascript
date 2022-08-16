//"Problem:1.You are given a string (STR) of length N, consisting of only the lower case English alphabet.
//Your task is to remove all the duplicate occurrences of characters in the string.
//Input:abcadeecfb
//Output:abcdef"//
var string='abcadeecfb';
let n=string.length;
let setone=new Set();
for(let i=0;i<n;i++){
    setone.add(string.charAt(i));
}
console.log(setone);


//"Problem:2.You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)
//Input:abcadeecfb

//Output:
//a=2
//b=2
//c=2
//d=1
//e=2
//f=1"
function count_alphabets(Str)
{
 
  let Mapone = new Map();
  console.log(Mapone);
 
  Str.split('').forEach(element => {
     
        if(Mapone.has(element))
        {
           console.log( Mapone.set(element, Mapone.get(element)+1));
        }
        else
           console.log( Mapone.set(element, 1));
  });

  console.log(Mapone);
}  
let Str='abcadeecfb';
count_alphabets(Str) 

