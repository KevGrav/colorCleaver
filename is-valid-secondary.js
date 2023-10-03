/******************
 * YOUR CODE HERE *
 ******************/
function isValidSecondary(color1){
  if(color1 === 'purple' || color1 === 'orange' || color1 === 'green'){
    return true
  } else {
    return false
  }  
}


// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
