import { authOptions } from "@/pages/api/auth/[...nextauth]"
import { connectDB } from "@/util/database"
import { getServerSession } from "next-auth"
import AlertLogin from "../component/AlertLogin"
import ListItem from "./ListItem"

export default async function List() {

    const db = (await connectDB).db('todo')
    let result = await db.collection('post').find().toArray()
    // console.log(result)
    result = result.map((name)=>{
        name._id = name._id.toString()
        return name
    })
    let session = await getServerSession(authOptions)
    return (
        <>
        {session ?   <div className="">
               <ListItem result={result}/>
            </div> : <AlertLogin/>}
          
        </>
    )
}