/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.*/


// L’utente inserisce due parole in successione, con due prompt.
const firstWord = prompt('Scegli una parola');
const secondWord = prompt('Scegli una seconda parola');

const element = document.querySelector('p');
// Il software stampa prima la parola più corta, poi la parola più lunga

if (firstWord.length > secondWord.length) {
    // console.log(firstWord);
    element.innerHTML = firstWord;
} else if (secondWord.length > firstWord.length) {
    // console.log(secondWord);
    element.innerHTML = secondWord;
} else {
    // console.log('Pari');
    element.innerHTML = 'Pari';
}