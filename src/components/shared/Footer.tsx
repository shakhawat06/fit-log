import React from "react";
// import footerLogo from "@/assets/footer-logo.png";
import footerlogo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-base-300">
      <div className="flex flex-col gap-4 lg:flex-row justify-between container mx-auto p-10">
        <Link href="/" className="flex gap-3 items-center">
          <Image width={20} height={20} src={footerlogo} alt="footer log" />
          <h2 className="font-bold text-xl">FITLOG</h2>
        </Link>

        <p className="text-[#9CA3AF]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </div>
  );
};

export default Footer;
