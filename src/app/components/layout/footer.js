// components/Footer.jsx
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "../icons/icons";
import { Logo } from "@/app/components/icons/icons";
const Footer = () => {
  return (
    <footer className="bg-bg !text-white w-full pb-12">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6  lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t-[1px] border-0 border-n-950">
          {/* Logo and Social Media */}
          <div className="space-y-6">
            <div>
              <Link href="/" className="text-3xl font-bold">
                <Logo />
              </Link>
            </div>
            <div>
              <p className="mb-4  !text-white">Follow us</p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  className="bg-p-500 !text-white p-2 rounded-full"
                >
                  <Facebook />
                </a>
                <a
                  href="https://x.com/"
                  className="bg-p-500 !text-white p-2 rounded-full"
                >
                  <Twitter />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="bg-p-500 !text-white p-2 rounded-full"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-xl font-semibold mb-6  !text-white">Pages</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="hover:text-p-500 !text-white transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="#contact"
                  className="hover:text-p-500 !text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/coming-soon"
                  className="hover:text-p-500  !text-white transition-colors"
                >
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold  !text-white mb-6">
                Products
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/coming-soon"
                    className="hover:text-p-500 !text-white transition-colors"
                  >
                    Snapchat
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coming-soon"
                    className="hover:text-p-500 !text-white transition-colors"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coming-soon"
                    className="hover:text-p-500 !text-white transition-colors"
                  >
                    Reddit
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coming-soon"
                    className="hover:text-p-500 !text-white transition-colors"
                  >
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coming-soon"
                    className="hover:text-p-500 !text-white transition-colors"
                  >
                    X
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coming-soon"
                    className="hover:text-p-500 !text-white transition-colors"
                  >
                    WhatsApp
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-8 sm:mt-0">
              <h3 className="text-xl font-semibold mb-6  !text-white sm:invisible">
                More
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/coming-soon"
                    className="hover:text-p-500 !text-white transition-colors"
                  >
                    GrindR
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coming-soon"
                    className="hover:text-p-500 !text-white transition-colors"
                  >
                    DA Swiper
                  </Link>
                </li>
                <li>
                  <Link
                    href="/coming-soon"
                    className="hover:text-p-500  !text-white transition-colors"
                  >
                    DA Chatter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-n-950 flex justify-between">
          <p className="text-sm  !text-white">
            © 2025 xBot | ALL RIGHTS RESERVED
          </p>
          <div>
            {" "}
            <Link
              href="/coming-soon"
              className="hover:text-p-500 !text-white transition-colors mr-8"
            >
              Privacy Policy
            </Link>
            <Link
              href="/coming-soon"
              className="hover:text-p-500 !text-white transition-colors"
            >
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
