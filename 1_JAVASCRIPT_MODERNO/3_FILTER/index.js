const arr = [1, 2, 3, 4, 5]

const highNumber = arr.filter((n) => {
    if (n >= 3) {
        return n
    }
})

console.log(highNumber)

const user = [
    { name: 'alessandro', avalible: true },
    { name: 'pedro', avalible: false },
    { name: 'joao', avalible: false },
    { name: 'marcos', avalible: true },
]

const avalibleUsers = user.filter((user) => user.avalible)
const noavalibleUsers = user.filter((user) => !user.avalible)

console.log(avalibleUsers)
console.log(noavalibleUsers)
