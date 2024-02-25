
import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google"
import CredentialsProviders from "next-auth/providers/credentials";
import GitHub from "@auth/core/providers/github"

const credentialsConfig = CredentialsProviders({
  name: "Identifiant",
  credentials: {
    username: {
      label: "pseudo",
      type: "text"
    },
    password: {
      label: "Mot de passe",
      type: "password"
    },
  },
  async authorize(credentials) {
    if (credentials.username === "cronos" && credentials.password === "123")
      return {
        name: "cronos",
      };
    else return null 
  },
})


const config = {
  providers: [credentialsConfig, Google,
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET
    })],
  /*pages: {
    signIn: '/auth/signin',
   
 
  }*/



} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config)