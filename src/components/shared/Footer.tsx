import React from "react";
import footerLogo from "@/assets/footer-logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-base-300">
      <div className="flex flex-col gap-4 lg:flex-row justify-between container mx-auto p-10">
        <div className="flex gap-3">
          <Image style={{ width:'auto', height:'auto' }} src={footerLogo}  alt="footer log" />
          <h2 className="font-bold">FITLOG</h2>
        </div>

        <p className="text-[#9CA3AF]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </div>
  );
};

export default Footer;
