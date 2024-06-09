"use server";
import DBconnect from "../mongodb/db";
import recipi from "../mongodb/model/food";
const submitItem = async(formData)=>
    {
        
        await DBconnect();
        let foodName = formData.get("foodName");
        let foodPrice = formData.get("price");
        let foodType = formData.get("type");
        await recipi.create({foodName:foodName,price:foodPrice,type:foodType});
        
        console.log(foodName,foodPrice,foodType);
    };
    export default submitItem;