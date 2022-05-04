import 'dotenv/config'
import mongoose from 'mongoose';

const db = mongoose.connect(process.env.MONGO_URI, (err) => {
    if (err) {
        console.log('Error al Conectarse a MongoDB');
    } else {
        console.log('Conectados a MongoDB')
    }});

export default db;