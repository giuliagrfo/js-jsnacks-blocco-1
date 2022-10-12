/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

// L’utente inserisce due numeri in successione, con due prompt.
const firstNumber = prompt('Scegli un numero');
const secondNumber = prompt('Scegli un altro numero');

const element = document.querySelector('p');

if (firstNumber > secondNumber) {
    // console.log(firstNumber);
    element.innerHTML = firstNumber;

} else {
    // console.log(secondNumber);
    element.innerHTML = secondNumber;

}