function classifyPassword(password) {
   const hasMinLength = password.length >= 8
   const hasMinLengthof6 = password.length >= 6
   const hasUppercase = /[A-Z]/.test(password)
   const hasLowercase = /[a-z]/.test(password)
   const hasDigit = /\d/.test(password)
   const hasSpecial = /[!@#$%^&*]/.test(password)

    const results = [hasUppercase, hasLowercase, hasDigit, hasSpecial];

    const trueValues = results.filter(Boolean)
    const falseValues = results.filter(value => !value)

    if(hasMinLength && trueValues.length === 4){
        return("Strong");
    }else if(hasMinLengthof6 && trueValues.length >= 2){
        return("Medium")
    }else{
        return("Weak")
    }
}

console.log(classifyPassword("Passwo"));