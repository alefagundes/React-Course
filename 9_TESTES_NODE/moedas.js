/**
 * Desafio: escrever uma função que conte quantas maneiras diferentes de representar um valor com um numero determinado de moedas.
 * A função irá receber um valor inteiro, um array contendo o valor das moedas disponiveis, e deve retornar um inteiro informando a quantidade de variacoes diferentes de que pode ser utiliza para representar o valor recebido com as moedas disponiveis.
 * Por exemplo, chamando `variacoes(4, [1,2])` vamos ter:
 * `1+1+1+1`, `1+1+2`, `2+2`, entao o resultado da funcao deve ser `3`.
 *
 * Não existe um número determinado de moedas.
 * Você deve pegar o valor recebido e contar quantas variações únicas de moedas representam aquele valor.
 *
 * Voce pode testar o seu codigo rodando o comando `npm test` no terminal
 * e tambem pode alterar o arquivo `index.test.js` se desejar.
 * Apos enviado, seu codigo sera validado com outros cenarios de teste tambem.
 *
 * @param valor valor (dinheiro)
 * @param moedas array uni-direcional de inteiros, contendo os valores das moedas disponiveis
 * @returns inteiro informando a quantidade de variações possíveis para representar o valor com as moedas
 */
function variacoes(valor, moedas) {
    let arr = Array.from({ length: valor + 1 }).fill(0)
    arr[0] = 1

    for (let i = 0; i < arr.length; i++) {
        let demon = moedas[i]
        for (let j = 1; j < arr.length; j++) {
            if (j >= demon) {
                arr[j] += arr[j - demon]
            }
        }
    }
    return arr[valor]
}

let coins = [5, 7]
let v = 11
const test = variacoes(v, coins)

console.log(test)
