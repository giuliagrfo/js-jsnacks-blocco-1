/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/


// L’utente inserisce due parole in successione, con due prompt.
const firstWord = prompt('Scegli una parola');
const secondWord = prompt('Scegli una seconda parola');

// Il software stampa prima la parola più corta, poi la parola più lunga

if (firstWord.length > secondWord.length) {
    console.log(firstWord);
} else if (secondWord.length > firstWord.length) {
    console.log(secondWord);
} else {
    console.log('Pari');
}