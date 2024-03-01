calculadora = requestAnimationFrame(' ./calculadora.js')
console.log(calculadora.soma(1,2)) // 3
console.log(calculadora.subtracao(1,2)) // -1
console.log(calculadora.multiplicacao(1,2)) // 2
console.log(calculadora.divisao(1,2)) // 0.5

// Path: calculadora.js
function soma(a, b) {
    return a + b;
}
function subtracao(a, b) {
    return a - b;
}
function multiplicacao(a, b) {
    return a * b;
}
function divisao(a, b) {
    return a / b;
}
module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}
```