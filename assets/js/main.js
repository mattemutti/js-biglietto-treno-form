
// dichiarazioni variabili degli input di html

let el_nameUser = document.getElementById("name"); // Dichiarazione della variabile nome (prende l'id dell'input nome)
let el_kmUser = document.getElementById("km"); // Dichiarazione della variabile kilometri (prende l'id dell'input kilometri)
let el_ageUser = document.getElementById("age"); // Dichiarazione della variabile età (prende l'id dell'input degli anni)
let nameUser;
let kmUser;
let ageUser;
const btn_generate = document.getElementById("btn_generate"); // dichiarazione del id bottone di html
const priceKm = 0.21;
const discountMinor = 0.20;
const discountSenior = 0.40;


// quando clicchi il bottone "Genera" devi leggere i dati e fare le operazioni.

btn_generate.addEventListener('click', function(){ //click del bottone Genera
	
	nameUser = el_nameUser.value				// legge il valore inserito dall'utente nella casella di input
	kmUser = Number(el_kmUser.value);			// legge il valore inserito dall'utente nella casella di input e lo trasforma in numero
	ageUser = Number(el_ageUser.value);		// legge il valore inserito dall'utente nella casella di input e lo trasforma in numero

	let tiketPrice = kmUser * priceKm;
	
	if (ageUser < 18) {

		const priceDiscountMinor = tiketPrice * discountMinor;
		const priceTiketMinor = tiketPrice - priceDiscountMinor;

		document.getElementById("offert").innerHTML = "Sconto Minorenne 20%"; // Inserisco l'offerta in html
		
		document.getElementById("price_tiket").innerHTML = priceTiketMinor.toFixed(2) + ` \u20AC`; // Inserisco il prezzonel htlm arrotondato a 2 cifre decimali

 	} else if (ageUser > 65) {

		const priceDiscountSenior = tiketPrice * discountSenior;
		const priceTiketSenior = tiketPrice - priceDiscountSenior;

		document.getElementById("offert").innerHTML = "Sconto Grandi 40%"; // Inserisco l'offerta in html

		document.getElementById("price_tiket").innerHTML = priceTiketSenior.toFixed(2) + `\u20AC`; // Inserisco il prezzonel htlm arrotondato a 2 cifre decimali

	} else {

		document.getElementById("offert").innerHTML = "Prezzo Standard"; // Inserisco l'offerta in html
		
		document.getElementById("price_tiket").innerHTML = tiketPrice.toFixed(2) + `\u20AC`; // Inserisco il prezzonel htlm arrotondato a 2 cifre decimali

	}

	document.getElementById("name_tiket").innerHTML = nameUser; // Inserisco il nome del passeggero nell'aposito campo del biglietto
	document.getElementById("train_carriage").innerHTML = Math.round(Math.random() * 10); // Inserisco il numero randomico della carrozza
	document.getElementById("cp_code").innerHTML = Math.round(Math.random() * 100000); // Inserisco il numero randomico di codice CP di 5 cifre
	
})

	
// } )
