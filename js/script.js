// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!



// Now
function mostraOrologio() {
    let data = new Date();
    let ore = data.getHours();
    let minuti = data.getMinutes();
    let secondi = data.getSeconds();
  
    if(ore < 10) { ore = '0' + ore; }
    if(minuti < 10) { minuti = '0' + minuti; }
    if(secondi < 10) { secondi = '0' + secondi; }
  
    document.getElementById("orologio").innerHTML = ore+':'+minuti+':'+secondi;

}
setInterval(mostraOrologio, 1000);



// Data lezione
const lezione = new Date ("February 12, 2024 09:30:00");
console.log (lezione);

document.getElementById("lezione").innerHTML = lezione;

// Prova
// const lezione = new Date ("February 11, 2024 19:52:00");



// Countdown
const countdown = setInterval(function() {

    let now = new Date();

    let temporimasto = lezione - now;

    let secondi = Math.floor(temporimasto / 1000);

    let minuti = Math.floor(secondi / 60);

    let ore = Math.floor(minuti / 60);

    secondi = secondi % 60;

    minuti = minuti % 60;

    ore = ore % 24;


    if(ore < 10) { ore = '0' + ore; }
    if(minuti < 10) { minuti = '0' + minuti; }
    if(secondi < 10) { secondi = '0' + secondi; }


    document.getElementById("timer").innerHTML = ore+'h : '+minuti+'m : '+secondi+'s';

    if (temporimasto <= 0) {

        clearInterval (countdown);

        document.getElementById("timer").innerHTML = "Tempo esaurito";
    }

}, 1000);
