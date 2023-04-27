// create a new customer object
const customer = {
    firstName: 'Jake0',
    lastName: 'Smith',
    email: 'jsmith@example.com',
    phone: '1234567890',
    zipCode: '12345',
    "favorite Flavor": ['chocolate'],
    "cup Size": 'medium',
    "favorite Store": 'Target',
    "first Visit": false
}

// make changes to emaiil, phone, zip code adn and flavor properties
customer['email'] = 'Jak3Smith1992@email.com';
customer['phone'] = '3195551234';
customer['zipCode'] = '63132';
customer["favorite Flavor"] = ['coffe', 'strawberry', 'matcha'];

//print the customer object in a table
console.table(customer)

// delete the zipCode property and favorite store property
delete customer.zipCode
delete customer["favorite Store"]

//print the customer object
console.table(customer)

// add a new property to the customer object
customer.toppings = ['chocolate sprinkles', 'wafer straws', 'gummy bears']
customer.futureFlavors = '[mango]'
customer.todayysPurchaseCost = '5.32'

//print the customer object
console.table(customer)

// print the keys in an array
console.log(Object.keys(customer))