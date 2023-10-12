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
        