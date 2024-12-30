function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@$%^#&*()~-_";

    let allowedChars = "";
    let password = "";

    if (includeLowercase) allowedChars += lowerChars;
    if (includeUppercase) allowedChars += upperChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    if (allowedChars.length === 0) {
        return "Please select at least one option!";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

function pwd() {
    const passwordLength = 10;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    const password = generatePassword(
        passwordLength,
        includeLowercase,
        includeUppercase,
        includeNumbers,
        includeSymbols
    );

    document.getElementById("text").value = password;
}

function copyPassword() {
    const passwordField = document.getElementById("text");
    if (passwordField.value === "") {
        alert("Nothing to copy! Generate a password first.");
        return;
    }
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(passwordField.value)
        .then(() => alert("Password copied to clipboard!"))
        .catch(() => alert("Failed to copy!"));
}
