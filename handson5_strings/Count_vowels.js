var Count_Vowels= (S) => 
{
    let vowels=0;
    vowels = S.match(/[aeiou]/gi).length;
    return vowels;  
};