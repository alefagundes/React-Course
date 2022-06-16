module.exports = class Music {
    constructor(name, band, timeDuration) {
        this.name = name
        this.band = band
        this.timeDuration = timeDuration
    }

    set setName(name) {
        this.name = name
    }

    get getName() {
        return this.name
    }

    get getBand() {
        return this.band
    }

    set setBand(band) {
        this.band = band
    }

    set setTimeDuration(time) {
        this.timeDuration = time
    }

    get getTimeDuration() {
        return this.timeDuration
    }

    //printing data with template strings
    showMusic() {
        const time = this.timeDuration.toString().split('.')
        return `Name band: ${this.band} \nMusic name: ${this.name} \nTime Duration: ${time[0]}min:${time[1]}seg`
    }
}
