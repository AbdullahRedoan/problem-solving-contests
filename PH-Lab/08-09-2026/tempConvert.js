function convertTemperature(value, unit){
    if( typeof value !== "number"){
        return;
    }
    
    let temperature;

    if( unit === "C"){
        temperature = (value * 9/5) + 32;
    }else{
        temperature = (value - 32) * 5/9
    }

    const result =Math.round(temperature * 100) / 100;
    return result;
}

console.log(convertTemperature(98.4, "F"));