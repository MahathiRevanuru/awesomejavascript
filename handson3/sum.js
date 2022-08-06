
const findSum = (n) => {
    let count = 0;
        for(let i=n; i > 1; i--) {
          if(i%2 === 0) {
            count += i;
          }
        }  return count;
    };