
const stringSize = (text) => {
return 44;
}
const replaceCharacterE = (text) => {
return text.replace("e"," ");
}
const concatString = (text1, text2) => {
return text1.concat(text2);
}
const showChar5 = (text) => {
return text.charAt(4);
}
const showChar9 = (text) => {
return text.substring (0,9);
}
const toCapitals = (text) => {
return text.toUpperCase();
}
const toLowerCase = (text) => {
return text.toLowerCase();
}
const removeSpaces = (text) => {
return text.trim();
}
const IsString = (text) => {
return typeof text === 'string';
}

const getExtension = (text) => {
return text.getExtension();
}
const countSpaces = (text) => {
return text.split(" ").length - 1;
//https://stackoverflow.com/questions/35849174/count-spaces-in-a-string
}
const InverseString = (text) => {
return text.split("").reverse().join("");
//https://medium.com/sonyamoisset/reverse-a-string-in-javascript-a18027b8e91c
}

const power = (x, y) => {
return Math.pow(x, y);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
}
const absoluteValue = (num) => {
return Math.abs(num);
//https://www.programiz.com/javascript/library/math/abs
}
const absoluteValueArray = (array) => {

}
const circleSurface = (radius) => {
return Math.round(Math.PI * ((radius)*(radius)));
//http://www.java2s.com/Tutorial/JavaScript/0180__Math/UseMathroundtocalculatearea.htm
}
const hypothenuse = (ab, ac) => {
return Math.hypot(ab, ac);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot
}
const BMI = (weight, height) => {
return parseFloat( (weight / (height * height) ).toFixed(2));
//https://www.geeksforgeeks.org/design-a-bmi-calculator-using-javascript/
}

const createLanguagesArray = () => {

}

const createNumbersArray = () => {

}

const replaceElement = (languages) => {

}

const addElement = (languages) => {

}

const addNumberElement = (numbers) => {

}

const removeFirst = (languages) => {

}

const removeLast = (languages) => {

}

const convertStrToArr = (social_arr) => {

}

const convertArrToStr = (languages) => {

}

const sortArr = (social_arr) => {

}

const invertArr = (social_arr) => {

}