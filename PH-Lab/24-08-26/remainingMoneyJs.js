function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {
const leftAfterCake = totalMoney - cakeCost;
if(leftAfterCake < 0){
    return(leftAfterCake);
}else{
    const leftAfterDonuts = leftAfterCake % donutCost;
    
    return leftAfterDonuts;
}
}

console.log(calculateRemainingMoney(100, 23, 34));