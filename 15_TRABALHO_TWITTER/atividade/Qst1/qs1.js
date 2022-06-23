//1 - Abstracao - Eh a forma de abstrair tarefas do sistema implementado, reduzindo a complexidade
//do codigo, separacao de tarefas por meio de funcoes e divizao de responsabilidade entre as classes
// servicos que o sistema disponibiliza

//2 - Encapsulamento - Eh a forma de encapsular dados dentro de classes onde determinados programas
//podem ou nao ter acesso a esses dados para utilizacao de funcoes utilizacao de metodos ou variaveis
// de escopo global

//3 - Heranca - Eh a caracteristica de herdar atributos, funcionalidade de outras classes ja implementas
//um exemplo classico eh um programa de conta bancaria onde um usuario pode depositar e realizar saques,
//essas mesmas operacoes sao padrao para todos, mas conforme a regra que o banco preve a acao pode sofre
// alteracao acrecentando juros ou nao.

//4 - Polimorfismo - Podemos descrever polimorfismo como sendo a derivacao de classes apartir de uma classe
// pai e essas demias classes podem aproveitar objetos e funcionalidades de formas difrentes

// 1 EX: ao inves de dentro do programa declaramos as variaveis e rea

const Album = require('../classes/Abum')

const soma = (a, b) => {
    return a + b
}

const menos = (a, b) => {
    return a - b
}

const calAlbum = (arr) => {}

let listaAlbum = []

const object = new Album('blue jeans', 'kawe', 2.05, 3, 'teste dos Guri')
const object2 = new Album('blue jeans', 'kawe', 2.05, 5, 'teste dos Guri')
/* const object3 = new Album('dois', 'teste2', 3.05, 3)
const object4 = new Album('dois', 'teste2', 3.05, 6)
const object5 = new Album('dois', 'teste2', 3.05, 5) */

listaAlbum = [object, object2]
const teste = object.showMusic()

//const res = calAlbum(listaAlbum)
console.log(teste)
