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
    courseID: "64d203059072d972ec4d71d8",
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
  const message = await req.json();
  console.log(message);

  if (message.duration) {
    AddVideo(message,videos)
  }
  if (message.sectionName) {
    AddSection(message)
  }
  if (message.toDO === "deleteVideo") {
    await Video.findOneAndDelete({ _id: message.UUID });
  }
  if (message.toDo === "fetchVideoUpdate") {
    await Video.findOneAndReplace({ _id: message.Data._id }, message.Data);
    
    console.log("hl")
  }
  if (message.toDo === "deleteSection") {
   await DeleteSction(videos,message)
  }
}

const AddVideo = (message:any,videos:any)=>{
  const videoToSave = {
    ...message,
    videoId: videos.length + 1,
  };

  const video = new Video(videoToSave);
  video.save();
}

const AddSection=(message:any)=>{
  const section = new Section({
    title: message.sectionName,
    courseID: message.courseName,
  });
  section.save();
  console.log("section Saved");
}

const DeleteSction = async (videos:any,message:any)=>{
  try {
    for (const video of videos) {
      if (video.sectionID === message._id) {
        await Video.findByIdAndDelete(video._id);
      }
    }
    await Section.findByIdAndDelete(message._id);
  } catch (error) {
    console.error("Error deleting section and associated videos:", error);
  }
}