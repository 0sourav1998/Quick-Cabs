import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName : {
        firstName : {
            type : String ,
            required : true ,
            minlength : [3 , "First Name must be atleast 3 charecters"]
        },
        lastName : {
            type : String,
            minlength : [3,"Last Name must be at least 3 characters"]
        }
    } ,
    email : {
        type : String ,
        required : true ,
        unique : true ,
        minlength : [5 , "Email must be at least 5 characters"]
    } ,
    password : {
        type : String ,
        required : true ,
    } ,
    socketId : {
        type : String ,
    }
})

const User = mongoose.model("User",userSchema);
export default User ;