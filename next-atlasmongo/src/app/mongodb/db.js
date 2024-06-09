
import mongoose from "mongoose";

const DBconnect = async()=>
    {
        try{

            await mongoose.connect("mongodb://localhost:27017/recipi");
            console.log("DB connected successful");
        }catch(error){
            console.log(error);
        }
       
    }
    export default DBconnect;