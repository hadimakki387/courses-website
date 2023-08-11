
async function SendData (route,data,setRes){
  const s = await fetch(`https://mern-course.netlify.app/api/${route}`,{
    method:"POST",
    body:JSON.stringify(data),
    headers:{
      "Content-Type": "application/json",
    }
  })
  const r = await s.json()
  setRes(r)
}

export default SendData