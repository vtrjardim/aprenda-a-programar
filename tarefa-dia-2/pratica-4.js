let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

let inter = 1.20
let nac = 1.12

if (produtoA.internacional == true) {
    console.log(`Valor do produto (internacional) com impostos: ${inter*produtoA.valor}`)
} else {
    console.log(`Valor do produto (nacional) com impostos: ${nac*produtoA.valor}`)
}

if (produtoB.internacional == true) {
    console.log(`Valor do produto B (internacional) com impostos: ${inter*produtoB.valor}`)
} else {
    console.log(`Valor do produto B (nacional) com impostos: ${nac*produtoB.valor}`)
}

if (produtoC.internacional == true) {
    console.log(`Valor do produto C (internacional) com impostos: ${inter*produtoC.valor}`)
} else {
    console.log(`Valor do produto C (nacional) com impostos: ${nac*produtoC.valor}`)
}

console.log("'Solução' alternativa abaixo:")
// Outra opção de resolução que pensei foi apontando diretamente o imposto sem condicionais, já que sei quais são internacionais ou nacionais:

let prodAInter = inter*produtoA.valor
let prodBInter = inter*produtoB.valor
let prodCnac = nac*produtoC.valor

console.log(`Produto Internacional de valor: ${prodAInter}`)
console.log(`Produto Internacional de valor: ${prodBInter}`)
console.log(`Produto Nacional de valor: ${prodCnac}`)

// Pensei em soluções onde colocaria as 3 opções de produto em uma só condicional, porém não sei como faria a solicitação para printar no log a resposta para um produto especifico, acho que seria necessário um insert de texto(?), escolhendo o produto.