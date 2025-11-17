import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, message, lang = 'bg' } = body;

        const errors = {
            emptyFields: lang === "bg" ? "Липсващи полета." : "Missing fields.",
            invalidEmail: lang === "bg" ? "Невалиден формат на email адрес." : "Invalid email format.",
            failed: lang === "bg" ? "Възникна грешка." : "Failed to send message",
            subject: lang === "bg" ? `Ново съобщение от ${name}` : `New message from ${name}`
          };

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: errors.emptyFields },
                { status: 400 }
            );
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            return NextResponse.json(
                { error: errors.invalidEmail },
                { status: 400 }
            );
        }

        await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: process.env.TO_EMAIL,
            replyTo: email,
            subject: errors.subject ,
            html: `
            <p><strong>${lang === "bg" ? "Име" : "Name"}:</strong> ${name}</p>
            <p><strong>${lang === "bg" ? "Имейл" : "Email"}:</strong> ${email}</p>
            <p><strong>${lang === "bg" ? "Съобщение" : "Message"}:</strong></p>
            <p>${message}</p>
          `,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error("Error sending email", err);
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );
    }
}
