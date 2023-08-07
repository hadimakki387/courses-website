import MongoConnection from "@/utils/MongoConnection";
import Video from "@/Models/VideoSchema";
import Section from "@/Models/SectionSchema";
import Course from "@/Models/CourseSchema";
import { v4 as uuidv4 } from "uuid";

export async function GET(req: any, res: any) {
  await MongoConnection();
  console.log("connected");
  const courses = await Course.find();
  const sections = await Section.find();
  const videos = await Video.find();

  const section = new Section({
    id:uuidv4(),
    title:"Introduction to HTML",
    courseID:"73382fd0-846b-4f95-80db-598abfdffbb2"
  })
 
 section.save()
 
  return new Response(
    JSON.stringify({ courses: courses, sections: sections, videos: videos })
  );
}

export async function POST(req: any, res: any) {
  await MongoConnection();
  console.log("connected");

  const videos = await Video.find();
  const messages = await req.json();

  const videoToSave = {
    ...messages,
    videoId: videos.length + 1,
  }

  console.log(videoToSave);
 
  const video = new Video(videoToSave);
  video.save()


  console.log(`saved: ${videoToSave}`);
}
