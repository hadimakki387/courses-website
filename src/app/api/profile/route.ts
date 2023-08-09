import Plan from "@/Models/PlansSchema"
import MongoConnection from "@/utils/MongoConnection"
import Payment from "@/Models/PaymentsSchema"
import Video from "@/Models/VideoSchema"

export async function GET(req:any,res:any){
    await MongoConnection()

    const plans = await Plan.find()
    const videos = await Video.find()
  

    return new Response(JSON.stringify({plans:plans,videos:videos}))
}

export async function POST(req:any,res:any){
    const body = await req.json()
    console.log(body)
    await MongoConnection()
    const payment = new Payment({
        img:body.billingImg,
        planType:body.plan,
        payerID:"fksdfkfjsdfk2342k34guy"
    })
    payment.save()
}