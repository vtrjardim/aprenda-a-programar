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
