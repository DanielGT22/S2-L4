/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function area(l1, l2) {
  return l1 * l2;
}

console.log(area());

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    return n1 + n2;
  }
}
console.log(crazySum(10, 10));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(n1, n2 = 19) {
  if (n1 <= n2) {
    return n2 - n1;
  } else if (n1 > n2) {
    return (n1 - n2) * 3;
  }
}
console.log(crazyDiff(20));
/* ESERCIZIO 4

 Scrivi una funzione di nome "boundary" che accetta un numero intero n 
 come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  let bound = (n > 19 && n < 101) || n === 400 ? true : false;
  return bound;
}
console.log(boundary(42));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
/* da ripassare piu tardi 
function epify(miaStringa) {
  const s1 = toString(prompt("Che ne pensi di Epicode1?"));
  const epicode = "Epicode";
  if (s1.split(" ") === "/Epicode2/i") {
    return miaStringa;
  } else if (s1.split(" ") !== "/Epicode3/i") {
    return epicode + miaStringa;
  }
  miaStringa = s1;
}
console.log(epify());
*/
const epify = function (miaStringa) {
  if (miaStringa.startsWith("EPICODE")) {
    return miaStringa;
  } else {
    return "EPICODE " + miaStringa;
  }
};
console.log(epify("salve"));
console.log(epify("Hello"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come
  parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n1) {
  n1 = parseInt(prompt("Primo numero"));
  let result7 = n1 % 7;
  let result3 = n1 % 3;
  if (result7 === 0 || result3 === 0) {
    return "Dividible";
  } else if (result7 !== 0 || result3 !== 0) {
    return "Not Dividible";
  }
}
console.log(check3and7(20));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una 
 stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {
  let splitStr = str.split("");
  let reverseStr = splitStr.reverse();
  let joinStr = reverseStr.join("");
  return joinStr;
}
console.log(reverseString("spero che funziona"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro
  una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola
  contenuta nella stringa.
*/
function upperFirst(l1, l2, l3) {
  usS1 = l1.slice(0, 1).toUpperCase() + l1.slice(1);
  uss2 = l2.slice(0, 1).toUpperCase() + l2.slice(1);
  usS3 = l3.slice(0, 1).toUpperCase() + l3.slice(1);
  return usS1 + " " + uss2 + " " + usS3;
}
console.log(upperFirst("cosa", "sto", "sbagliando"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(parola1) {
  taglia1 = parola1.slice(1, -1);
  return taglia1;
}
console.log(cutString("salve"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un
  numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n1) {
  const arr = [];
  for (let i = 0; i < n1; i++) {
    arr.push(Math.floor(Math.random() * 11));
    return arr;
  }
}
console.log(giveMeRandom(1));
