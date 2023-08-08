import Course from "@/Models/CourseSchema";
import Section from "@/Models/SectionSchema";
import Video from "@/Models/VideoSchema";
import MongoConnection from "@/utils/MongoConnection";

export async function GET(res: any) {

  await MongoConnection()

  const videos = await Video.find();
  const sections = await Section.find();
  const courses = await Course.find();

  return new Response(
    JSON.stringify({ videos: videos, sections: sections, courses: courses })
  );
}
