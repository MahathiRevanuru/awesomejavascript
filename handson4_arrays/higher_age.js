const highAge = (N, Arr) => 
{
  let arrayone=[];
    for(let i=0; i<N; i++){
      if(Arr[i] >= 18){
        arrayone.push(Arr[i]);
      }
    }
    return arrayone;
};
 