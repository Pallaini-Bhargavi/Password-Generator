function generatePassword(length,includeLowercase,includeUppercase,
    includeNumbers,includeSymbols){
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@$%^#&*()~-_";

let allowedChars = "";
let password = "";

allowedChars += includeLowercase ? lowerChars : "";
allowedChars += includeUppercase ? upperChars : "";
allowedChars += includeNumbers ? numberChars : "";
allowedChars += includeSymbols ? symbolChars : "";

for(let i =0;i<length;i++){
const random1 = Math.floor(Math.random() * allowedChars.length);
password += allowedChars[random1];
}
return password;
}
function pwd(){
const passwordLength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;
const password = generatePassword(passwordLength,
            includeLowercase,
            includeUppercase,
            includeNumbers,
            includeSymbols);
document.getElementById("text").value = password;
}