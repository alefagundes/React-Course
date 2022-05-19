const product = [
    { name: 'camisa', price: 10.99, category: 'roupas' },
    { name: 'cadeira', price: 100.0, category: 'moveis' },
    { name: 'tenis', price: 300.0, category: 'roupas' },
    { name: 'termica', price: 59.99, category: 'acessorios' },
]

product.map((product) => {
    if (product.category === 'roupas') {
        product.onSale = true
    }
})

console.log(product)
