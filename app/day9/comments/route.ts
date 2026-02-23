import { comments } from "./data";

export async function GET() {

    return  Response.json({comments})
    
}

export async function POST(req:Request){
  const comment = await req.json()  
  comments.push(comment)

  return new Response(JSON.stringify(comment),{
    headers:{
        "Content-Type":"application/json"
    },
    status:201
  })

}