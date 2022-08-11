const Find_Num = (array,N,M) => 
{
  let flag=0;
 for (let i = 0; i < N; i++) {
    if (array[i] === M)
    flag++;
      
    }
 
  if(flag>0){
      return "YES";
  }
      
      else {
      return "NO";
    }
};