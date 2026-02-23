import type { NextRequest } from "next/server";
import { comments } from "./data";

// export async function GET() {

//     return  Response.json({comments})
    
// }




/**
 * - URL http://localhost:3000/day10/comments?query=explanation
export async function GET(req:NextRequest) {
  
  const searchParame = req.nextUrl.searchParams;

  const query = searchParame.get("query")

  console.log(query)

  const filterQeryParam = query ? comments.filter((item)=> item.message.includes(query)) : comments

  return  Response.json(filterQeryParam)
  
}
 */



   
