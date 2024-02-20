

// const distance = Number(); // km trasfirmati in numero
// const age = Number(); // anni trasformati in numero
// let priceDiscount20;
// let priceDiscount40;
// let discountMinor;
// let discountSenior;

// // - calcolare il costo del biglietto in base ai km di percorrenza

// let price = Number((distance * 0.21)); // calcolo costo biglietto in base ai km
// console.log(typeof price, price);


// // - controllare se il prezzo deve essere soggetto a scontistica in base all'età dell'utente


// if (age < 18) {
// 	priceDiscount20 = (price * 20 / 100);
// 	discountMinor = (price - priceDiscount20);
// 	console.log(discountMinor);
// 	\\alert(`Il prezzo del tuo biglietto con lo sconto minorenni del 20% è: ` + discountMinor.toFixed(2) + " \u20AC"); // 2 cifre dopo la virgola e simbolo euro

// } else if (age > 64) {
// 	priceDiscount40 = (price * 40 / 100);
// 	discountSenior = (price - priceDiscount40);
// 	console.log(discountSenior);
// 	\\alert(`Il prezzo del tuo biglietto con lo sconto over 65 del 40% è: ` + discountSenior.toFixed(2) + " \u20AC"); // 2 cifre dopo la virgola e simbolo euro

// } else {
// 	console.log(price);
// 	\\alert(`Il prezzo del tuo biglietto è: ` + price.toFixed(2) + " \u20AC"); // 2 cifre dopo la virgola
// }



// *******************************************



// dichiarazioni variabili degli input di html

const nameUser = document.getElementById("name"); // Dichiarazione della variabile nome (prende l'id dell'input nome)
let kmUser = document.getElementById("km"); // Dichiarazione della variabile kilometri (prende l'id dell'input kilometri)
let ageUser = document.getElementById("age"); // Dichiarazione della variabile età (prende l'id dell'input degli anni)

const btn_generate = document.getElementById("btn_generate"); // dichiarazione del id bottone di html

const priceKm = 0.21;
// console.log(typeof priceKm);
const discountMinor = 0.20;
const discountSenior = 0.40;


// quando clicchi il bottone "Genera" devi leggere i dati e fare le operazioni.


btn_generate.addEventListener('click', function(){ //click del bottone Genera
	console.log(nameUser.value);
	kmUser = Number(kmUser.value);
	ageUser = Number(ageUser.value);

	let tiketPrice = kmUser * priceKm;
	console.log(typeof kmUser);
	console.log(typeof ageUser);
	console.log(tiketPrice);
	
	if (ageUser < 18) {

		const priceDiscountMinor = tiketPrice * discountMinor;
		console.log(typeof priceDiscountMinor);
		const priceTiketMinor = tiketPrice - priceDiscountMinor;
		console.log(priceTiketMinor);

 	} else if (ageUser > 65) {

		const priceDiscountSenior = tiketPrice * discountSenior;
		const priceTiketSenior = tiketPrice - priceDiscountSenior;
		console.log(priceTiketSenior);

	}

})


// btn_generate.addEventListener('click', function () {
// 	console.log('ho cliccato il bottone');
	
// } )
