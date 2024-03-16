// //TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"
// xyz functions
function getMax(x, y, z){
    let max = 0;
    if (x > y && x > z) {
        max = x;
    }
    else if (y > x && y > z) {
        max = y;
    }
    else if (z > x && z > y) {
        max = z;
    }
    
    return max;
}
console.log(getMax(4, 5, 6))

function getMin(x, y, z) {
    let min = 0;
    if (x < y && x < z) {
        min = x;
    }
    else if (y < x && y < z) {
        min = y;
    }
    else if (z < x && z < y) {
        min = z;
    }

    return min;
}
console.log(getMin(4, 5, 6));

function getMean(x, y, z) {
    let mean = (x + y + z) / 3;

    return mean;
}
console.log(getMean(4, 5, 6));

function compare(word1, word2) {
    if (word1 == word2) {
        return 0;
    }
    else if (word1.length > word2.length) {
        return 1;
    }
    else if (word1.length < word2.length) {
        return -1;
    }
}
console.log(compare("hello", "hola"));

function getCharPerLine(str, indent) {
    // output for 'indent = false' is good
    // output for 'indent = true' needs to be fixed, no indent visible

    if (indent == true) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] == ' ') {
                continue;
            }
            else {
                let char = "";
                for (let k = 0; k < i; k++) {
                    char += " ";
                }
                console.log(char + str[i]);
            }
        }
    }
    else {
        for (let j = 0; j < str.length; j++) {
            if (str[j] == ' ') {
                continue;
            }
            else {
                console.log(str[j]);
            }
        }
    }
}
getCharPerLine("Hello World!", false)
getCharPerLine("Hello World!", true)

function arrow(size) {
    let count = 0;
    while (count == 0) {
        let str = "";
        for (let j = 0; j < size; j++) {
            str += "*";
            console.log(str);
            if (str.length == size) {
                for (let i = 0; i < size; i++) {
                      str = str.replace("*", "");
                      console.log(str) 
                }
            }
        }
        count += 1;
    }
}

console.log(arrow(3));