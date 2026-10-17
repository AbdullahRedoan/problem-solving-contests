function isPalindrome(str) {
  const initialString = str.toLowerCase().split(/\W+/).filter(Boolean).join("")
    const reversedString = str.toLowerCase().split(/\W+/).filter(Boolean).map(word => word.split("").reverse().join("")).reverse().join("")

    console.log(initialString, reversedString);
  if(reversedString === initialString){
    return true;
  }else{
    return false;
  }
}

console.log(isPalindrome("A man, a plan, a canal: Panama"
));