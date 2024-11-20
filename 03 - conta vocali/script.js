/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'jAvAscript';


// Dichiara la funzione qui.
function vowelCount (string){
  let count=0;
  const vowel = ["a","e","i","o","u"];
  for (let i=0; i<string.length; i++){
    for (let j=0; j<vowel.length; j++){
      if(string.at(i).toLowerCase() === vowel[j]){
        count++;
      }
    }
  }
  return count;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(vowelCount(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)