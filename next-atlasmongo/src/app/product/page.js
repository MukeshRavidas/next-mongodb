
import React from "react";
import DBconnect from "../mongodb/db";
import recipi from "../mongodb/model/food";

function productPage()
{
    const handleServer=async()=>{
        "use server";
        await DBconnect();
        let recipiInfo = await recipi.find({});
        console.log(recipiInfo);
        console.log("server action activated");
    };
    return(
        <div className="max-w-xl mx-auto mt-20">
            <div>
                <form>
                    <button formAction={handleServer}>Get server</button>
                </form>
            </div>
        </div>
    );
}
export default productPage;