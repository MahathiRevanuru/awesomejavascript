
var Count_Vowels= (S) => 
{
    let vowels=0;
    vowels = S.match(/[aeiou]/gi).length;
    return vowels;  
};
var Count_Consonants= (S) => 
{
      let consonents=0;
    consonents = S.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
    return consonents; 
};