
import mongoose,{Schema} from "mongoose";

const foodSchems = new Schema({
    foodName:String,
    price:Number,
    type:String,
})

const recipi = mongoose.models.recipi || mongoose.model("recipi",foodSchems);
export default recipi;