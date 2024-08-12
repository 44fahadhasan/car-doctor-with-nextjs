import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = (req) => {
  const token = cookies(req).get("next-auth.session-token");

  const pathName = req.nextUrl.pathname;

  if (!token) {
    return NextResponse.redirect(
      new URL(`/login?redirectKoro=${pathName}`, req.url)
    );
  }

  //
  return NextResponse.next();
};

// config
export const config = {
  matcher: ["/my-bookings/:path*", "/services/:path*", "/checkout/:path*"],
};
