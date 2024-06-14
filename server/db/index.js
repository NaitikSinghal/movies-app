const mongoose = require('mongoose');

const mongoHost = process.env.MONGO_HOST || 'database'; 
const mongoPort = process.env.MONGO_PORT || '27017';

const connectionString = `mongodb://${mongoHost}:${mongoPort}/movies`;

mongoose
    .connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }) 
    .catch(e => {
        console.error('Connection error', e.message);
    });

const db = mongoose.connection;

module.exports = db;
