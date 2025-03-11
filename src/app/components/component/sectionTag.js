import { Wand } from "../icons/icons";

export function SectionTag({ children, dark }) {
  return (
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
          <span>{children}</span>
          <span className="text-purple-400">
            <Wand />
          </span>
        </div>
      </div>
    </div>
  );
}

export function SectionTagLight({ children, dark }) {
  return (
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
          <span>{children}</span>
          <span className="text-purple-400">
            <Wand />
          </span>
        </div>
      </div>
    </div>
  );
}
