// - Pari o dispari 

//     - Scelta numero pari o dispaari
 //        - Dichiarare la funzione "inputPrompt"           
function inputPrompt(x, y){
    let text = "";
    const lowerCaseX = x.toLocaleLowerCase();
    const lowerCaseY = y.toLocaleLowerCase();
    do {
        text = prompt('Inserisci pari o dispari.Puoi inserire SOLO il valore "pari" o "dispari"').toLocaleLowerCase();
        // console.log(text, x, y)
    }
    while(text != lowerCaseX && text != lowerCaseY );
    return text;
}
console.log(inputPrompt("pari", "dispari"))
//         - Dichiarare la variabile "choisceEvenOodd"
const userChoice = inputPrompt("pari", "dispari");
console.log("userChoice", userChoice);
//         - Dichiarare la variabile "isEven"
let isEven;
if (userChoice === "pari"){
    isEven = true;
} else {
    isEven = false;
}
console.log("isEvene", isEven);
//     - Inserimento un numero da 1 a 5
//         - Dichiarare la variabile "numberUser"
//         - Assegnare il valore trammite prompt
//     - Generare un numero random 
//         - Creare la variabile "min" con il valore minimo
//         - Creare la variabile "max" con il valore massimo
//         - Creare la funzione "numberRandomPc" che crea il numero random tra i valori min max   
//     - Stabilire il vincitore 
//         - Creamo la funzione "sum" e passiamo come i dati di ingresso il "numberUser" e il valore che ritorna da funzione "numberRandomPc"
//         - Stabilire se dalla funzione "somma" ci torna il numero pari a dispari
//             - Creare funzione "sumIsEven"
//         - Creare operatore logico per stabilire il vincitore 
//         SE (choiceIsEven === sumIsEven){
//             alert("Ha vinto utent" )
//         } else {
//             alert("Ha vinto PC")
//         }
