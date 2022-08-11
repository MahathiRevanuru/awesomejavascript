 
function Birthday_Game(arr,D ,M) {
    let flag=0;
   for(let i=M-1;i<arr.length;i++){
     let count=0;
     for(let j=i;j>=i-M+1;j--){
       count=count+arr[j]
     }
     if (count===D){
       flag++
     }
   }
  return flag;
 
 }