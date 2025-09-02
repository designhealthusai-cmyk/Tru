"use client";
import React, { useState } from "react";

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    service_interest: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  // ✅ Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const response = await fetch(
        "https://backend.trupeakhealth.in/wp-json/custom/v1/submit-contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log("API Response:", data);

      if (response.ok) {
        setResponseMsg("✅ Thank you! We will contact you soon.");
        setFormData({
          name: "",
          email: "",
          phone_number: "",
          service_interest: "",
          message: "",
        });
      } else {
        setResponseMsg(data.message || "❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponseMsg("❌ Failed to connect to the server. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section
      className="relative bg-cover bg-center py-28 px-4 sm:px-8 md:px-16 lg:px-24 border-three border-b-[36px]"
      style={{ backgroundImage: "url('/images/book.webp')" }}
    >
      {/* Dark overlay */}
      <div className="bg-black/50 absolute inset-0"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 max-w-[1300px] mx-auto">
        {/* ✅ Form Section (First on mobile, second on desktop) */}
        <div className="w-full md:w-1/2 order-1 md:order-2 bg-[#0F2145] text-white rounded-2xl p-6 sm:p-8 shadow-lg">
<form
          onSubmit={handleSubmit}
          className="bg-two rounded-xl p-6 sm:p-8 w-full md:w-1/2 shadow-lg text-white space-y-6"
          aria-label="Contact form"
        >
          {/* Name + Email */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="name" className="block text-sm font-semibold mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 text-black text-sm sm:text-base"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-semibold mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 text-black text-sm sm:text-base"
                required
              />
            </div>
          </div>

          {/* Phone + Service */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="phone_number" className="block text-sm font-semibold mb-1">
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 text-black text-sm sm:text-base"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="service_interest" className="block text-sm font-semibold mb-1">
                Service of Interest:
              </label>
              <select
                id="service_interest"
                name="service_interest"
                value={formData.service_interest}
                onChange={handleChange}
                className="w-full rounded px-3 py-2 text-black text-sm sm:text-base"
                required
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Consultation">Consultation</option>
                <option value="Treatment">Treatment</option>
                <option value="Follow-up">Follow-up</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-1">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded px-3 py-2 text-black resize-none text-sm sm:text-base"
            ></textarea>
          </div>

          {/* Response Message */}
          {responseMsg && (
            <p
              className={`text-sm font-semibold ${
                responseMsg.startsWith("✅") ? "text-green-400" : "text-red-400"
              }`}
            >
              {responseMsg}
            </p>
          )}

          {/* Submit Button */}
          <div className="flex justify-center sm:justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-green-700 hover:bg-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 text-white font-semibold px-6 py-3 rounded-md w-full sm:w-auto text-sm sm:text-base"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
        </div>

        {/* ✅ Text Section */}
        <div className="w-full md:w-1/2 text-white text-left order-2 md:order-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Book an Appointment <br /> at Trupeak Health
          </h2>
          <p className="text-lg mb-4 max-w-lg">
            Your health transformation starts with a conversation. At Trupeak
            Health, we provide personalized care tailored to your unique needs.
            Schedule your appointment today and take the first step towards
            optimal wellness.
          </p>
          <p className="text-sm">
            <strong>Privacy Note:</strong> Your information is safe with us. We
            never share your details with third parties.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
