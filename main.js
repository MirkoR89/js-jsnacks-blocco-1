//SNACK 1
//Crea 10 oggetti che rappresentano una zucchina,indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine.

/*var zucchine = [
{
  nome: "zucchino nero",
  peso: 10,
  lunghezza: 13
},
{
  nome: "zucchino napoletano",
  peso: 55,
  lunghezza: 27
},
{
  nome: "zucchina lunga fiorentina",
  peso: 60,
  lunghezza: 19
},
{
  nome: "zucchino tondo piacentino",
  peso: 23,
  lunghezza: 45
},
{
  nome: "zucchino ortolano di Faenza",
  peso: 46,
  lunghezza: 38
},
{
  nome: "zucchinoTondoDiNizza",
  peso: 43,
  lunghezza: 56
},
{
  nome: "zucchina rigata pugliese",
  peso: 12,
  lunghezza: 16
},
{
  nome: "zucchina bianca triestina",
  peso: 17,
  lunghezza: 27
},
{
  nome: "zucchino siciliano",
  peso: 23,
  lunghezza: 14
},
{
  nome: "zucchino romansesco",
  peso: 20,
  lunghezza: 18
},
]

var pesoZucchine = 0;
zucchine.forEach(function (item) {
    pesoZucchine += item.peso;
    console.log(pesoZucchine);
  });*/

//SNACK 2
//Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC).

/*function reverseWord(string) {
  var newString = "";
  for (var i = string.length -1; i >= 0; i--) {
    newString += string[i];
  }
  return newString
}

console.log(reverseWord("eletazzineigenizzatele"));*/

//SNACK 3
// Crea 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var zucchine = [{
    nome: "zucchino nero",
    peso: 10,
    lunghezza: 13
  },
  {
    nome: "zucchino napoletano",
    peso: 55,
    lunghezza: 27
  },
  {
    nome: "zucchina lunga fiorentina",
    peso: 60,
    lunghezza: 14
  },
  {
    nome: "zucchino tondo piacentino",
    peso: 23,
    lunghezza: 45
  },
  {
    nome: "zucchino ortolano di Faenza",
    peso: 46,
    lunghezza: 10
  },
  {
    nome: "zucchinoTondoDiNizza",
    peso: 43,
    lunghezza: 56
  },
  {
    nome: "zucchina rigata pugliese",
    peso: 12,
    lunghezza: 8
  },
  {
    nome: "zucchina bianca triestina",
    peso: 17,
    lunghezza: 27
  },
  {
    nome: "zucchino siciliano",
    peso: 23,
    lunghezza: 7
  },
  {
    nome: "zucchino romansesco",
    peso: 20,
    lunghezza: 18
  },
]

var zucchineCorte = [];
var zucchineLunghe = [];

zucchine.forEach(function(item) {
  if (item.lunghezza < 15) {
    zucchineCorte.push(item);
  } else {
    zucchineLunghe.push(item);
  }
});
console.log(zucchineCorte);
console.log(zucchineLunghe);

var pesoZucchineCorte = 0;
zucchineCorte.forEach(function(item) {
  pesoZucchineCorte += item.peso;
});
console.log(pesoZucchineCorte);

var pesoZucchineLunghe = 0;
zucchineLunghe.forEach(function(item) {
  pesoZucchineLunghe += item.peso;
});
console.log(pesoZucchineLunghe);
