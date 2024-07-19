//  frontBack
// Given a string, return a new string where the first and last chars have been exchanged.

// Examples

// frontBack('code') → eodc
// frontBack('a') → a
// frontBack('ab') → ba
//

// solution 1
function frontBack(str){
  let word = ""
    for (let i = 1; i < str.length - 1; i++){
      word = word + str[i] 
    }
    if(str.length > 1){ 
      return str[str.length - 1] + word + str[0]
    }else{
      return str
    }
  }

frontBack('ab')


