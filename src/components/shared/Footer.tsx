import React from "react";
import footerLogo from "@/assets/footer-logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="p-10 flex justify-between bg-base-300">
      <div className="flex gap-3">
        <Image src={footerLogo} width={20} height={15} alt="footer log" />
        <h2 className="font-bold">FITLOG</h2>
      </div>

      <p className="text-[#9CA3AF]">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
    </div>
  );
};

export default Footer;
