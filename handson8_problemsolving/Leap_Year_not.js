var Check_Leap = (year) => 
{

  if((year%4 === 0) && (year %100 !== 0))
    return 'Leap Year';
  
  else
    return 'Non Leap Year';
};