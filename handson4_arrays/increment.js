
const Inc_Arr = (array,N) => 
{
  let arraytwo = [];
 for (let i=0; i<N; i++) {
  arraytwo.push(array[i] + 1);
 }
   console.log(arraytwo.join(" "));
};