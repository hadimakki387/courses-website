import MongoConnection from "@/utils/MongoConnection";
import Video from "@/Models/VideoSchema";
import Section from "@/Models/SectionSchema";
import Course from "@/Models/CourseSchema";
import { v4 as uuidv4 } from "uuid";

export async function GET(req: any, res: any) {
  await MongoConnection();
  const courses = await Course.find();
  const sections = await Section.find();
  const videos = await Video.find();

  const section = new Section({
    id: uuidv4(),
    title: "Introduction to HTML",
    courseID: "73382fd0-846b-4f95-80db-598abfdffbb2",
  });
  const course = new Course({
    id: "73382fd0-846b-4f95-80db-598abfdffbb2",
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
      ID:uuidv4(),
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
