import Course from "@/Models/CourseSchema";
import Section from "@/Models/SectionSchema";
import Video from "@/Models/VideoSchema";

export async function GET(res: any) {
  const videos = await Video.find();
  const sections = await Section.find();
  const courses = await Course.find();

  return new Response(
    JSON.stringify({ videos: videos, sections: sections, courses: courses })
  );
}
