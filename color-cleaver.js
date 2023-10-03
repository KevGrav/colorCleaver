const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!

let color1 = getInput(1)
let color2 = getInput(2)
// Is there 2 colors?
if(color2.Length >0) {
    if(isValidPrimary){
        return(colorCombinator(color1, color2))
      } else {
        if(color1.length >0) {
            if(isValidSecondary){
                return(colorDeconstructor(color1))
        } else {
            console.log('We need at least one color')        
        } 
      }
    }
 }