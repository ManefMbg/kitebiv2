import mongoose from "mongoose";
// import dotenv from "dotenv";
// dotenv.config()

const connection = async () => {
    try{
        const db = mongoose.connect(process.env.URL)
        console.log("Connected")
        return db
    } catch(err) {
        console.log("Error: " + err)
    }
    
}

export default connection 