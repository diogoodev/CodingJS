//nearHundred
//Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.

//Examples

//nearHundred(93) → true
//nearHundred(90) → true
//nearHundred(89) → false
//

function nearHundred(n) {
  let rangeCem = n >= 90 && n <= 110
  let rangeDuz = n >= 190 && n <= 210
  return rangeCem || rangeDuz
}
