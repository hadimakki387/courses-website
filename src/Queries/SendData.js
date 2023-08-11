async function SendData (route,data,setRes){
  try {
    const s = await fetch(`https://mern-course.netlify.app/api/${route}`,{
      method:"POST",
      body:JSON.stringify(data),
      headers:{
        "Content-Type": "application/json",
      }
    })
    if (!s.ok) {
      console.log(res.status)
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    const r = await s.json()

    setRes(r)

  } catch (error) {
    console.log(error)
  }
}

export default SendData