const password = document.getElementById('password');
const length = 12;

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-="

const allChars = uppercase + lowercase + numbers + symbols;

function createPassword() {
    let pwd = "";
    pwd += uppercase[Math.floor(Math.random() * uppercase.length)];
    pwd += lowercase[Math.floor(Math.random() * lowercase.length)];
    pwd += numbers[Math.floor(Math.random() * numbers.length)];
    pwd += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > pwd.length) {
        pwd += allChars[Math.floor(Math.random() * allChars.length)];
    }
    password.value = pwd;
}

function copyPassword() {
    navigator.clipboard.writeText(password.value).then(() => {
        alert("Copied!");
    });
}