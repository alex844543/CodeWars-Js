var runLengthEncoding = function(str) {
if (str.length === 0) return [];


const result = [];
let currentChar = str[0];
let count = 1;


for (let i = 1; i < str.length; i++) {
if (str[i] === currentChar) {
count++;
} else {
result.push([count, currentChar]);
currentChar = str[i];
count = 1;
}
}
result.push([count, currentChar]);


return result;
}
