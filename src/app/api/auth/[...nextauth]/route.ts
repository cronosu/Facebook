import NextAuth, { CredentialsSignin } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import mongoose from "mongoose";
import user from "../../../../(models)/user";
import { compare } from "bcrypt";
//import { NextResponse } from "next/server";
export const { auth, signIn, signOut, handlers: { GET, POST } } = NextAuth({

    providers: [
        CredentialsProvider({
            name: "Identifiant",
            credentials: {
                email: {
                    label: "Email",
                    type: "email"
                },
                password: {
                    label: "Mot de passe",
                    type: "password"
                },
            },
            async authorize(credentials, req) {
                try {
                    type User = {
                        email: string;
                        name: string;
                        image: string;
                    }

                    const sqlUser: string | undefined = process.env.SECRET_DB_URL;
                    if (sqlUser !== undefined) {
                        await mongoose.connect(sqlUser)
                        const responce = await user.findOne({ email: credentials.email });
                        /*  if (responce === null) {
                              return null
                          }*/
                        const correctPassword = await compare(credentials.password.toString(), responce.password);


                        if (correctPassword) {
                            const User: User = {
                                email: responce.email,
                                name: responce.nickname,
                                image: responce.image,
                            };
                            return User;
                        }

                    }
                }
                catch (e) {
                    return null
                }

            },
        })
    ], secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login',
        /*  error: '/accueil'*/

    },
    callbacks: {
        /*  signIn: async () => {
              console.log("test");
              return false*/
    }

});



