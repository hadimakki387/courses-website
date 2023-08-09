import Plan from "@/Models/PlansSchema"
import MongoConnection from "@/utils/MongoConnection"
import Payment from "@/Models/PaymentsSchema"

export async function GET(req:any,res:any){
    await MongoConnection()

    const plans = await Plan.find()
  

    return new Response(JSON.stringify(plans))
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