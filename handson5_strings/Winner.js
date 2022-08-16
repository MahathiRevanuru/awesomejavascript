var Game_Winner = (S) => 
{
  let a=0,d=0;
  let n=S.length
  for(let i=0;i<n;i++)
  {
    if(S[i]=='A')
    a++;
    else
    d++;
  }
  if(a>d)
  return 'Aditya';
    
  
  else if(a<d)
  return 'Danish';
  
  else(a=d)
  return 'Draw';
  
}