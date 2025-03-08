// components/Footer.jsx
import { Logo } from "@/app/components/icons/icons";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "../icons/icons";
const Footer = () => {
  return (
    <footer className="bg-black text-white w-full py-10">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Social Media */}
          <div className="space-y-6">
            <div>
              <Link href="/" className="text-3xl font-bold">
                <Logo />
              </Link>
            </div>
            <div>
              <p className="mb-4">Follow us</p>
              <div className="flex space-x-4">
                <Link href="#" className="bg-p-500 text-white p-2 rounded-full">
                  <Facebook />
                </Link>
                <Link href="#" className="bg-p-500 text-white p-2 rounded-full">
                  <Twitter />
                </Link>
                <Link href="#" className="bg-p-500 text-white p-2 rounded-full">
                  <Instagram />
                </Link>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Pages</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="hover:text-p-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-p-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-p-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/updates"
                  className="hover:text-p-500 transition-colors"
                >
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Products</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/snapchat"
                    className="hover:text-p-500 transition-colors"
                  >
                    Snapchat
                  </Link>
                </li>
                <li>
                  <Link
                    href="/instagram"
                    className="hover:text-p-500 transition-colors"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="/reddit"
                    className="hover:text-p-500 transition-colors"
                  >
                    Reddit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/telegram"
                    className="hover:text-p-500 transition-colors"
                  >
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link
                    href="/x"
                    className="hover:text-p-500 transition-colors"
                  >
                    X
                  </Link>
                </li>
                <li>
                  <Link
                    href="/whatsapp"
                    className="hover:text-p-500 transition-colors"
                  >
                    WhatsApp
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-8 sm:mt-0">
              <h3 className="text-xl font-semibold mb-6 sm:invisible">More</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/grindr"
                    className="hover:text-p-500 transition-colors"
                  >
                    GrindR
                  </Link>
                </li>
                <li>
                  <Link
                    href="/da-swiper"
                    className="hover:text-p-500 transition-colors"
                  >
                    DA Swiper
                  </Link>
                </li>
                <li>
                  <Link
                    href="/da-chatter"
                    className="hover:text-p-500 transition-colors"
                  >
                    DA Chatter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex justify-between">
          <p className="text-sm text-gray-400">
            © 2025 xBot | ALL RIGHTS RESERVED
          </p>
          <div>
            {" "}
            <Link
              href="/privacy-policy"
              className="hover:text-p-500 transition-colors mr-8"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-p-500 transition-colors">
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
