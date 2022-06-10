/**
 * Desafio: escrever uma função que valide a solução de um jogo de Sudoku.
 * A função irá receber um array bi-dimensional (NxN) com inteiros de 1 a N, e deve retornar um booleano informando se o preenchimento está correto.
 *
 * Exemplo de um valor de entrada:
 * [
 *   [7,8,4,  1,5,9,  3,2,6],
 *   [5,3,9,  6,7,2,  8,4,1],
 *   [6,1,2,  4,3,8,  7,5,9],
 *
 *   [9,2,8,  7,1,5,  4,6,3],
 *   [3,5,7,  8,4,6,  1,9,2],
 *   [4,6,1,  9,2,3,  5,8,7],
 *
 *   [8,7,6,  3,9,4,  2,1,5],
 *   [2,4,3,  5,6,1,  9,7,8],
 *   [1,9,5,  2,8,7,  6,3,4]
 * ]
 *
 * Para maiores informações sobre Sudoku:
 * https://pt.wikipedia.org/wiki/Sudoku
 *
 * Voce pode testar o seu codigo rodando o comando `npm test` no terminal
 * e tambem pode alterar o arquivo `index.test.js` se desejar.
 * Apos enviado, seu codigo sera validado com outros cenarios de teste tambem.
 *
 * @param array array bidimensional de inteiros
 * @returns `true` ou `false`, informando se o preenchimento está correto
 */

let a = [
    [7, 8, 4, 1, 5, 9, 3, 2, 6],
    [5, 3, 9, 6, 7, 2, 8, 4, 1],
    [6, 1, 2, 4, 3, 8, 7, 5, 9],

    [9, 2, 8, 7, 1, 5, 4, 6, 3],
    [3, 5, 7, 8, 4, 6, 1, 9, 2],
    [4, 6, 1, 9, 2, 3, 5, 8, 7],

    [8, 7, 6, 3, 9, 4, 2, 1, 5],
    [2, 4, 3, 5, 6, 1, 9, 7, 8],
    [1, 9, 5, 2, 8, 7, 6, 3, 4],
]

function sudoku(array) {
    const rows = []
    const cols = []
    const boxes = []
    for (let i = 0; i < array.length; i++) {
        rows.push(new Set())
        cols.push(new Set())
        boxes.push(new Set())
    }
    for (let i = 0; i < array.length; i++) {
        for (j = 0; j < array[i].length; j++) {
            const cell = array[i][j]
            if (cell === '.') continue
            const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3)
            if (
                rows[i].has(cell) ||
                cols[j].has(cell) ||
                boxes[boxNum].has(cell)
            ) {
                return false
            }
            rows[i].add(cell)
            cols[j].add(cell)
            boxes[boxNum].add(cell)
        }
    }
    return true
}

console.log(sudoku(a))
