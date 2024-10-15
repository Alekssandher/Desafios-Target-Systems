const prompt = require('prompt-sync')()

var valor = 0

console.log("-------VERIFICADORA FIBONACCI-------")
console.log("Digite um valor para calcular ")
valor = parseInt(prompt())

checkFibonacci(valor)

function checkFibonacci(valor) {
    let fibonacci = [0, 1]
    let num
    let num1 = 0
    let num2 = 1

    for (let i = 2; i < valor; i++) {
        
        num = num1 + num2
        num2 = num1
        num1 = num

        fibonacci.push(num)

        if (fibonacci.includes(valor)){
            return console.log(`O valor digitado existe na tabela fibonacci: \n ${fibonacci}`)
        }

        if (fibonacci.some(fibonacciValue => fibonacciValue > valor)){
            return console.log(`O valor digitado não existe na tabela fibonacci: \n ${fibonacci}`)
        }
    }
   
}

