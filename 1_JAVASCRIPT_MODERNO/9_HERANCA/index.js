const product = require('../8_CONSTRUCTOR/index')

//classes e herancas utilizacao disso

class productAtribut extends product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log('As cores sao:')
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const het = new productAtribut('chapeu', 29.99, ['preto', 'azul', 'verde'])

console.log(het.name)
console.log(het.productWithDiscount(20))
het.showColors()
