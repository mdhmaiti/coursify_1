import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware


export default authMiddleware({
      //publicRoutes: [  '/','/api/:path*',],
      publicRoutes: [  '/','/api/:path*'],

      afterAuth(auth, req, evt) {
        // handle users who aren't authenticated
        if (!auth.userId && !auth.isPublicRoute) {
          return redirectToSignIn({ returnBackUrl: req.url });
        }
        // redirect them to organization selection page
       
       
      }
      //publicRoutes: ['/', '/api/getAuthenticatedUserId'], i did not defined the home as a public route for now i will do it later 
    })

    export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 