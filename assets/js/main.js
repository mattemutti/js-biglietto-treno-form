
// dichiarazioni variabili degli input di html

let nameUser = document.getElementById("name"); // Dichiarazione della variabile nome (prende l'id dell'input nome)
let kmUser = document.getElementById("km"); // Dichiarazione della variabile kilometri (prende l'id dell'input kilometri)
let ageUser = document.getElementById("age"); // Dichiarazione della variabile età (prende l'id dell'input degli anni)

const btn_generate = document.getElementById("btn_generate"); // dichiarazione del id bottone di html

const priceKm = 0.21;
// console.log(typeof priceKm);
const discountMinor = 0.20;
const discountSenior = 0.40;


// quando clicchi il bottone "Genera" devi leggere i dati e fare le operazioni.


btn_generate.addEventListener('click', function(){ //click del bottone Genera
	//console.log(nameUser.value);
	nameUser = nameUser.value
	kmUser = Number(kmUser.value);
	ageUser = Number(ageUser.value);

	let tiketPrice = kmUser * priceKm;
	//console.log(typeof kmUser);
	//console.log(typeof ageUser);
	//console.log(tiketPrice);
	//console.log(nameUser);
	
	if (ageUser < 18) {

		const priceDiscountMinor = tiketPrice * discountMinor;
		const priceTiketMinor = tiketPrice - priceDiscountMinor;
		//console.log(priceTiketMinor);

	document.getElementById("offert").innerHTML = "Sconto Minorenne 20%"; // Inserisco l'offerta in html
		
	document.getElementById("price_tiket").innerHTML = priceTiketMinor.toFixed(2) + ` \u20AC`; // Inserisco il numero randomico di codice CP


 	} else if (ageUser > 65) {

		const priceDiscountSenior = tiketPrice * discountSenior;
		const priceTiketSenior = tiketPrice - priceDiscountSenior;
		//console.log(priceTiketSenior);

	document.getElementById("offert").innerHTML = "Sconto Grandi 40%"; // Inserisco l'offerta in html

	document.getElementById("price_tiket").innerHTML = priceTiketSenior.toFixed(2) + `\u20AC`; // Inserisco il numero randomico di codice CP



	} else {
		//console.log(tiketPrice);

		document.getElementById("offert").innerHTML = "Prezzo Standard"; // Inserisco l'offerta in html
		
		document.getElementById("price_tiket").innerHTML = tiketPrice.toFixed(2) + `\u20AC`; // Inserisco il numero randomico di codice CP


	}


	document.getElementById("name_tiket").innerHTML = nameUser; // Inserisco il nome del passeggero nell'aposito campo del biglietto
	document.getElementById("train_carriage").innerHTML = Math.round(Math.random() * 10); // Inserisco il numero randomico della carrozza
	document.getElementById("cp_code").innerHTML = Math.round(Math.random() * 100000); // Inserisco il numero randomico di codice CP
	
	

})

	
// } )
