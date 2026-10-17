function countNumberProperties2(numbers) {
    let positive = 0;
    let negative = 0;
    let even = 0;
    let odd = 0;
  numbers.map((number)=>{
    if(number>0){
        positive ++;
    }
    if(number < 0){
        negative ++;
    }
    if(number === 0 || number % 2 === 0){
        even ++;
    }
    if(number !== 0 && number % 2 !== 0){
        odd ++;
    }
  })
  return{even, negative, odd, positive};
}
console.log(countNumberProperties2([2,4,6,8,10]));