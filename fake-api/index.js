const users = require('./users.json');
const products = require('./products.json');

module.exports = () => ({
    products: products,
    users: users
});