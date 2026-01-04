"use server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  try {
    await resend.emails.send({
      from: 'Contact Form <info@natboringnails.nl>',
      to: 'nathaljanebbeling@gmail.com',
      subject: `[Natboringnails] : ${subject}`,
      replyTo: formData.get('email') as string,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    return {
      success: true,
      message: "Message sent! I will get back to you soon."
    };
  } catch (error) {
    console.error("Resend Error:", error);
    return {
      success: false,
      message: "The email service is temporarily down. Please try again later or contact me via Instagram."
    };
  }
}