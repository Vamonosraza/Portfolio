// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';


export async function POST(req, res) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromEmail = process.env.FROM_EMAIL; 
    
    const { body} = await req;
    const { email, subject, message } = body;

    try {
        const data = await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: subject,
        react: <>
        <h1>{subject}</h1>
        <p>Thank you for reaching out!</p>
        <p>New message submit</p>
        <p>{message}</p></>,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
