const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!

let color1 = getInput(1)
let color2 = getInput(2)
// Is there 2 colors?
if(color2 !== undefined) {
    if(isValidPrimary(color1.toLowerCase()) && isValidPrimary(color2.toLowerCase()) && color1 !== color2){
        console.log(colorCombinator(color1, color2))
    } else {
        console.log('Colors must be two different valid primary colors')
    }
}
else if(color1 !== undefined){
    if(isValidSecondary(color1.toLowerCase())){
        console.log(colorDeconstructor(color1))
    } else {
        console.log('Color must be a valid secondary color')      
    } 
     
}else {
    console.log('We need at least one valid color')  
}
