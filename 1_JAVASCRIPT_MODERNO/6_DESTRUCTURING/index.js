const fruits = ['maca', 'laranja', 'mamao']

const [f1, f2, f3] = fruits

console.log(f1)

const productDetails = {
    name: 'Mouse',
    price: 39.99,
    category: 'perifericos',
    color: 'cinza',
}

const {
    name: productName,
    price,
    category: categoryName,
    color,
} = productDetails

console.log(`nome eh: ${productName}, o preco eh ${price}`)
