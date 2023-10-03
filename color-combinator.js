/******************
 * YOUR CODE HERE *
 ******************/
function colorCombinator(color1, color2){
  if((color1 === 'blue' && color2 === 'red') || (color1 === 'red' && color2 === 'blue')){
    return 'purple'
  } else if((color1 === 'blue' && color2 === 'yellow') || (color1 === 'yellow' && color2 === 'blue')){
    return 'green'
  } else if((color1 === 'yellow' && color2 === 'red') || (color1 === 'red' && color2 === 'yellow')){
    return 'orange'
  } else {
    return 'error'
  }
}


// Our setup code here. Don't touch!
if(typeof colorCombinator === 'undefined') {
  colorCombinator = undefined;
}

module.exports = colorCombinator;
