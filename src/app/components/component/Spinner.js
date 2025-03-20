export default function Spinner({
  size = "sm",
  color = "purple",
  thickness = "normal",
  speed = "normal",
}) {
  const sizeMap = {
    xs: "h-4 w-4",
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
    "2xl": "h-24 w-24",
  };

  const colorMap = {
    blue: "border-blue-500",
    red: "border-red-500",
    green: "border-green-500",
    yellow: "border-yellow-500",
    purple: "border-p-300",
    pink: "border-pink-500",
    indigo: "border-indigo-500",
    gray: "border-gray-500",
    black: "border-black",
    white: "border-white",
  };

  const thicknessMap = {
    thin: "border",
    normal: "border-2",
    thick: "border-4",
    thicker: "border-8",
  };

  const speedMap = {
    slow: "animate-[spin_2s_linear_infinite]",
    normal: "animate-[spin_1s_linear_infinite]",
    fast: "animate-[spin_0.5s_linear_infinite]",
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`
              ${sizeMap[size] || sizeMap.md}
              ${thicknessMap[thickness] || thicknessMap.normal}
              ${speedMap[speed] || speedMap.normal}
              rounded-full
              border-solid
              border-t-transparent
              ${colorMap[color]}
            `}
        role="status"
        aria-label="loading"
      />
    </div>
  );
}
