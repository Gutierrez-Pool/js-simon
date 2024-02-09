// Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
// Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di lunedì mattina!

// Consigli
// Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
// Da quante ore è composto un giorno?
// Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano da domani alle 9:30?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?

// Orologio ora
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


// Data attuale
let prova = new Date();
console.log (prova);


// Data lezione
const lezioni = new Date ();
lezioni.setDate(12);
console.log (lezioni);


//Tempo alla lezione in ms 
const tempoRimasto = lezioni - prova;
console.log (tempoRimasto);