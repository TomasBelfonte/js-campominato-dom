
// definisco tutte le variabili esterne
const btnPlayEl = document.getElementById ("btn-play");
const levelSelectedEl = document.querySelector ("[name='level-selected']");
let bombEl;
let numClickEl = document.querySelector (".num-click");
let numClick = 0;
let boom = false;
let bombList;
let grigliaDinamicaEl;
let bluGrid = grigliaDinamicaEl - bombEl;



// quando clicco sul pulsante play genero il valore del numero delle celle 
// in base alla difficoltÃ  scelta dall'utente.
// genero la lista delle bombe.
// resetto il contatore dei click e la relativa scritta dele celle.
btnPlayEl.addEventListener( "click", function( num ) {
    const playLevel = levelSelectedEl.value; 
    playCells( +playLevel );
    bombEl = generateBombsList(playLevel);
    console.log (bombEl);
    numClickEl.innerHTML = "";
    numClick = 0;

});

// al click del pulsante Play si genera il DIV, l'elenco delle celle, lo stile delle celle
function playCells( num ) {
    const grigliaDinamicaEl = document.querySelector( ".griglia-dinamica" );
    grigliaDinamicaEl.innerHTML = "";
    
    for (let i = 0; i < num; i++) {
        const newDiv = document.createElement("div");
        const numRow = Math.sqrt(num );
        newDiv.classList.add("cell");
        newDiv.style.width = 100 / numRow + "%";
        // newDiv.textContent = i + 1;
        newDiv.dataset.nrCella = i + 1;
        newDiv.addEventListener("click", clickOnCell );
        grigliaDinamicaEl.append(newDiv);
    }

}


// con questa funzione negono generati dei numeri random
function generateRandomNumber ( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;

}

// qui viene creata la lista delle bombe 
function generateBombsList (num) {
    
    let bombsList = [];

    while ( bombsList.length < 16 ) {

        const bombNum = generateRandomNumber( 1, num );
    
        if ( !bombsList.includes( bombNum ) ) {

        bombsList.push( bombNum );
        }
    }
    
    return bombsList;


}

// quando viene attivata la funzione viene aggiunto il dataset al nr cella
// viene verificato se viene presa la bomba e per bloccare gli imput
function clickOnCell () {

    // viene creata una costante dove viene cassegnato il dataset nr cella con valore numero (+)
    const nrCellaEl = +this.dataset.nrCella;

    // verifico se viene trovata la bomba. se si, blocco le operazioni
    if (boom === true) {
        return;
    }

    // verifico se l'elemento bomba Ã¨ presente all'interno del numero celle, viene trovata la bomba
    // e viene applivato il backgrounr color red con alert bomba
    if ( bombEl.includes ( nrCellaEl ) ) {
        boom = true
        this.classList.add ("active-red")
        alert( "---- BOMBA ----" )

        // viene creato un ciclo che va a selezionare tutte le bombe, dove se  ne viene trovata una
        // colora di rosso tutte le altre. 
        for (i = 0; i < bombEl.length; i++) {
        const checkBombs = document.querySelector(`.griglia-dinamica :nth-child(${bombEl [i]})`);
        console.log(checkBombs);
        checkBombs.classList.add("bg-red");
    }

    // se la bomba con viene trovata la click viene applicato un semplice background color blue. 
    } else {
        this.classList.add ("active-blu")
        numClick++;
    }
    
    // viene inserita una stringa ti desto che ndica le celle cliccate che non sono bomba
    numClickEl.innerHTML = "hai cliccato su nr " + numClick + " celle che non sono una Bomba";
    
}