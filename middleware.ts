import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {

  const res = NextResponse.next()

  res.headers.set("Coustom-value",'Coustom-data')

  const themePre = req.cookies.get("theme")
  if(!themePre){
    res.cookies.set("theme","dark")
  }

  return res

  // if(req.nextUrl.pathname ==="/day10/profile"){
  //   return NextResponse.redirect(new URL("/day9/hello", req.nextUrl))
  // }
  // return NextResponse.redirect(new URL("/", req.url));

}

export const config = {
  matcher: ["/day10/profile/:path*"],
};