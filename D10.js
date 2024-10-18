/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
let n1 = 10
let n2 = 20
let sum = n1 + n2
console.log(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random = Math.floor(Math.random() * 21)
console.log(random)
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

const me = { name: 'Patricia', surname: 'Badji', age: 35 }
console.log(me)
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age
console.log(me)
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
const me = { name: 'Patricia', surname: 'Badji', age: 35 }
let skills = []
skills.push('javascript')
me.skill = skills

console.log(me)

//Ho creato un array vuoto che poi ho riempito con le skills che ho. Successivamente ho aggiunto all'oggetto la proprietà skill a cui ho asseegnato come valore l'array skills.

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
skills.push('IDN')
console.log(me)
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
skills.pop()
console.log(me)
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = Math.floor(Math.random() * 6 + 1)
console.log(dice)

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
let whoIsBigger = function (n1, n2) {
  if (n1 > n2) {
    return n1
  }
}
console.log(whoIsBigger(4, 854))
console.log(whoIsBigger(5, 1))
//il valore  mostrato in console log è presente solo se maggiore, altrimenti la funzione da come risultato undefined. Se non volessi avere undefined, dovrei aggiungere la condizione else.

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = 'I hope I will pass the exam'
const array1 = splitMe.split(' ')
console.log(array1)

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = function (str1, str2) {
  if (str1 !== str2) {
    return str1.substring(1)
  } else {
    return str2.slice(0, -1)
  }
}
console.log(deleteOne('Ciao', 'come stai?'))
console.log(deleteOne('Io', 'Io'))

//non ho ben capito cosa intendi con "un booleano come parametri". Ho messo il booleano nell'if statement, in modo da verificare che la condizione sia true o false e dare un risultato diverso a seconda dell'aderenza al booleano.
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
let array = []
array.push('I', 'have', '4545', 'books')
console.log(array)
array.splice(2, 1)
console.log(array)
let stringa = array.toString()
console.log(stringa)
let onlyLetters = stringa.replace(',', ' ')

console.log(onlyLetters)
//let stringa = 'I libri che ho sono 100'
//let arrayStringa = stringa.split(' ')
//console.log(arrayStringa)
//const onlyLetters = arrayStringa.pop()
//Ho cercato di convertire la stringa in un array per poi ciclarlo e ricercare il carattere corrispondente alla cifra (che è un carattere perché è contenuta nella stringa) ed eliminarlo, ma non ci sono riuscita. Ho provato con un for e un if insieme. Allora ho deciso di creare un array dove ho inserito le singole parole e di agire utilizzando i metodi degli array.
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = function (str) {
  if (str.includes('@')) {
    console.log('indirizzo valido')
  }
}
console.log(isThisAnEmail('patricia.badji89@gmail.com'))
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  const currentDate = new Date()
  const today = currentDate.getDay()
  let names = [
    'domenica',
    'lunedì',
    'martedì',
    'mercoledì',
    'giovedì',
    'venerdì',
    'sabato',
  ]
  return names[today]
}
console.log(whatDayIsIt())
//ho fatto riferimento agli indici e al modo in cui js restituisce la data
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

  }

}
  //forse uso if e come lunghezza metto 5?
  //devo riassegnare la proprietà di dice? cioè cambiare quello che fa? Crearne una nuova?argh
}
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
let date1 = new Date(1989, 5, 29)
//console.log(date1)
let date2 = new Date()
//console.log(date2)
const hoursPassed = date2.getTime() - date1.getTime()
const dayPassed = Math.round(hoursPassed / (1000 * 3600 * 24))
console.log(dayPassed)
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

let myBirthday = new Date(1989, 5, 29)
let myDay = myBirthday.getDate()
let myMonth = myBirthday.getMonth()
let today = new Date()
let dayOfToday = today.getDate()
let monthOfToday = today.getMonth()

function isTodayMyBirthday() {
  if (myDay !== dayOfToday) {
    return false
  } else {
    return true
  }
}

console.log(isTodayMyBirthday())

//credo sia lungo senza motivo, ma sono riuscita a risolverlo così, mentalmente aveva un senso logico per me.

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

function deleteProp() {
  let Casa = { camere: 'quattro', colore: 'giallo', altezza: '60m' }
  let altezza = 'stringa'
  //sinceramente non ho capito la consegna dell'esercizio
}
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
//devo ciclare
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
//ho spostato l'array per utilizzarlo
let anno = []
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i].Year)
  anno.push(movies[i].Year)
}
let recenti = []
for (let i = 0; i < anno.length; i++) {
  if (anno[i].startsWith('201')) {
    recenti.push(anno[i])
  }
  console.log(recenti)
}
function newestMovie() {
  for (let i = 0; i < recenti.length; i++) {
    if (recenti[i].endsWith('20')) {
      console.log('Film più recente')
    } else if (recenti[i].endsWith('19')) {
      console.log(recenti[i] + ' Questo è il più recente')
    }
  }
}
console.log(newestMovie())
//console.log(anno)
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

let total = movies.length
console.log(total)

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = []
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i].Year)
  onlyTheYears.push(movies[i].Year)
  console.log(onlyTheYears)
}

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
function onlyInTheLastMillennium() {
  const vuoto = []
  for (let i = 0; i < movies.length; i++) {
    vuoto.push(movies[i].Year)
  }
  console.log(vuoto)

  const lastMillennium = []
  for (let i = 0; i < vuoto.length; i++) {
    if (vuoto[i].startsWith('1')) {
      lastMillennium.push(vuoto[i])
    }
  }
}

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
//Devo convertire le stringhe degli anni in numeri e poi sommarli
const sumAllTheYears = function () {
  
  for (let i = 0; i < movies.length; i++) {
    parseInt(movies[i].Year)
      
  }
}
console.log(sumAllTheYears())
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = function(string){
  for (let i=0; i<movies.length; i++){
    if (string === 'Lord') {
      console.log(string[i])
    }
  }

}
searchByTitle()
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
function getContainers() {
  document.getElementById('container')
}
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
function selectAlltheTds() {
  document.getElementsByTagName('td')
}
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
function printTheInnerText() {}

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function cambiaColore() {
  const change = document.getElementsByTagName('a')
  a.style.backgroundColor = 'red'
}

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
function aggiungi() {
  const newLi = document.createElement('li')
  newLi.innerText = 'nuovo elemento'
  const add = document.getElementById('myList')
  myList.appendChild(newLi)
}
//appendo al padre dopo aver creato l'elemento
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
//svuotare....cancellare?nascondre?togliere gli <li>? che senso ha avere una lista vuota? la nascondo
function svuota() {
  const nascondino = document.getElementById('myList')
  nascondino.style.visibility = 'hidden'
}

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function aggiuntaTag() {
  const tRow = document.getElementsByClassName('tr')
  tRow.classList.add('test')
}

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
