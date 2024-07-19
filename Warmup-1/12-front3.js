// front3
// Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.

// Examples

// front3('Java') → JavJavJav
// front3('Chocolate') → ChoChoCho
// front3('abc') → abcabcabc
// 

function front3(str){
  let word = ''
  for (let i = 0; i < str.length; i++){
    if( i < 3){
      word = word + str[i]
    }
  }
  return word.repeat(3)
}
front3('Chocolate')

//solution 2

function front3t(str){
  let word = str.slice(0,3)
  return word.repeat(3)
}

front3t('Chocolate')
