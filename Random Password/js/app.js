const passWordField = document.getElementById("passwordDisplay")

// let passLowerCaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p"];
// let passUpperCaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P"];
// let passSymbol = ["!", "@","#","$","%","^","&","*","(",")","_","-","+","="];
// let passNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let passLowerCaseLetter = "abcdefghijklmnopqrstuvwxyz";
let passUpperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passSymbol = "!@#$%^&*()_-+=";
let passNumber = "1234567890";

let allChar = passLowerCaseLetter + passUpperCaseLetter + passSymbol + passNumber;

let passLength = 12;

function generatePassword() {
    let password = "";

    password+=passLowerCaseLetter[Math.floor(Math.random() * passLowerCaseLetter.length)];
    password+=passUpperCaseLetter[Math.floor(Math.random() * passUpperCaseLetter.length)];
    password+=passSymbol[Math.floor(Math.random() * passSymbol.length)];
    password+=passNumber[Math.floor(Math.random() * passNumber.length)];

    while(password.length < passLength) {
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }

    passWordField.value = password; 
}

function copyPass() {
    if(passWordField.value.length == 0) {
        alert("FIrst Generate a Password")
    } else {
         passWordField.select();
        document.execCommand('copy')
        alert(`Text Copied - "${passWordField.value}"`)
    }
       
    }
generatePassword()