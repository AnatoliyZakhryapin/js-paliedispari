# js-paliedispari 

- Palindroma
    - Creare la funzione askText
        - Richiedere la parola tramite prompt
        - Creare il ciclo While per controllare il dato di ingresso
            - Fare alert e chiedere di inserire nuovamente la parola finche non sara piu lunga di 1   
    - Creare la funzione "isPalindrome"
        - Creare la variabile "text" per recuperare il dato in igresso della funzione
        - Creare la variabile "counter" (conta quante volte troviamo stessa lettera nel ciclo)
        - Creare la variabile "halfLenghtText", importante di arrotondare il valore per eccesso;
        - Creare un ciclo che confronta prima e ultima lettera in progressione fino la meta dela parola(se il numero è dispari il valore centrale va confrontato con se stesso);
            - Creare operatore logico, se la prima e ultima lettera sono uguali - il counter cresce di 1.
        - Creare operatore logico:
            - SE (halfLengthText === counter){
                return true;
            } 
    - Creare una variabile "text"
        - Assegnare il valore di variabile tramite prompt    
    - Creare operatore logico
        SE (isOalindrome(text)){
            alert("La parole è palindrome")
        } 
        ALTRIMENTI{
            alert("La parole NON è palindrome")
        }

- Pari o dispari 

    - Scelta numero pari o dispaari
        - Dichiarare la funzione "inputPrompt"
        - Dichiarare la variabile "userChoice" e assegnare il return del inoutPrompt
        - Dichiarare la variabile "isEven"
            SE (choiceIsEven == "pari"){
                isEven = true;
            } else {
                isEven = false;
            }
    - Inserimento un numero da 1 a 5
        - Dichiarare la variabile "numberUser"
        - Assegnare il valore trammite prompt
    - Generare un numero random 
        - Creare la variabile "min" con il valore minimo
        - Creare la variabile "max" con il valore massimo
        - Creare la funzione "numberRandomPc" che crea il numero random tra i valori min max   
    - Stabilire il vincitore 
        - Creamo la funzione "sum" e passiamo come i dati di ingresso il "numberUser" e il valore che ritorna da funzione "numberRandomPc"
        - Stabilire se dalla funzione "somma" ci torna il numero pari a dispari
            - Creare funzione "sumIsEven"
        - Creare operatore logico per stabilire il vincitore 
        SE (choiceIsEven === sumIsEven){
            alert("Ha vinto utent" )
        } else {
            alert("Ha vinto PC")
        }
