function Unique_Shirts (arr,N) {
  
    let unique_shirt = arr.filter((value)=>arr.indexOf(value)===arr.lastIndexOf(value));
    return unique_shirt.length;
 }