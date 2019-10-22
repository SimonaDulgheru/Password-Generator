



const charPass = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&'()*+,-./:;<=>?@[ \ ]^_{|}~`;

let minChar = 8;
let maxChar = 128;
let userInput;
let strLength;

const generateBtn = document.querySelector(`#generate`);
const textArea = document.querySelector(`#gen-password`);
const copyBtn = document.querySelector(`#copy`);

generateBtn.addEventListener(`click`, function () {
    
    userInput = prompt(`Please select your desired password length. Type a number between 8 and 128. Password will include numbers, letters and special characters.`);
   
    while (Number(userInput) < minChar || Number(userInput) > maxChar) {
        userInput = prompt(`Please select your password. Your password needs to be between 8 and 128 characters`);
    }
    return randomPassword();
   
});


function randomPassword() {

    let strLength = Number(userInput);
    let pass = ``;
    for (let x = 0; x < strLength; x++) {
        let i = Math.floor(Math.random() * charPass.length);
        pass += charPass.charAt(i);
    }
    document.querySelector("#gen-password").innerHTML = (pass);
};
    // randomPass();


    copyBtn.addEventListener(`click`,function(){
        let copyPass = document.querySelector(`#gen-password`);
        copyPass.select();
        document.execCommand(`copy`);
        alert(`Copied to clipboard`);

    });





