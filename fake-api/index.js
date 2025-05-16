const users = require('./users.json');
const products = require('./products.json');
const accordion = require('./accordion.json');
const navbar = require('./navbar.json');
const footer = require('./footer.json');

module.exports = () => ({
    products: products,
    users: users,
    accordion: accordion,
    navbar: navbar,
    footer: footer
});