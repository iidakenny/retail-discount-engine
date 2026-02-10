// A list of 5 products with their name, category, price, and quantity in inventory.

let products = [

    {
        name: "TV",
        category: "electronics",
        price: 89.99,
        inventory: 32
    },
    {
        name: "T-shirt",
        category: "apparel",
        price: 15.99,
        inventory: 14
    },
    {
        name: "Banana",
        category:"groceries",
        price: 0.99,
        inventory: 48
    },
    {
        name: "Sofa",
        category: "household",
        price: 599.99,
        inventory: 3
    },
    {
        name: "Wool yarn, 100g",
        category: "crafts",
        price: 6.99,
        inventory: 200
    }
];

// checking if products are correct on console.

console.log("My inventory:");
products.forEach(product => {
    console.log(`${product.name} | ${product.category} | $${product.price} | ${product.inventory}`);
});


// For... of loop with switch inside to apply a dynamic discount based on product category. -20% electornics, -15% apparel, groceries/household -10%.

for (let product of products){
    switch (product.category){
        case "electronics":
            product.price*=(1-0.2);
            break;

        case "apparel":
            product.price*=(1-0.15);
            break;

        case "groceries":
        case "household":
            product.price*=(1-0.1);
            break;
        default:
            product.price = product.price
}}

// Checking is discounts were applied correctly

console.log("\nPrices after discounts:");
products.forEach(product => {
    console.log(`${product.name} | ${product.category} | $${product.price.toFixed(2)}`);
    });
