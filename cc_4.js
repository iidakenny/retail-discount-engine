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

// Created a variable for customer type so additional discounts can be applied to the final total.

let customerType = "student"
let orderTotal = 54
// -5% discount of total for students.
let studentDiscount = 1-0.05
// -7% discount of total for seniors.
let seniorDiscount = 1-0.07

if (customerType === "student"){
    orderTotal*=studentDiscount;
} else if (customerType === "senior"){
    orderTotal*=seniorDiscount;
} else {
    orderTotal = orderTotal;
}

//Cheking if the student discount is applied properly.
console.log(`\nYour order total is $${orderTotal.toFixed(2)} after applying the ${customerType} discount.`)



// Created a list of 3 different customer orders with varying items in the cart.

let customers = [
    {
        order: 1,
        customerType: "student",
        cart: [
            {
                product: "TV",
                quantity: 2
            },
            {
                product: "T-shirt",
                quantity: 3
            }

        ]
    },
    {
        order: 2,
        customerType: "senior",
        cart: [
            {
                product: "Sofa",
                quantity: 1
            },
            {
                product: "Wool yarn, 100g",
                quantity: 10
            }
        ]
    },
    {
        order: 3,
        customerType: "regular",
        cart: [
            {
                product: "Banana",
                quantity: 45
            }
        ]
    }

];


//Looping throught the customer order while checking the invenotry and substr. the bought amount, calculating the total with discounts, and logging the customer number and order toal. Added an error message if inventory is lower than order amount.

for (let customer of customers) {
    let orderTotal = 0;

    for (let item of customer.cart) {
        let product = products.find(p => p.name === item.product);

        if (product && product.inventory >= item.quantity) {
            orderTotal += product.price * item.quantity;
            product.inventory -= item.quantity;
        }
        else {
            console.log(`Unable to process because ${item.product} has too low inventory.`)
        }
    }

    if (customerType === "student"){
        orderTotal*=studentDiscount;
    } else if (customerType === "senior"){
        orderTotal*=seniorDiscount;
    } else {
        orderTotal = orderTotal;
    }

    console.log(`Order number: ${customer.order}, Total after discounts: $${orderTotal.toFixed(2)}`)
};

// A summary of the key's and their values of a single product
console.log("\nSummary of the first product in inventory:")
 for (let key in products[0]) {
    console.log(`${key}: ${products[0][key]}`)
 }

 // Logging all product info of current inventory after purchases using Object.entries()
console.log(Object.entries(products)
);