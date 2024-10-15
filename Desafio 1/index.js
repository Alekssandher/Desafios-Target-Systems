const prompt = require('prompt-sync')()

var valor = 0

console.log("-------VERIFICADORA FIBONACCI-------")
console.log("Digite um valor para calcular ")
valor = parseInt(prompt())

checkFibonacci(valor)

function checkFibonacci(valor) {
    let fibonacci = [0, 1]

    for (let i = 2; i < valor; i++) {
        
        fibonacci.push((i - 1) + (i - 2))

        if (fibonacci.includes(valor)){
            return console.log(`O valor digitado existe na tabela fibonacci: \n ${fibonacci}`)
        }

        if (fibonacci.some(fibonacciValue => fibonacciValue > valor)){
            return console.log(`O valor digitado não existe na tabela fibonacci: \n ${fibonacci}`)
        }
    }
   
}

