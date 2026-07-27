import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({
  variant = "light",
  className = "",
  width = 180,
  height = 72,
}: LogoProps) {
  const src = variant === "light" ? "/logo-light.png?v=2" : "/logo-dark.png?v=2";

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Vardian Capital Partners"
      width={width}
      height={height}
      className={cn("object-contain", className)}
    />
  );
}
