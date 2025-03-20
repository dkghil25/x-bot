import { Arrow } from "../../icons/icons";
import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="w-full relative ">
      <div className="w-full max-w-[1240px]  mx-auto  px-5 flex flex-col justify-center gap-12 py-16 md:py-24 ">
        <div className="border flex flex-col gap-8 items-center border-neutral-200 dark:border-neutral-600 dark:bg-alt-bg/20  py-8 sm:py-16 px-4 sm:px-8 rounded-4xl relative overflow-hidden">
          <h2 className="text-center w-full md:w-[70%]">
            Supercharge Your Social Media with{" "}
            <span className="text-p-400">Our AI Bot!</span>
          </h2>
          <p className="text-center w-full md:w-[70%]">
            Automate conversations, engage followers, and boost conversions
            effortlessly with xBot. Take your social media game to the next
            level!
          </p>
          <Link href="#contact">
            <button className="main-button-lg w-fit">
              Get Started Now{" "}
              <span>
                <Arrow />
              </span>
            </button>
          </Link>
          <Image
            className="absolute top-0  -z-1  w-full "
            src="/image/background.png"
            alt="bg"
            width={900}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
