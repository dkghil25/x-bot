import { Logo } from "@/app/components/icons/icons";
export default function Commingsoon() {
  return (
    <section className="w-full relative">
      <div className="w-full max-w-[1240px] h-screen  mx-auto  px-5 flex flex-col justify-center items-center gap-12 py-16 md:py-24 bg-[url('/image/socmedBackground.png')] bg-no-repeat bg-center">
        <div className="py-3 px-12 border border-neutral-800 rounded-2xl">
          <Logo width={200} h={80} />
        </div>
        <h1 className="!text-[100px] md:!text-[140px] flex flex-col text-center">
          COMING
          <span className=" text-[100px] md:text-[120px] text-p-400">SOON</span>
        </h1>
      </div>
    </section>
  );
}
