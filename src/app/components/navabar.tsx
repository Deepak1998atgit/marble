"use client";
import { MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full px-10">
      {/* ===== TOP BAR ===== */}
      <div className="w-full">
        <div className="max-w-[1600px] mx-auto h-[44px] px-8 flex items-center relative">

          {/* LEFT — phone numbers */}
          <div className="flex items-center">
            {/* Unicode telephone handset matches the screenshot icon style */}
            <span className="text-[20px] text-[#2F2F2F] mr-[6px]">&#9990;</span>
            <span className="text-[13px] font-bold text-[#2F2F2F]">
              +974 4448 3000
            </span>
            <span className="mx-3 text-[#CFCFCF]">|</span>
            <span className="text-[13px] font-bold text-[#8A8A8A]">
              Dental Emergency +974 3330 6331
            </span>
          </div>

          {/* CENTER — nav links, true-centered with absolute */}
          <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8">
            {["Activities", "Blogs", "Careers", "Catalog", "Contact us"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[12px] font-semibold text-[#2F2F2F] hover:text-[#295188] transition-colors cursor-pointer whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* RIGHT — location + language */}
          <div className="ml-auto flex items-center gap-0">
            <MapPin size={14} className="text-[#295188] mr-1 flex-shrink-0" />
            <a href="#" className="text-[13px] font-semibold text-[#295188] hover:underline cursor-pointer">
              Dafna
            </a>
            <span className="mx-2 text-[#CFCFCF]">|</span>
            <a href="#" className="text-[13px] font-semibold text-[#295188] hover:underline cursor-pointer">
              Lusail
            </a>

            {/* Language toggle */}
            <div className="ml-5 flex items-center gap-3">
              <button className="text-[13px] font-semibold text-[#295188] hover:underline">
                EN
              </button>
              <button className="text-[13px] font-semibold text-[#295188] hover:underline">
                AR
              </button>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}