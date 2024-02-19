
require('dotenv').config();
const connectDB = require('./src/db/connectDB');
const Product = require('./src/model/products');

const ProductJSON = require('./products.json');
const products = require('./src/model/products');

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await products.deleteMany();
        await Product.create(ProductJSON);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
};

start();