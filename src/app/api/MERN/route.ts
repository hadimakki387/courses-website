import User from "@/Models/UserSchema";
import Course from "../../../Models/CourseSchema";
import Section from "../../../Models/SectionSchema";
import Video from "../../../Models/VideoSchema";
import MongoConnection from "@/utils/MongoConnection";

export async function GET(res: any) {
  await MongoConnection();

  const videos = await Video.find();
  const sections = await Section.find();
  const courses = await Course.find();

  return new Response(
    JSON.stringify({ videos: videos, sections: sections, courses: courses })
  );
}

export async function POST(req: any, res: any) {
  await MongoConnection();

  const body = await req.json();

  if (body.toDo === "AddWatchedVideos") {
    const user = await User.findById(body.user._id);

    // check if he watched this video before
    const isFound = user.watchedVideos.find(
      (video: any) => video === body.PlayingVideo._id
    );

    try {
      // check if the user has watched videos or not
      // if he didnt automatically save the playing video
      if (user.watchedVideos.length !== 0) {
        // if he didnt watch save the playing video
        if (!isFound) {

          const watchedVideos = [...user.watchedVideos, body.PlayingVideo._id];
          const AddWatchedVideos = await User.findOneAndUpdate(
            { _id: user._id },
            { watchedVideos: watchedVideos }
          );
          console.log("not found");
        }

        return new Response(JSON.stringify("user watched this video"));
      } else {

        const watchedVideos = [body.PlayingVideo._id];
        console.log(watchedVideos);
        const AddWatchedVideos = await User.findOneAndUpdate(
          { _id: user._id },
          { watchedVideos: watchedVideos }
        );
        console.log("updated");
        return new Response(JSON.stringify("user watched this video"));
        
      }
    } catch (err) {
      return new Response(JSON.stringify(err));
    }
  }
}
