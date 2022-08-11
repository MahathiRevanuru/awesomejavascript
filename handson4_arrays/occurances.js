const findCount = (N, K, Arr) => 
{
  let count=0
  for(let i=0;i<N;i++){
    if(K===Arr[i]){
      count=count+1
    }
     
  }
  return count; 
};
 
