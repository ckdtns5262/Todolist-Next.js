import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"


export default async function Edit(props) {

    const db = (await connectDB).db('todo')
    let result = await db.collection('post').findOne({
        _id: new ObjectId(props.params.id)
    })
    // console.log(result)


    return (
        <div className="bg-white p-2 border border-black rounded-full w-[55vw] mt-3">
            <form action="/api/post/edit" method="POST" className="justify-between">
                <input name="_id" defaultValue={result._id} style={{display : "none"}}/>
                <input name="content" type="text" defaultValue={result.content}  style={{outline : 'none'}}/>
                <input name="time" type="text" defaultValue={result.time} style={{outline : 'none'}} />
                <button className="bg-blue-300 rounded-md border-lime-400 hover:bg-red-700" type="submit">수정</button>
            </form> 
        </div>
    )
}