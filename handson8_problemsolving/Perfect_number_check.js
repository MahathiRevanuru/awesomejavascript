 
var Perfect_Check = (N) => 
{
    let a=0;
    for (let i=1;i<=N/2;i++){
       if(N%i===0);
       a=a+i;
    }
    
    if(a==N && a !==0)
     return "YES";
     else
     return "NO";
        
};