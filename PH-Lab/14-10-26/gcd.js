function gcd(a, b) {
//   const remainder = a % b;
   if (a === 0)
        return b;
    return gcd(b % a, a);
}

console.log(gcd(34,69));