function swapKeysAndValues(obj) {
    let result = {}
    for(const [key, value] of Object.entries(obj)){
        result[value] = key
    }
    return result
}

console.log(swapKeysAndValues( {"a":"t","b":"x"}));