import 'dotenv/config'
import mongoose from 'mongoose';
function db(){
const DB = mongoose.connect(process.env.MONGO_URI, (err) => {
    if (err) {
        console.log('Error al Conectarse a MongoDB');
    } else {
        console.log('Conectados a MongoDB')
    }});

    return(
        <div/>
    )
}
export default db;