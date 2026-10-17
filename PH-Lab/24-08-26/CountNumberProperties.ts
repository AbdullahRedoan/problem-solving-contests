function countNumberProperties(numbers:number[]):{even:number, negative:number, odd:number, positive:number} {
    let positive:number = 0;
    let negative:number = 0;
    let even:number = 0;
    let odd:number = 0;
  for(const num of numbers){
    if(num>0){
        positive ++;
    }
    if(num < 0){
        negative ++;
    }
    if(num % 2 === 0){
        even ++;
    }
    if(num !== 0 && num % 2 !== 0){
        odd ++;
    }
}
  return{even, negative, odd, positive};
}