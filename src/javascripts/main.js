//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

for(let i = 0; i < 10; i++) {
    let r = Math.random()
    if(r < .5) {
        document.write('<div class="red box"></div>')
    }
    else {
        document.write('<div class="blue box"></div>')
    }
}