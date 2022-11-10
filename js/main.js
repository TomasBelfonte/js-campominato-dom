const btnPlayEl = document.getElementById ("btn-play");
const levelSelectedEl = document.querySelector ("[name='level-selected']");
let bombs;

btnPlayEl.addEventListener( "click", function( num ) {
    const playLevel = levelSelectedEl.value; 

    playCells( +playLevel );
});

function playCells( num ) {
    const grigliaDinamicaEl = document.querySelector( ".griglia-dinamica" );
    // grigliaDinamicaEl.classList.add("d-none");
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

    // grigliaDinamicaEl.classList.remove("d-none");
}

function generateRandomNumber ( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) ) + min;

}

function generateBombsList (num) {
    const bombsList = [];

    while ( bombsList.length < 16 ) {

        const bombNum = generateRandomNumber( 1, num );
    
        if ( !bombsList.includes( bombNum ) ) {

        bombsList.push( bombNum );
        }
    }
    
    return bombsList;

    console.log = (bombsList);
}


function clickOnCell () {
    // this.classList.toggle( "active");
    const nrCellaEl = +this.dataset.nrCella;

    if ( bombsList.includes ( nrCellaEl ) ) {
        alert( "---- BOMBA ----" )
        this.classList.add ("active-red")
    } else {
        this.classList.add ("active-blu")
    }

}