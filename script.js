function sommaDispari(){                                         //funzione che sommerà i numeri che si trovano nella posizione dispari
  var numberList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];            //array contente numeri
  var risultato = 0;                                             //l'identificatore "risultato" lo lasciamo vuoto per l'operazione di assegnazione

  for (var i=0; i<numberList.length; i++){                       //inizio ciclo dell'array

    if(i%2 != 0){                                                //condizione: se la posizione è dispari..
      risultato += numberList[i];                                //l'identificatore viene sommato al numero in posizione dispari
    }
  }

  return risultato;                                              //L'istruzione "return" termina l'esecuzione della funzione e specifica un valore da restituire al chiamante della funzione "sommaDispari()".
}

console.log(sommaDispari())
document.getElementById("lista").innerHTML = sommaDispari();
