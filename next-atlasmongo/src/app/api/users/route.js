import { NextResponse } from "next/server";
import DBconnect from "@/app/mongodb/db";
import recipi from "@/app/mongodb/model/food";
export async function GET()
{
    await DBconnect();
    return NextResponse.json({result:"Hello api"});
}

export async function POST(request)
{
    const foodData = await request.json();
    console.log(foodData);
    await DBconnect();
    await recipi.create(foodData);
    return NextResponse.json({result:"Post request"});
}