// import type { NextApiRequest } from "next"
import { cookies, headers } from "next/headers"

// Headerse from server to client 
export async function GET() {
    // 1 Way
    // const reqHeaders = new Headers(req.headers)
    // console.log(reqHeaders.get("Authorization"))

    // other way
    const headersList = await headers()
    console.log(headersList.get("Authorization"))
    // return new Response("Hello From Profile server")

    // const themeCookie =  req.cookies.get("theme")

    const cookieStore = await cookies()
    const themeCookie = cookieStore.get("theme");
    console.log("Ckkoist",themeCookie);
    
  return new Response("<h1>Hello From Profile server</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark"
    }
  });
}