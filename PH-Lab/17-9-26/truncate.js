function truncateString(str, maxLength) {
 if(maxLength <= 3) return "...";
 if(str.length <= maxLength) return str;
 if(str.length > maxLength){
    return str.slice(0, maxLength-3) + "...";
 } 
}

console.log(truncateString("Hello world, this is a long string", 1));