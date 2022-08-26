let numero = 23
let divisor = 1
let i = 1

while (divisor <= numero){
    let resto = numero % divisor
    if (resto === 0) 
        {
            console.log(`Sim, o número ${numero} é primo!`)
        } else (resto === 1)
        {
            console.log(`Não, o número ${numero} não é primo!`)
        }
        divisor++
}