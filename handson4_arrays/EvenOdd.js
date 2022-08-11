
const findEvenOdd = (N, Arr) => 
{
      let evensum = 0, oddsum=0;
    
    for (let i = 0; i < N; i++) {
        if (Arr[i] % 2 === 0) {
            evensum=evensum+ Arr[i];
        } else {
            oddsum=oddsum+Arr[i];
        }
    }
    let arrayB = [evensum, oddsum];

    return arrayB;

};