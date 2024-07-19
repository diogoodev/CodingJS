//  missingChar
// Given a non-empty string and an int n, return a new string where the char at index n has been removed.
//  The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).

// Examples

// missingChar('kitten', 1) → ktten
// missingChar('kitten', 0) → itten
// missingChar('kitten', 4) → kittn

function missingChar(str, n){
  const chars = str.split('')
  chars.splice(n,1)
  return chars.join('')
}

missingChar("kitten", 2)

function missingChar2(str, n){
  let char = ''
  for (let i = 0; i < str.length; i++ ){
    if (i !== n) {
      char = char + str[i]
    }
    
  }
  return char
}

missingChar2("kitten", 1)
