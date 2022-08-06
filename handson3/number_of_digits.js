
const Find_Digits = (N) => 
{
let num = N;
let count = 1;
for(let i=0; i<=5; i++) {
num = num/10;
if(num >= 1) {
 count++;
}
}
return count;
};