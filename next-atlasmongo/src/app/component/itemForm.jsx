"use client";
import submitItem from "./action";
export default function ItemForm()
{
    return (
        <div className="max-w-xl max-auto">
            <form action={submitItem}>
                <div className="mt-30">
                    <input type="text" name="foodName" placeholder="Enter Food Name"></input>
                    <br/>
                    <input type="text" name="price" placeholder="Enter Food price"></input>
                    <br/>
                    <input type="text" name="type" placeholder="Enter Food type"></input>
                </div>
                <button type="submit"className="px-5 py-1 border border-orange-600">save item</button>
            </form>
        </div>
    )
}