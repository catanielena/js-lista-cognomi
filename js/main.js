// 1. chiedi all’utente il cognome
var lastName = prompt('Inserisci il tuo cognome');
console.log(lastName);

var lastName = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
console.log(lastName);
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var surnamesList = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
surnamesList.push(lastName);
// 3. stampa la lista ordinata alfabeticamente
var surnamesListSorted = surnamesList.sort();
console.log(surnamesListSorted);
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
var i = 0;
var indexPosition = -1;
while (i<surnamesListSorted.length && indexPosition == -1) {
  if (surnamesListSorted[i] == lastName) {
    indexPosition = i;
  }
  i++;
}
console.log(indexPosition + '-' + lastName);



function ulList() {

    // Get list once and store reference
    var list = document.getElementById("surnanes-list");
    // Declare variables 
    var li = 0;
    // for loop should run through spelling list array and create list items 
    for (var i = 0; i < surnamesListSorted.length; i++ ) { 
      // Create new LI
      li = document.createElement("li");
      // Append the word
      li.appendChild(document.createTextNode(surnamesListSorted[i]));
      // Add to list
      list.appendChild(li);
    }
}

document.getElementById('surnanes-list').appendChild(ulList());