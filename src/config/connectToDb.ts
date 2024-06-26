import mongoose from "mongoose"

const connectToDb = async()=>{

    try{
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("Database has been connected...")
    }catch(error){
        console.log(`ERROR:${error}`)
        process.exit(1);
    }
}

export default connectToDb;