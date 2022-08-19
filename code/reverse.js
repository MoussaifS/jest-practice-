

function reverse (text){
    let reversed;
    let lenght = text.length;
    for (let i = lenght; i >= 0; i--) {
        reversed += text[i];
    }
    return reversed;
}

module.exports = reverse;