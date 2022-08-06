
const Find_Five = (N) => 
{
let count=0,c=0;
	 while(N>0)
	 {
	   c=N%10;
	   if(c==5)
	   count++;
	   N=parseInt(N/10);
	 }
	 return count;

};