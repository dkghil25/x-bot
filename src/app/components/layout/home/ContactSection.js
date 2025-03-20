import ContactUs from "@/app/components/layout/home/component/ContactUs";

import { useDarkMode } from "@/app/components/component/useDarkMode";

import { SectionTag } from "../../component/sectionTag";
import { Mail, Facebook, Twitter, Instagram } from "../../icons/icons";
export default function ContactSection() {
  const { darkMode } = useDarkMode();

  return (
    <section className="w-full relative" id="contact">
      <div className="w-full max-w-[1240px]  mx-auto  px-5   py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <SectionTag dark={darkMode}>Contact Us</SectionTag>
          <h2 className="mt-8">Get in Touch</h2>
          <p className="flex my-6 gap-1">
            <span className="mr-2">
              <Mail />
            </span>{" "}
            Email us:{" "}
            <span className="font-bold dark:text-heading"> xBot@gmail.com</span>
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
          <ContactUs />
        </div>
      </div>
    </section>
  );
}
