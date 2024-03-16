// //TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
// xyz functions
function getMax(x, y, z){
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

function getMin(x, y, z) {
    if (x < y && x < z) {
        let min = x
    }
    else if (y < x && y < z) {
        let min = y
    }
    else if (z < x && z < y) {
        let min = z
    }

    return min;
}

function getMean(x, y, z) {
    let mean = (x + y + z) / 3

    return mean;
}

function compare(word1, word2) {
    if (word1 == word2) {
        return 0;
    }
    else if (word1 > word2) {
        return 1;
    }
    else if (word1 < word2) {
        return -1;
    }
}

function getCharPerLine(str, indent) {
    // output for indent = false is good, except outputs "undefined"
    // output for indent = true needs to be fixed, no indent visible

    if (indent == 'true') {
        for (let i = 0; i < str.length; i++) {
            if (str[i] == ' ') {
                continue
            }
            else {
                for (let k = 0; k != i; k++) {
                    console.log(' ')
                }
                console.log(str[i])
            }
        }
    }
    else {
        for (let j = 0; j < str.length; j++) {
            if (str[j] == ' ') {
                continue
            }
            else {
                console.log(str[j])
            }
        }
    }
}

console.log(getCharPerLine("Hello World!", false))

console.log(getCharPerLine("Hello World!", true))
function arrow(size) {
    // Yet to code

}
