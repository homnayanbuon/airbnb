"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      src="/images/logo.png"
      alt="logo"
      width={110}
      height={100}
      className="hidden md:block"
    />
  );
};

export default Logo;
