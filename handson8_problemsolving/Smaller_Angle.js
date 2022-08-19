var Minimal_Angle = (h, m) => 
{
 //The minute hand moves 360 degrees in 60 minute(or 6 degrees in one minute) and 
 //hour hand moves 360 degrees in 12 hours(or 0.5 degrees in 1 minute). In h hours and m minutes,
 //the minute hand would move (h*60 + m)*6 and hour hand would move (h*60 + m)*0.5. 
  
  const ah = 360/12; 
  
  const am = 360/60;  
 
  let ma= m*am;      
 
  let ha=h*ah+m/60*ah;

   const angle=Math.abs(ha-ma);
   return Math.min(360-angle , angle);
  
  
};