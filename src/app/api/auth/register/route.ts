import { NextResponse } from "next/server";
import { hash } from 'bcrypt'
import mongoose from 'mongoose';
import user from "@/src/(models)/user";

export async function POST(request: Request) {
    try {
        type RequeteJson = {
            email: string;
            password: string;
            nickname: string;
        }
        const { email, password, nickname } = await request.json() as RequeteJson;
        const hashedPassword = await hash(password, 10);
        const sqlUser: string | undefined = process.env.SECRET_DB_URL;
        if (sqlUser !== undefined) {
            await mongoose.connect(sqlUser)
            console.log("Connexion à MongoDB réussie !")
        } else {
            return NextResponse.json({ message: `La variable d'environnement SECRET_DB_URL n'est pas définie.` }, { status: 500 });
        }
        try {

            const userData = {
                email: email,
                password: hashedPassword,
                nickname: nickname,
                image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            console.log(userData)
            const instanceOfUser = new user(userData);
            await instanceOfUser.save();
            return NextResponse.json({ message: 'Impeccable' }, { status: 200 })
        } catch (e) {
            console.log(e)
            return NextResponse.json({ error: "Email deja utilise" }, { status: 500 })
        }

    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
} 