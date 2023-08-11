
async function SendData (route,data,setRes){
  const s = await fetch(`http://localhost:3000/api/${route}`,{
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