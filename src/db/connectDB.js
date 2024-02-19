const mongoose = require('mongoose');

const connectDB = async (url) => {
    try {
        console.log('Connecting to the database...');
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to the database successfully!');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }
};

module.exports = connectDB;

