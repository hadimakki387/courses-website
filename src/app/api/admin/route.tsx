import MongoConnection from "@/utils/MongoConnection";
import Video from "@/Models/VideoSchema";
import Admin from "@/Models/AdminSchema";
import Section from "@/Models/SectionSchema";
import Plan from "@/Models/PlansSchema";
import Course from "@/Models/CourseSchema";
import bcrypt from "bcrypt";
import Payment from "@/Models/PaymentsSchema";
import User from "@/Models/UserSchema";

export async function GET(req: any, res: any) {
  await MongoConnection();
  const courses = await Course.find();
  const sections = await Section.find();
  const videos = await Video.find();
  const payments = await Payment.find();
  const users = await User.find();
  const plans = await Plan.find()

  const section = new Section({
    title: "Introduction to HTML",
    courseID: "64d203059072d972ec4d71d8",
  });
  const course = new Course({
    title: "MERN",
  });

  return new Response(
    JSON.stringify({
      courses: courses,
      sections: sections,
      videos: videos,
      payments: payments,
      users: users,
      plans:plans
    })
  );
}

export async function POST(req: any, res: any) {
  await MongoConnection();

  const videos = await Video.find();
  const message = await req.json();
  console.log(message);

  if (message.duration) {
    AddVideo(message, videos);
  }
  if (message.sectionName) {
    AddSection(message);
  }
  if (message.toDO === "deleteVideo") {
    await Video.findOneAndDelete({ _id: message.UUID });
  }
  if (message.toDo === "fetchVideoUpdate") {
    await Video.findOneAndReplace({ _id: message.Data._id }, message.Data);

    console.log("hl");
  }
  if (message.toDo === "deleteSection") {
    await DeleteSction(videos, message);
  }
  if (message.adminEmail) {
    checkAdmin();
  }
  if (message.newAdmin) {
    const admin = new Admin({
      email: message.newAdmin,
      password: await bcrypt.hash(message.password, 10),
    });
    admin.save();
  }
  if(message.toDo==="approveRequest"){
    const {payment,plan} = message
    try{
      
        await User.findByIdAndUpdate({_id:payment.payerID},{plan:plan._id})
        await Payment.findOneAndDelete({_id:payment._id})
        console.log("payment approved")
    }catch(err){
        console.log(`ERROR!: ${err}`)
    }
    
    
  }
  if(message.toDo==="declineRequest"){
    const {payment,plan} = message
    try{
        await Payment.findOneAndDelete({_id:payment._id})
        console.log("payment declined")
    }catch(err){
        console.log(`ERROR!: ${err}`)
    }
    
    
  }
}

const AddVideo = (message: any, videos: any) => {
  const videoToSave = {
    ...message,
    videoId: videos.length + 1,
  };

  const video = new Video(videoToSave);
  video.save();
};

const AddSection = (message: any) => {
  const section = new Section({
    title: message.sectionName,
    courseID: message.courseName,
  });
  section.save();
  console.log("section Saved");
};

const DeleteSction = async (videos: any, message: any) => {
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

const checkAdmin = () => {};
