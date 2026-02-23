import { comments } from "../data"


/**
 * - Get Req for dynamic routes
 */
export async function GET(_req:Request, {params}:{params: Promise<{id:string}>}){

    const {id} = await params

    const comment = comments.find((item)=> item.id === parseInt(id))
    return Response.json(comment)
}

/**
 * - Petch Req for dynamic routes
 */

export async function PATCH(req:Request, {params}:{params: Promise<{id:string}>}) {
    const {id} = await params
    const body = await req.json()
    const {author} = body

    const findIndex = comments.findIndex((item)=> item.id === parseInt(id))
    comments[findIndex].author = author

    return Response.json(comments[findIndex])

    
}


/**
 * - DELETE Req for dynamic routes
 */

export async function DELETE(_req:Request, {params}:{params: Promise<{id:string}>}) {
    const {id} = await params

    // const findIndex = comments.findIndex((item)=> item.id === parseInt(id))
    // comments.splice(findIndex,1)
   const newComments = comments.filter((item)=>item.id != parseInt(id))

    return Response.json(newComments)

    
}