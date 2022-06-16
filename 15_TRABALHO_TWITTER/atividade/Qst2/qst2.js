const Music = require('../classes/Banda')

const band1 = new Music('A morte do autotune', '30praum', 2.35)

const band2 = new Music('Como Deus é bom!', 'kawe', 2.0)

band2.setTimeDuration = 3.05

const hist1 = band1.showMusic() //print showMusic Method
const hist2 = band2.showMusic()
//return a printed to hist1 variable

console.log('\n')
console.log(hist1, '\n')
console.log(hist2)
