import mongoose from "mongoose";


const connectToDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        .then(()=>console.log("DB Connected Successfully"))
    } catch (error) {
        console.log("Error While Connecting With DB")
    }
}

export default connectToDB ;