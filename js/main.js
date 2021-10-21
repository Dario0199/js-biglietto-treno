//chiedi i chilometri da percorrere
let kilometres = prompt('inserisci i chilometri che vuoi percorrere');


//chiedi età del passeggero
let age = prompt('inserisci la tua età')


//prezzo biglietto
let price = kilometres * 0.21;
console.log(price)


//prezzo totale
let totalPrice;


if(age < 18){
    totalPrice = price - ((price / 100)* 20);
} else if (age > 65){
    totalPrice = price - ((price / 100)* 40);
} else {
    totalPrice = price;
}

document.getElementById('ticketPrice').innerHTML = 'Il prezzo del tuo biglietto è: ' + totalPrice.toFixed(2) + '€';