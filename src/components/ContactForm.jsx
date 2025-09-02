
"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

export default function ContactForm() {
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Get last segment of URL automatically
  const slug = pathname.split("/").filter(Boolean).pop() || "home";
  const page_name = slug.replace(/-/g, " ");
  const page_url = `https://trupeakhealth.in${pathname}`;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const response = await fetch(
        "https://backend.trupeakhealth.in/wp-json/custom/v1/submit-inquiry",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            page_name,
            page_url,
          }),
        }
      );

      if (response.ok) {
        setSuccess(true);
        setFormData({ full_name: "", email: "", phone_number: "" });
      } else {
        console.error("Form submission failed");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: "url('/images/doctorimages.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left Card */}
        <div className="bg-two text-white rounded-3xl p-10 shadow-lg animate-slideInLeft">
          <h2 className="text-4xl font-bold text-[#f5d88c] mb-6">Contact Us</h2>
          <p className="text-lg leading-relaxed">
            We’re here to support your journey <br /> to optimal health.
          </p>
        </div>

        {/* Right Card */}
        <div className="bg-two text-white rounded-3xl p-10 shadow-lg animate-slideInRight">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-semibold">Full Name:</label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-semibold">Phone Number:</label>
              <input
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="text-2xl bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full w-full md:w-auto"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>

            {success && (
              <p className="text-green-400 mt-3 font-semibold">
                Form submitted successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}


// import React, { useState } from "react";
// import { usePathname } from "next/navigation";
// import nodemailer from "nodemailer";
// // This API handler will live in the same file for demo purposes
// async function sendMail(data) {
//   const nodemailer = (await import("nodemailer")).default;

//   // Replace with your cPanel mail server details
//   const transporter = nodemailer.createTransport({
//     host: "mail.trupeakhealth.com", // usually mail.yourdomain.com
//     port: 465, // 465 for SSL, 587 for TLS
//     secure: true, // true for 465, false for 587
//     auth: {
//       user: process.env.SMTP_USER, // e.g. "info@trupeakhealth.com"
//       pass: process.env.SMTP_PASS, // your cPanel email password
//     },
//   });

//   const mailOptions = {
//     from: `"Trupeak Health" <${process.env.SMTP_USER}>`,
//     to: "info@trupeakhealth.com", // where you want to receive emails
//     subject: "New Inquiry from Trupeak Website",
//     html: `
//       <h3>New Inquiry Received</h3>
//       <p><strong>Name:</strong> ${data.full_name}</p>
//       <p><strong>Email:</strong> ${data.email}</p>
//       <p><strong>Phone:</strong> ${data.phone_number}</p>
//       <p><strong>Page Name:</strong> ${data.page_name}</p>
//       <p><strong>Page URL:</strong> <a href="${data.page_url}">${data.page_url}</a></p>
//     `,
//   };

//   await transporter.sendMail(mailOptions);
// }


// export default function ContactForm() {
//   const pathname = usePathname();
//   const [formData, setFormData] = useState({
//     full_name: "",
//     email: "",
//     phone_number: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   // Get last segment of URL automatically
//   const slug = pathname.split("/").filter(Boolean).pop() || "home";
//   const page_name = slug.replace(/-/g, " ");
//   const page_url = `https://trupeakhealth.in${pathname}`;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setSuccess(false);

//     try {
//       // 1. Save inquiry in WordPress backend
//       await fetch("https://backend.trupeakhealth.in/wp-json/custom/v1/submit-inquiry", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           ...formData,
//           page_name,
//           page_url,
//         }),
//       });

//       // 2. Send email with NodeMailer (server-side)
//       await sendMail({
//         ...formData,
//         page_name,
//         page_url,
//       });

//       setSuccess(true);
//       setFormData({ full_name: "", email: "", phone_number: "" });
//     } catch (err) {
//       console.error("Error submitting form:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="relative bg-cover bg-center py-16"
//       style={{ backgroundImage: "url('/images/doctorimages.jpg')" }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//       <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
//         {/* Left Card */}
//         <div className="bg-two text-white rounded-3xl p-10 shadow-lg animate-slideInLeft">
//           <h2 className="text-4xl font-bold text-[#f5d88c] mb-6">Contact Us</h2>
//           <p className="text-lg leading-relaxed">
//             We’re here to support your journey <br /> to optimal health.
//           </p>
//         </div>

//         {/* Right Card */}
//         <div className="bg-two text-white rounded-3xl p-10 shadow-lg animate-slideInRight">
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <label className="block mb-1 font-semibold">Full Name:</label>
//               <input
//                 type="text"
//                 name="full_name"
//                 value={formData.full_name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
//                 placeholder="Enter your full name"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block mb-1 font-semibold">Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block mb-1 font-semibold">Phone Number:</label>
//               <input
//                 type="tel"
//                 name="phone_number"
//                 value={formData.phone_number}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
//                 placeholder="Enter your phone number"
//                 required
//               />
//             </div>

//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 className="text-2xl bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full w-full md:w-auto"
//                 disabled={loading}
//               >
//                 {loading ? "Submitting..." : "Submit"}
//               </button>
//             </div>

//             {success && (
//               <p className="text-green-400 mt-3 font-semibold">
//                 Form submitted successfully!
//               </p>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
