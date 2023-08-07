import { NextApiRequest } from "next";


export async function GET(res:any){

    return new Response(JSON.stringify("hello"))
}   

