//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

function getMax(x,y,z){

    prompt("What is the value for x?")
    prompt("What is the value for y?")
    prompt("What is the value for z?")

    if (x > y && x > z) {
        let max = x
    }
    else if (y > x && y > z) {
        let max = y
    }
    else if (z > x && z > y) {
        let max = z
    }
    
return max;
}