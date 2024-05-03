import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import mongoose from "mongoose";
import user from "./src/(models)/user";
import { compare } from "bcrypt";
import authConfig from "./auth.config"

export const { auth, handlers, signIn, signOut } = NextAuth({
    session: { strategy: "jwt" },
    ...authConfig,
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
                         if (responce === null) {
                            throw new Error("L'utilisateur n'existe pas");
                        }
                        const correctPassword = await compare(credentials.password.toString(), responce.password);
                        if (correctPassword) {
                            const User: User = {
                                email: responce.email,
                                name: responce.nickname,
                                image: responce.image,
                            };
                            return User ;
                        }

                    }
                }
                catch (e) {
                  throw new Error("Erreur lors de la connexion") 
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



