import mongoose from 'mongoose';

const dbConnection = async () => {
    try {
        const DB_URI = 'mongodb://localhost:27017/youtube'
        mongoose.connect(DB_URI);
        console.log("MongoDB connected successfuly!!");
    } catch (error) {
        console.log("Error connecting MongoDB!!");
    }
}

export default dbConnection