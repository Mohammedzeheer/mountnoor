import mongoose from "mongoose";

const connectMongo = async()=>{
    try {
        await mongoose.connect(process.env.mongodbUrl);
    } catch (error) {
        console.log('Error connecting to mongodb: ' + error.message);
        throw new Error(error);
    }
}

export default connectMongo