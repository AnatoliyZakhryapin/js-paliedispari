


function askText(){
    let text = prompt("Inserisci la parola da controllare");
    while(text.length <= 1){
        alert("La parole deve essere piu lunga di 1 simbolo")
        text = prompt("Inserisci la parola da controllare correttamente");
    }
    return text;
}

function isPalindrome(textToControll){
    const text = textToControll;
    let counter = 0;
    const halfLengthText =  Math.ceil(text.length/2)
    console.log("halfLengthText", halfLengthText);
    for (let i = 0; i < halfLengthText; i++){
        const char = text.charAt(i);
        const indexLastChar = text.length - i - 1;
        const charEnd = text.charAt(indexLastChar);
        console.log(i, char, indexLastChar, charEnd)
        if (char === charEnd){
            counter++;
            console.log("UGUALE")
            console.log("COUNTER", counter)
        }
    }
    console.log("COUNTER FINALE", counter)
 
    if (halfLengthText === counter){
        return true;
    } 
}

const text = askText();

if (isPalindrome(text) == true){
    alert("La parole è palindrome")
} else {
    alert("La parole NON è palindrome")
}