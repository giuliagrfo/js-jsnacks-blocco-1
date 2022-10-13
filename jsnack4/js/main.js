/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa */



// array nomi degli invitati

const invitati = [
    'Giulia',
    'Marco',
    'Alice',
    'Luca'
]

// chiedi all’utente il suo nome

const username = prompt('Come ti chiami?');


// comunicagli se può partecipare o no alla festa
let i = 0;
let invitato = 0;

while ( i < invitati.length ) {
    
    const userAccess = invitati[i];
    
    if (username === userAccess) {
        invitato = true;
    }
    
    i++;
}

if (invitato) {
    console.log('Sei invitato');
}   else {
    console.log('Non sei invitato');
}
