import { NextAuthConfig } from 'next-auth';

export const authPages = ["/login", "/register"];

export default {
  pages: {
    signIn: '/login'
  },
  trustHost: true,
  providers: [
    // added later in index.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      let isLoggedIn = !!auth?.user

      const isProtectedPage = !authPages.find(path => nextUrl.pathname.startsWith(path))

      if (isProtectedPage) {
        return isLoggedIn
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl))
      }

      return true
    }
  }
} satisfies NextAuthConfig
