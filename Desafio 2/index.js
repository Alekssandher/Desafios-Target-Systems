const prompt = require('prompt-sync')()

var text = ""
var textTransformed = ""
var textArray = []


console.log("-------VERIFICADORA DA LETRA A-------")
console.log("Digite um texto para verificar ")
text = prompt()
textTransformed = text.toLowerCase()

checkText(textTransformed)

function checkText(textTransformed) {
    
    textArray = textTransformed.split('')
    let timesAppeared = textArray.filter(letra => letra === "a").length
    return console.log(`A letra a apareceu ${timesAppeared} vezes na frase: ${text}`)
}

