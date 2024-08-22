import { NextResponse } from "next/server";

const user = true;
export const middleware = (request) => {
  if (!user) {
    return NextResponse.rewrite(new URL("/about", request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/user-profile", "/blog"],
};
