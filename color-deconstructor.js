/******************
 * YOUR CODE HERE *
 ******************/
function colorDeconstructor(color1){
  if(color1 === 'purple'){
    console.log('red and blue')
  } else if(color1 === 'orange'){
    console.log('red and yellow')
  } else if(color1 === 'green'){
    console.log('blue and yellow')
  } else {
    console.log('error')
  }
}


// Our setup code here. Don't touch!
if(typeof colorDeconstructor === 'undefined') {
  colorDeconstructor = undefined;
}


module.exports = colorDeconstructor;
