import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthConfig } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const authConfig: NextAuthConfig = {
    adapter: PrismaAdapter(prisma),
    providers: [
        // Credentials login
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "Password" },
            },
            async authorize(credentials) {
                const email = credentials?.email;
                const password = credentials?.password;

                if (typeof email !== "string" || typeof password !== "string") return null;

                const user = await prisma.user.findUnique({
                    where: { email },
                });

                if (!user || !user.hashedPassword) return null;

                const passwordMatch = await bcrypt.compare(password, user.hashedPassword);
                return passwordMatch ? user : null;
            },
        }),
        // Google login
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
};

export const { handlers, auth } = NextAuth(authConfig);
