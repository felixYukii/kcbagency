// Decrypts the string by shifting each character back by -1 in ASCII value
function decryptString(encrypted) {
    let decrypted = "";
    for (let i = 0; i < encrypted.length; i++) {
        decrypted += String.fromCharCode(encrypted.charCodeAt(i) - 1);
    }
    return decrypted;
}

// Encrypted values
const encryptedPhone = "74:2!4922";
const encryptedEmail = "ldcjow1347Ahnbjm/dpn";

// Display decrypted values in HTML
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("phone").textContent = decryptString(encryptedPhone);
    document.getElementById("email").textContent = decryptString(encryptedEmail);
});
