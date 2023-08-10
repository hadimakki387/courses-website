import Admin from "@/Models/AdminSchema";
import Course from "@/Models/CourseSchema";
import Payment from "@/Models/PaymentsSchema";
import Section from "@/Models/SectionSchema";
import User from "@/Models/UserSchema";
import Video from "@/Models/VideoSchema";
import bcrypt from "bcrypt";
import { utapi } from "uploadthing/server";

export const AddVideo = (message: any, videos: any) => {
  const videoToSave = {
    ...message,
    videoId: videos.length + 1,
  };
  console.log(message)
  const video = new Video(videoToSave);
  video.save();
};

export const AddSection = (message: any) => {
  const section = new Section({
    title: message.sectionName,
    courseID: message.courseName,
  });
  section.save();
  console.log("section Saved");
};

export const DeleteSction = async (videos: any, message: any) => {
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
};


export const NewAdmin =async (message:any)=>{
    const admin = new Admin({
        email: message.newAdmin,
        password: await bcrypt.hash(message.password, 10),
      });
      admin.save();
}

export const approveRequest = async(message:any)=>{
    const { payment, plan } = message;
    try {
      await User.findByIdAndUpdate(
        { _id: payment.payerID },
        { plan: plan._id, subscribed_at: new Date() }
      );
      await Payment.findOneAndDelete({ _id: payment._id });
      await utapi.deleteFiles(payment.imgID);
      console.log("payment approved");
      return new Response(JSON.stringify("request approved"));
    } catch (err) {
      console.log(`ERROR!: ${err}`);
      return new Response(JSON.stringify(err));
    }
}

export const DeclineRequest = async(message:any)=>{
    const { payment, plan } = message;
    try {
      await Payment.findOneAndDelete({ _id: payment._id });
      await utapi.deleteFiles(payment.imgID);
      console.log("payment declined");
      return new Response(JSON.stringify("request declined"));
    } catch (err) {
      console.log(`ERROR!: ${err}`);
      return new Response(JSON.stringify(err));
    }
}

export const AddNewCourse = (message:any)=>{
    try {
        const course = new Course({
          title: message.data,
        });
        course.save();
        return new Response(JSON.stringify("course saved"));
      } catch (err) {
        console.log(err);
        return new Response(JSON.stringify(err));
      }
}