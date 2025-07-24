import { Resend } from 'resend';
import WelcomeTemplate from '@/emails/WelcomeEmail';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env['RESEND-API-KEY']);

export async function POST(request: Request) {
    await resend.emails.send({
        from: 'test@resend.dev',
        to: 'nguyenvietson2002@gmail.com',
        subject: 'Welcome to our service!',
        react: <WelcomeTemplate name="Son" />
    },);
    return NextResponse.json({});
}