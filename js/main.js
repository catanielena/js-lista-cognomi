// 1. chiedi all’utente il cognome
var lastName = prompt('Inserisci il tuo cognome');
console.log(lastName);

var lastNameCap = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
console.log(lastNameCap);
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var surnamesList = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
surnamesList.push(lastNameCap);
// 3. stampa la lista ordinata alfabeticamente
var surnamesListSorted = surnamesList.sort();
console.log(surnamesListSorted);
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
for ( var i=0; i<surnamesListSorted.length; i++ ) {
    console.log((i+1) + '-' + surnamesListSorted[i]);
}