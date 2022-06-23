const Music = require('./Banda')

module.exports = class Album extends Music {
    constructor(name, band, timeDuration, qty, nameAlbum) {
        super(name, band, timeDuration)
        this.qty = qty
        this.nameAlbum = nameAlbum
    }

    get getQty() {
        return this.qty
    }

    set setQty(qty) {
        this.qty = qty
    }

    get getNameAlbum() {
        return this.qty
    }

    set setNameAlbum(nameAlbum) {
        this.nameAlbum = nameAlbum
    }

    showAlbum() {
        const obj = {
            name: this.name,
            band: this.band,
            timeDuration: this.timeDuration,
            qty: this.qty,
        }
        return `Objeto montado: ${obj.name}`
    }
}
