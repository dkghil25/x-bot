"use client";
import Link from "next/link"
import React from "react";
import SectionTag from "../../component/sectionTag";
import {
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "../../icons/icons";
export default function ContactSection() {
  return (
    <section className="w-full relative">
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
            <Link href='#'>
              <Facebook />
            </Link>
            <Link href='#'>
              <Twitter />
            </Link>
            <Link href='#'>
              <Instagram />
            </Link>
          </div>
        </div>
        <div>
          <form className="flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label htmlFor="name">Name</label>
                <input
                   className="border-b py-3 focus:outline-none focus:border-p-500 focus:bg-n-950 focus:px-3 transition duration-300 ease-in-out"
                  type="text"
                  placeholder="Enter you Name"
                  name="name"
                />
              </div>{" "}
              <div className="flex flex-col gap-3">
                <label htmlFor="name">Email</label>
                <input
                   className="border-b py-3 focus:outline-none focus:border-p-500 focus:bg-n-950 focus:px-3 transition duration-300 ease-in-out"
                  type="text"
                  placeholder="Enter your Email"
                  name="name"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="name">Message</label>
              <input
                className="border-b py-3 focus:outline-none focus:border-p-500 focus:bg-n-950 focus:px-3 transition duration-300 ease-in-out"
                type="text"
                placeholder="What can we help you with?"
                name="name"
              />
            </div>
            <button type="submit" className="main-button-md w-fit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
