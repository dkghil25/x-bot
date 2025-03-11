"use client";
import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Spinner from "@/app/components/component/Spinner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [captchaToken, setCaptchaToken] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear errors when user types
    if (formErrors[e.target.name]) {
      setFormErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const messageStatus = {
    loading: <Spinner color="purple" />,
    success: <span className="text-green-500">Message sent successfully!</span>,
    failed: <span className="text-red-500">Failed to send message.</span>,
    error: <span className="text-orange-400">An error occurred.</span>,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    if (!formData.message.trim()) errors.message = "Message is required";
    if (!captchaToken) errors.captcha = "Please complete the reCAPTCHA";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setStatus(messageStatus.loading);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captcha: captchaToken }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Server Error:", data);
        setStatus(
          <span className="text-red-500">
            {data.error || "Failed to send message"}
            {data.missingFields &&
              ` (Missing: ${data.missingFields.join(", ")})`}
          </span>
        );
        return;
      }

      setStatus(messageStatus.success);
      setFormData({ name: "", email: "", message: "" });
      setCaptchaToken(""); // Reset CAPTCHA after successful submission
    } catch (err) {
      console.error("Network Error:", err);
      setStatus(
        <span className="text-red-500">
          Network error - please try again later
        </span>
      );
    }
  };

  return (
    <section className="w-full relative" id="contact">
      <div className="w-full max-w-[1240px] mx-auto px-5 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* ... other section content remains the same ... */}

        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label htmlFor="name">Name</label>
                <input
                  className={`border-b py-3 focus:outline-none focus:border-p-500 focus:bg-n-950 focus:px-3 transition duration-300 ease-in-out ${
                    formErrors.name ? "border-red-500" : ""
                  }`}
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {formErrors.name && (
                  <span className="text-red-500 text-sm">
                    {formErrors.name}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="email">Email</label>
                <input
                  className={`border-b py-3 focus:outline-none focus:border-p-500 focus:bg-n-950 focus:px-3 transition duration-300 ease-in-out ${
                    formErrors.email ? "border-red-500" : ""
                  }`}
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {formErrors.email && (
                  <span className="text-red-500 text-sm">
                    {formErrors.email}
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="message">Message</label>
              <textarea
                className={`border-b py-3 focus:outline-none focus:px-3 transition duration-300 ease-in-out h-32 ${
                  formErrors.message ? "border-red-500" : ""
                }`}
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />
              {formErrors.message && (
                <span className="text-red-500 text-sm">
                  {formErrors.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-4">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={(token) => {
                  setCaptchaToken(token);
                  setFormErrors((prev) => ({ ...prev, captcha: "" }));
                }}
                onExpired={() => {
                  setCaptchaToken("");
                  setFormErrors((prev) => ({
                    ...prev,
                    captcha: "reCAPTCHA expired - please verify again",
                  }));
                }}
                onErrored={() => {
                  setCaptchaToken("");
                  setFormErrors((prev) => ({
                    ...prev,
                    captcha: "reCAPTCHA verification failed",
                  }));
                }}
              />
              {formErrors.captcha && (
                <span className="text-red-500 text-sm">
                  {formErrors.captcha}
                </span>
              )}

              <button
                type="submit"
                className="main-button-md w-fit disabled:opacity-50"
                disabled={status === messageStatus.loading}
              >
                {status === messageStatus.loading ? "Sending..." : "Submit"}
              </button>

              <div className="min-h-8 flex justify-start items-center">
                {status && <div className="animate-fade-in">{status}</div>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
