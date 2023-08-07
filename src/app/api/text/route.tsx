import { NextApiRequest, NextApiResponse } from "next";
import MongoConnection from "@/utils/MongoConnection";
import Video from "@/Models/VideoSchema"
import { request } from "http";





export async function POST(req:any) {
    
  await MongoConnection()
  console.log("connected")
  const  messages  = await req.json()
  console.log(messages)

  const video = new Video(messages)
  video.save()

  console.log(`saved: ${messages}`)

    
}

