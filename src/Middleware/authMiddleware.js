import { redirect } from "react-router"

const authMiddleware = async (params , next)=> {
    const getUser =JSON.parse(localStorage.getItem("user"))
    // console.log(getUser)
    // console.log(params)
    // console.log(next)
   
   if(!getUser){
    throw redirect("/Login")
   }

  
}
export default authMiddleware