/*
Math: É uma classe javascript, seu nome vem do ingles (Math - Matematica), a mesma em sua estrutura
 interna disponibiliza uma serie de metodos nativos da classe possibilitando operacoes matematicas
 já prontas facilitando a vida do desenvolvedor caso necessite implementar operacoes matematicas em 
 alguma regra de negocio especifica

 Referencias:
 https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math
 https://www.devmedia.com.br/matematica-em-javascript-o-objeto-math/27439
 https://pt.stackoverflow.com/questions/481538/por-que-math-%c3%a9-do-tipo-object-em-javascript/481541#481541
 conhecimentos proprios

Date: 
A classe Date foi desenvolvida com o intuito de trabalhar a conversao de valores universais 
de modo a auxiliar o desenvolvedor na conversao de tempo para o local atual, a classe já vem 
com funcoes internas estabelicida que posibilitam o tratamento e filtro de datas de acordo com o padrao UTC.


Referencias: 
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/
https://stackoverflow.com/questions/22600856/moment-js-date-time-comparison
https://www.codeproject.com/Questions/826094/problem-knockout-js-with-date-bindin
conhecimentos proprios
*/
//Math

const number = 3.8567989
console.log(Math.floor(number)) //R: 3
//Math.floor() - funcao responsavel por receber valores de ponto flutuante e aredondalos para baixo

const raiz25 = Math.sqrt(25)
console.log(raiz25) // R: 5
// Math.sqrt() - funcao responsavel por receber um parametro e retornar a raiz quadrada do valor recebido.

const pow = Math.pow(2, 2) // R: 4
console.log(pow)
//Math.pow() - Funcao responsavel por receber 2 parametros (param1: valor1, param2: valor ao qual o valor 1
//sera elevado no numero de vezes passado no param2)

const abs = Math.abs(-2)
console.log(abs) // R: 2
//Math.abs() - Funcao responsavel por receber um parametro e calcular o valor absoluto do parametro
// passado na funcao por modulo

const arrNumbers = [5, 2, 3, 4, 28, -15]
console.log(Math.max(...arrNumbers)) // R: 28
//Math.max() - Funcao que retorna o maior elemento entre um conjunto de elementos (ex: arr)

// Date
const date = new Date()
console.log(date) //R: Data atual da execucao do programa
// funcao new Date() pega a data atual do calendario do seu computador com base no horario UTC

const miliseconds = Date.now()
console.log(miliseconds) // R: Retorna o valor em milisegundos decorridos desde 1 de janeiro de 1970 as 00:00:00
//valor em UTC.

const test = Date.parse('Apr 4, 2020')
console.log(test) // R: Valor em milisegundos desde a data informada ate o dia atual.
// Date.parse() eh responsavel por receber um valor em string e fazer a conversao do mesmpo para milisegundo
// do valor da data informada ate o dia/tempo atual do calendario.

const time = Date.apply()
console.log(time) //R:
//Date.apply() captura a data atual da data no valor GMT, o valor gerado eh em string e recebe o valor
//exato do momento da chamada do metodo.

const newDate = new Date().getFullYear() //R: 2022
console.log(newDate)
// Estanciado a classe Date() tempos acesso a funcao getFullYear que pega o valor do ano
//do calendario atual.
