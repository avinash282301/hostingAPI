require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require('./src/db/connectDB')

const products_router = require('./src/routers/productsRouter')

app.get('/', (req, res) => {
    res.send('Hi, I am live')
});


app.use('/api/products', products_router);


const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();