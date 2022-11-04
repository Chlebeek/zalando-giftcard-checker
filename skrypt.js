// Skrypt został stworzony w celach edukacyjnych, używasz na własną odpowiedzialność.

//Sprawdzanie kodu odbywa się poprzez API, więc nie ma znaczenia czy wyświetla wam się alert np. że kod został użyty czy nie przy odpowiednio niskim opóźnieniu 
//wystarczy wejść w zakładę network i sprawdzić, że zapytania się ładnie wykonują


//Wszystkie znaki używane do wygenerowania kodu.
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
//Zapisywanie użytego kodu, żeby omijać sprawdzanie tego samego kodu kilka razy
const alreadyUsed = [];


//Generowanie kodu
function genCode() {
    let result = (Math.floor(Math.random() * 3) + 1) + "Z";
    const charsetLen = characters.length;
    for (let i = 0; i < 14; i++) {
        result += characters.charAt(Math.floor(Math.random() * charsetLen));
    }

    let finalResult = '';
	//Dodanie '-' co 4 litery, chyba nie wymagane
    for (let i = 0; i < result.length; i ++){
        if (i % 4 == 0 && i != 0){
            finalResult += "-";
        }
        finalResult += result.charAt(i);
    }
    
    
    return finalResult;
}

function loop(delay) {
    setTimeout(function() {
        let code = genCode();
        console.log("Checking " + code + ".");
		//Wpisanie kodu w odpowiednie miejsce
        document.getElementsByClassName("cDRR43 WOeOAB _0Qm8W1 _7Cm1F9 FxZV-M bsVOrE mo6ZnF dUMFv9 K82if3 LyRfpJ pVrzNP NN8L-8 QGmTh2 Vn-7c-")[0].value = code;
        //Kliknięcie przycisku sprawdzającego kodu
		document.getElementsByClassName("DJxzzA u9KIT8 uEg2FS U_OhzR ZkIJC- Vn-7c- FCIprz heWLCX JIgPn9 LyRfpJ pxpHHp Md_Vex NN8L-8 GTG2H9 MfX1a0 WCjo-q EKabf7 aX2-iv r9BRio mo6ZnF  E6Km4r")[0].click();
		
		while(alreadyUsed.includes(code)){
			console.log("Kod się powtórzył.")
			code = genCode();
	
		}
		
		alreadyUsed.push(code);
        loop(delay);
        
    }, delay);
}

//Podstawowy delay ustawiony jest na 200ms (5 prób na sekundę).
loop(200);
