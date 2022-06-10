/**
 * Desafio: escrever uma função que valide se uma palavra é valida em um tabuleiro de Parole.
 * A função irá receber dois argumentos:
 * - Um array bi-dimensional (NxN) com letras de A a Z representando o tabuleiro
 * - Uma palavra que deve ser validada
 *
 * Palavras válidas são formadas por ligações adjacentes das letras (horizontas, vertical, diagonal) sem reutilizar as posições usadas anteriormente.
 *
 * Exemplo de um valor de entrada:
 * [ ["I","L","A","W"],
 *   ["B","N","G","E"],
 *   ["I","U","A","O"],
 *   ["A","S","R","L"] ]
 *
 * Neste caso, podemos considerar:
 * - "BINGO", "ILNBIA", "LINGO" são palavras válidas.
 * - "BUNGIE", "SINUS", "BINS" são palavras inválidas.
 *
 * Não é necessário verificar se a palavra é real ou não, apenas se ela é valida no tabuleiro.
 *
 * Voce pode testar o seu codigo rodando o comando `npm test` no terminal
 * e tambem pode alterar o arquivo `index.test.js` se desejar.
 * Apos enviado, seu codigo sera validado com outros cenarios de teste tambem.
 *
 * @param tabuleiro array bidimensional representando o tabuleiro
 * @param palavra palavra que deve ser validada no tabuleiro
 * @returns `true` ou `false`, informando se a palavra é valida para o tabuleiro
 */
let tab = [
    ['I', 'L', 'A', 'W'],
    ['B', 'N', 'G', 'E'],
    ['I', 'U', 'A', 'O'],
    ['A', 'S', 'R', 'L'],
    ['A', 'S', 'R', 'L'],
]

function parole(tabuleiro, palavra) {
    function testa(arrPossiveis, arrTeste, tabuleiro, letra) {
        let arrProximos = []

        for (let i = 0; i < arrPossiveis.length; i++) {
            try {
                if (
                    tabuleiro[arrPossiveis[i][0] - 1][arrPossiveis[i][1] - 1] ==
                    letra
                ) {
                    let temp = [arrPossiveis[i][0] - 1, arrPossiveis[i][1] - 1]
                    if (!arrTeste.includes([temp])) {
                        arrProximos.push(temp)
                    }
                }
                //else if

                /* if ( 
                    (tabuleiro[arrPossiveis[i][0]-1][arrPossiveis[i][1]-1] == letra) ||
                    (tabuleiro[arrPossiveis[i][0]  ][arrPossiveis[i][1]-1] == letra)||
                    (tabuleiro[arrPossiveis[i][0]+1][arrPossiveis[i][1]-1] == letra)||
                    (tabuleiro[arrPossiveis[i][0]+1][arrPossiveis[i][1]  ] == letra)||
                    (tabuleiro[arrPossiveis[i][0]+1][arrPossiveis[i][1]+1] == letra)||
                    (tabuleiro[arrPossiveis[i][0]  ][arrPossiveis[i][1]+1] == letra)||
                    (tabuleiro[arrPossiveis[i][0]-1][arrPossiveis[i][1]+1] == letra)||
                    (tabuleiro[arrPossiveis[i][0]-1][arrPossiveis[i][1]  ] == letra) 
                    ){
                        let temp = []
                        if (arrTeste.includes([])){}
                    } */
            } catch (err) {
                console.log(err)
            }
        }
    }

    //transformando para linha e colunas do tabuleiro
    let row = tabuleiro.length
    let col = tabuleiro[0].length

    let arrIniciais = []

    let i, j, z

    for (j = 0; j < row; j++) {
        for (let z = 0; z < col; z++) {
            if (palavra.charAt(0) === tabuleiro[j][z]) {
                let temp = [j, z]
                arrIniciais.push(temp)
            }
        }
    }

    if (arrIniciais.isEmpty()) return false
    else {
    }

    console.log(arrIniciais)
    console.log('c', col)
    console.log('r', row)
}

parole(tab, 'SAMUCA')
/* for (j = 0; j < row; j++) {
                    for (let z = 0; z < col; z++) {
                        if (palavra.charAt(i) === tabuleiro[j][z]) {
                            let temp = [j, z]
                            arrTeste.push(temp)
                        }
                    }
                } */
