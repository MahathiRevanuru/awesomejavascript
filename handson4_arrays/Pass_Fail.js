
const isAllPass = (N, Arr) => 
{
   for(let i=0; i<N ;i++){
    if(Arr[i] < 32){
      return "NO";
    }
  }
  return "YES";
  
};
 