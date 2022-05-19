const sum = function sum(a, b) {
    return a + b
}

const arrowSum = (a, b) => a + b

console.log(arrowSum(8, 9))

const greeting = (name) => {
    if (name) {
        console.log('ola ' + name)
    } else {
        console.log('ola')
    }
}

greeting()

const user = {
    name: 'Ale',
    sayUserName() {
        var self = this
        setTimeout(function () {
            console.log(self)
            console.log('Username: ', +self.name)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log('Username: ' + this.name)
        }, 1000)
    },
}

user.sayUserName()
user.sayUserNameArrow()
