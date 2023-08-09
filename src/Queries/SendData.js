
function SendData (route,data){
    fetch(`http://localhost:3000/api/${route}`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
          "Content-Type": "application/json",
        }
      })
      console.log("hello")
}

export default SendData