"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
};

export async function sendEmail(formData: FormData) {
  const senderEmail = formData.get("senderEmail") as string | null;
  const senderMessage = formData.get("message") as string | null;

  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid Email",
    };
  }

  if (!validateString(senderMessage, 500)) {
    return {
      error: "Invalid message",
    };
  }

  try {
    // Send the email
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "aboelwafaa213@gmail.com",
      subject: "Message from my contact form",
      reply_to: senderEmail || undefined,
      text: senderMessage!,
    });
  } catch (error: any) {
    return {
      error: error.message,
    };
  }

  return {
    success: true,
  };
}
