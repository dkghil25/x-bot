import { Wand } from "@/app/components/icons/icons";

export function SectionTag({ children, dark = true }) {
  return (
    <>
      {dark ? (
        <div className="relative">
          <div className="relative p-px rounded-full w-fit overflow-hidden">
            <div
              className="absolute inset-0 rounded-full z-1"
              style={{
                background:
                  "linear-gradient(269deg, #8763EF -44.02%, rgba(114, 93, 176, .6) 103.04%)",
              }}
            ></div>

            <div className="bg-[#000000b5] relative  rounded-full px-4 py-2 flex items-center gap-2 w-fit z-1">
              <span className="font-medium text-lg !text-neutral-50">
                {children}
              </span>
              <span className="text-purple-400">
                <Wand />
              </span>
            </div>
          </div>
        </div>
      ) : (
        <SectionTagLight>{children}</SectionTagLight>
      )}
    </>
  );
}

export function SectionTagLight({ children }) {
  return (
    <div className="relative">
      <div className="relative p-px rounded-full w-fit overflow-hidden border border-p-300">
        <div className=" relative bg-neutral-50  rounded-full px-4 py-2 flex items-center gap-2 w-fit z-1">
          <span className="text-p-600 font-medium text-lg">{children}</span>
          <span className="text-purple-400">
            <Wand />
          </span>
        </div>
      </div>
    </div>
  );
}
