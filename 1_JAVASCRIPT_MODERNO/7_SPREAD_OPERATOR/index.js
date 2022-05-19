const a = [1, 2, 3]
const b = [4, 5, 6]

const c = [...a, ...b]

const info = {
    km: 80000,
    price: 40000,
}
const carName = { name: 'golf' }
const carBrand = { brand: 'VW' }

carTeste = { ...info, ...carName, ...carBrand }

console.log(carTeste)
