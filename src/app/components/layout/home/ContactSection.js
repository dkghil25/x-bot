"use client";
import React from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import Spinner from "@/app/components/component/Spinner";

import { useState } from "react";
import { SectionTag } from "../../component/sectionTag";
import { Mail, Facebook, Twitter, Instagram } from "../../icons/icons";
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [captchaToken, setCaptchaToken] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const messageStatus = {
    loading: <Spinner color="purple" />,
    success: <span className="text-green-500">Message sent successfully!</span>,
    failed: <span className="text-red-500">Failed to send message.</span>,
    error: <span className="text-orange-400">An error occurred.</span>,
  };

  function statusMessage(status) {
    setStatus(status);
    setTimeout(() => {
      setStatus("");
    }, 5000);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(messageStatus.loading);

    if (!captchaToken) {
      alert("Please complete the reCAPTCHA.");
      setStatus("Captcha verification required.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, captcha: captchaToken }),
      });

      if (res.ok) {
        statusMessage(messageStatus.success);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(() => {
          statusMessage(messageStatus.failed);
        });
      }
    } catch (err) {
      setStatus(() => {
        statusMessage(messageStatus.error);
      });
    }
  };

  console.log(
    "this is  next public",
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  );
  console.log("this is not next public", process.env.RECAPTCHA_SITE_KEY);
  return (
    <section className="w-full relative" id="contact">
      <div className="w-full max-w-[1240px]  mx-auto  px-5   py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <SectionTag>Contact Us</SectionTag>
          <h2 className="mt-8">Get in Touch</h2>
          <p className="flex my-6">
            <span className="mr-2">
              <Mail />
            </span>{" "}
            Email us:{" "}
            <span className="font-bold text-heading">xBot@gmail.com</span>
          </p>
          <p className="mb-2">Follow Us</p>
          <div className="flex gap-2">
            <a href="https://facebook.com">
              <Facebook />
            </a>
            <a href="https://x.com/">
              <Twitter />
            </a>
            <a href="https://www.instagram.com/">
              <Instagram />
            </a>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label htmlFor="name">Name</label>
                <input
                  className="border-b py-3 focus:outline-none focus:border-p-500 focus:bg-n-950 focus:px-3 transition duration-300 ease-in-out"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>{" "}
              <div className="flex flex-col gap-3">
                <label htmlFor="name">Email</label>
                <input
                  className="border-b py-3 focus:outline-none focus:border-p-500 focus:bg-n-950 focus:px-3 transition duration-300 ease-in-out"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="name">Message</label>
              <input
                className="border-b py-3 focus:outline-none  focus:px-3 transition duration-300 ease-in-out"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={(token) => setCaptchaToken(token)}
              />

              <button type="submit" className="main-button-md w-fit">
                Submit
              </button>
              <div className="flex justify-start">{status}</div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
