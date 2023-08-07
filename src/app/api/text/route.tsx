import { NextApiRequest, NextApiResponse } from "next";
import MongoConnection from "@/utils/MongoConnection";
import Video from "@/Models/VideoSchema"
import Section from "@/Models/SectionSchema"
import Course from "@/Models/CourseSchema"
import { request } from "http";
import { v4 as uuidv4 } from 'uuid';




export async function POST(req:any) {
    
  await MongoConnection()
  console.log("connected")

  const  messages  = await req.json()


  console.log(uuidv4())

  const video = new Video(messages)
  const course = new Course ({
    id:uuidv4(),
    title:"MERN"
  })



  console.log(`saved: ${course}`)

    
}

