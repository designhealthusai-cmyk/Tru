import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { full_name, email, phone_number, page_name, page_url } = await req.json();

    if (!full_name || !email || !phone_number) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "mail.trupeakhealth.in",
      port: 465,
      secure: true,
      auth: {
        user: "info@trupeakhealth.in",
        pass: process.env.CPANEL_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Trupeak Website" <info@trupeakhealth.in>`,
      to: "info@trupeakhealth.in",
      subject: `New Booking Request - ${page_name}`,
      html: `
        <h3>New Booking Request</h3>
        <p><strong>Name:</strong> ${full_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone_number}</p>
        <p><strong>Page:</strong> ${page_url}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Email error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
