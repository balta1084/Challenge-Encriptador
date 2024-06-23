function encryptMessage() {
    let inputMessage = document.getElementById("inputMessage").value;
    let outputMessage = document.getElementById("outputMessage");
    
    let encryptedMessage = caesarCipher(inputMessage, 3); // Desplaza 3 posiciones para encriptar
    outputMessage.value = encryptedMessage;
}

function decryptMessage() {
    let inputMessage = document.getElementById("inputMessage").value;
    let outputMessage = document.getElementById("outputMessage");

    let decryptedMessage = caesarCipher(inputMessage, -3); // Desplaza -3 posiciones para desencriptar
    outputMessage.value = decryptedMessage;
}

function caesarCipher(str, shift) {
    return str
        .split('')
        .map(char => {
            if (char.match(/[a-z]/)) {
                let charCode = char.charCodeAt(0);
                let newCharCode = ((charCode - 97 + shift + 26) % 26) + 97;
                return String.fromCharCode(newCharCode);
            } else {
                return char; // Ignorar cualquier carácter no permitido
            }
        })
        .join('');
}

function copyToClipboard() {
    let outputMessage = document.getElementById("outputMessage");
    outputMessage.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}
