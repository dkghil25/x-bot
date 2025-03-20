"use client"; // Mark as a client component for Next.js
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha"; // Import reCAPTCHA
import Spinner from "@/app/components/component/Spinner"; // Your custom Spinner component

export default function ContactUs() {
  const form = useRef(); // Reference to the form element
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // For success/error messages
  const [isLoading, setIsLoading] = useState(false); // For showing spinner during submission
  const [captchaToken, setCaptchaToken] = useState(""); // Store reCAPTCHA token

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle reCAPTCHA verification
  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    // Check if reCAPTCHA is completed
    if (!captchaToken) {
      setStatus("Please complete the reCAPTCHA.");
      return;
    }

    setIsLoading(true);
    setStatus("");

    const serviceID = "service_y6h5kyh"; // Your EmailJS Service ID
    const templateID = "template_1d3779t"; // Your EmailJS Template ID
    const publicKey = "I6F6aDl8P6iXQJoVL"; // Your EmailJS Public Key

    emailjs
      .sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ user_name: "", user_email: "", message: "" });
          setCaptchaToken("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-3">
          <label htmlFor="user_name">Name</label>
          <input
            className="border-b border-neutral-700 py-3 focus:outline-none focus:border-p-500 focus:bg-n-950 focus:px-3 transition duration-300 ease-in-out placeholder-n-500"
            type="text"
            name="user_name"
            id="user_name"
            value={formData.user_name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="user_email">Email</label>
          <input
            className="border-b border-neutral-700 py-3 focus:outline-none focus:border-p-500 focus:bg-n-950 focus:px-3 transition duration-300 ease-in-out placeholder-n-500"
            type="email"
            name="user_email"
            id="user_email"
            value={formData.user_email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="message">Message</label>
        <textarea
          className="border-b border-neutral-700 py-3 focus:outline-none focus:border-p-500 focus:bg-n-950 focus:px-3 transition duration-300 ease-in-out text-n-900 dark:text-n-50 placeholder-n-500"
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="2"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        {/* reCAPTCHA v2 Checkbox */}
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          onChange={handleCaptchaChange}
        />
        <div className="flex flex-row gap-1.5">
          <button
            type="submit"
            className="main-button-md w-fit flex items-center justify-center gap-2"
            disabled={isLoading || !captchaToken}
          >
            {isLoading ? (
              <>
                {" "}
                <Spinner />
                <span className="text-base text-neutral-50">
                  {" "}
                  Sending...
                </span>{" "}
              </>
            ) : (
              "Submit"
            )}
          </button>
        </div>
        {status && (
          <p
            className={`text-start  ${
              status.includes("Message sent successfully")
                ? "!text-green-500"
                : "!text-red-500"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </form>
  );
}
