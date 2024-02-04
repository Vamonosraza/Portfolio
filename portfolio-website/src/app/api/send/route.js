// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';


export async function POST() {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromEmail = process.env.FROM_EMAIL;   
    try {
        const data = await resend.emails.send({
        from: fromEmail,
        to: `martinezjessy393@gmail.com`,
        subject: 'Hello world',
        react: <><p>Email Body</p></>,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
