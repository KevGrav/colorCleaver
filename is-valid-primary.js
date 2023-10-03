/******************
 * YOUR CODE HERE *
 ******************/
function isValidPrimary(color1, color2){
  if((color1 === 'blue' || color2 === 'blue') || (color1 === 'red' || color2 === 'red') || (color1 === 'yellow' || color2 === 'yellow')){
    return true
    } else {
    return false
  }  
}

// Our setup code here. Don't touch!
if(typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;
