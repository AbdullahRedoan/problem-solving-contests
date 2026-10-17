function countEvenOdd(numbers) {
    let even = 0;
    let odd = 0;
  if(!Array.isArray(numbers)){
    return;
  }if(numbers.length === 0){
    return
  }if(!numbers.every(num => typeof num === 'number')){
    return
  }
  else{
    numbers.map(number => {
        if( number % 2 === 0){
            even ++;
        }else{
            odd ++;
        }
    })
}
return({even, odd})
}

console.log(countEvenOdd([1,0,2,3,4,5]));