import NextAuth from "next-auth/next";

declare module "next-auth"{
    interface Session{
        user : {
            id: string | number,
            name : string,
            email : string,
            avatar : string,
            accessToken : string
        }
    }
}
