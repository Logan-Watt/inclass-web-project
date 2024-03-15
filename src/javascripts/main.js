//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

// functions in java
const displayRandomBox = function(){
    let r = Math.random()
    if(r < .5) {
        document.write('<div class="red box"></div>')
    }else {
        document.write('<div class="blue box"></div>')
    }
}

function displayNBoxesUsingFor(n){
    for(let i = 0; i < n; i++) {
        displayRandomBox()
    }
}

function displayNBoxesUsingWhile(n){
    let j = 0
    while(j < n){
        displayRandomBox()
        j++
    }
}

function displayNBoxesUsingDoWhile(n){
    let k = 0
    do{
        displayRandomBox()
        k++
    }while(k < n)
}

displayNBoxesUsingFor(15)
displayNBoxesUsingWhile(12)
displayNBoxesUsingDoWhile(10)

const square = function(x){
    return x * x
}
