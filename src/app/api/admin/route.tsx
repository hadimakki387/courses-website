import MongoConnection from "@/utils/MongoConnection";
import Video from "../../../Models/VideoSchema";
import Admin from "../../../Models/AdminSchema";
import Section from "../../../Models/SectionSchema";
import Plan from "../../../Models/PlansSchema";
import Course from "../../../Models/CourseSchema";
import bcrypt from "bcrypt";
import Payment from "../../../Models/PaymentsSchema";
import User from "../../../Models/UserSchema";
import { utapi } from "uploadthing/server";
import {
  AddNewCourse,
  AddSection,
  AddVideo,
  DeclineRequest,
  DeleteSction,
  NewAdmin,
  approveRequest,
} from "@/controller/admin";

export async function GET(req: any, res: any) {
  await MongoConnection();
  const courses = await Course.find();
  const sections = await Section.find();
  const videos = await Video.find();
  const payments = await Payment.find();
  const users = await User.find();
  const plans = await Plan.find();

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
      plans: plans,
    })
  );
}

export async function POST(req: any, res: any) {
  await MongoConnection();

  const videos = await Video.find();
  const message = await req.json();
  console.log(message);

  if (message.duration) {
    return AddVideo(message, videos);
  }
  if (message.sectionName) {
    return AddSection(message);
  }
  if (message.toDO === "deleteVideo") {
    return await Video.findOneAndDelete({ _id: message.UUID });
  }
  if (message.toDo === "fetchVideoUpdate") {
    return await Video.findOneAndReplace({ _id: message.Data._id }, message.Data);
  }
  if (message.toDo === "deleteSection") {
    return await DeleteSction(videos, message);
  }
  if (message.adminEmail) {
    return checkAdmin();
  }
  if (message.newAdmin) {
    return await NewAdmin(message);
  }
  if (message.toDo === "approveRequest") {
    return await approveRequest(message);
  }
  if (message.toDo === "declineRequest") {
    return await DeclineRequest(message);
  }
  if (message.toDo === "AddNewCourse") {
    return AddNewCourse(message);
  }
}

const checkAdmin = () => {};
