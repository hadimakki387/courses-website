import MongoConnection from "@/utils/MongoConnection";
import Video from "@/Models/VideoSchema";
import Section from "@/Models/SectionSchema";
import Course from "@/Models/CourseSchema";
import { v4 as uuidv4 } from "uuid";
import mongoose from "mongoose";

export async function GET(req: any, res: any) {
  await MongoConnection();
  const courses = await Course.find();
  const sections = await Section.find();
  const videos = await Video.find();

  const section = new Section({
    title: "Introduction to HTML",
    courseID:'64d203059072d972ec4d71d8',
  });
  const course = new Course({
    title: "MERN",
  });
  

  return new Response(
    JSON.stringify({ courses: courses, sections: sections, videos: videos })
  );
}

export async function POST(req: any, res: any) {
  await MongoConnection();

  const videos = await Video.find();
  const messages = await req.json();
  console.log(messages.toDO);

  if (messages.duration) {
    const videoToSave = {
      ...messages,
      videoId: videos.length + 1,
    };
    

    const video = new Video(videoToSave);
    video.save();
  }
  if (messages.sectionName) {
    const section = new Section({
      title: messages.sectionName,
      id: uuidv4(),
      courseID: messages.courseName,
    });
    section.save();
    console.log("section Saved");
  }
  if (messages.toDO === "deleteVideo") {
    
    await Video.findOneAndDelete({_id:messages.UUID})
    
  }
}
