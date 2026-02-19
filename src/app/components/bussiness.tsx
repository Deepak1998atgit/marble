"use client";

import React, { memo } from "react";

const SalamHeroFull = memo(() => {
  return (
    <div className="w-full min-h-screen bg-[#002035] text-white overflow-hidden">
      {/* ================= TOP MINI NAV ================= */}
      <div className="w-full bg-[#001F1B] text-sm">
        <div className="max-w-[1350px] mx-auto flex justify-between items-center px-8 py-3">
          <div className="flex gap-10 font-medium">
            <span className="cursor-pointer text-white/80 hover:text-white">Personal</span>
            <span className="cursor-pointer border-b-2 border-[#12B76A] pb-1 text-white">Business</span>
            <span className="cursor-pointer text-white/80 hover:text-white">Wholesale</span>
          </div>
          <div className="flex gap-8 items-center">
            <span className="cursor-pointer text-white/80 hover:text-white">About</span>
            <span className="cursor-pointer text-white/80 hover:text-white">Support</span>
            <button className="border border-[#12B76A] px-3 py-1 rounded-md text-sm hover:bg-[#12B76A]/10 transition-colors">
              EN ▾
            </button>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="w-full bg-[#003E30] border-t border-[#0a5c4a]">
        <div className="max-w-[1350px] mx-auto flex justify-between items-center px-8 h-[80px]">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#12B76A] rounded-tr-2xl rounded-bl-2xl"></div>
            <h1 className="text-2xl font-semibold tracking-wide">salam</h1>
          </div>
          <div className="hidden lg:flex items-center gap-10 text-[17px] font-medium">
            <span className="cursor-pointer hover:text-white/90 transition-colors">Business Services ▾</span>
            <span className="cursor-pointer hover:text-white/90 transition-colors">Connectivity Solutions ▾</span>
            <span className="cursor-pointer hover:text-white/90 transition-colors">Cloud Services ▾</span>
            <span className="cursor-pointer hover:text-white/90 transition-colors">Cyber Security Services ▾</span>
            <span className="cursor-pointer hover:text-white/90 transition-colors">Industry ▾</span>
            <span className="text-[#12B76A] font-semibold cursor-pointer hover:text-[#0ea95f] transition-colors">
              Check your coverage
            </span>
          </div>
        </div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full bg-[#002035]">
        <div className="max-w-[1350px] mx-auto px-8 h-[82vh] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full gap-4">
            <div className="max-w-[720px]">
              <h1 className="text-[60px] xl:text-[60px] font-bold leading-[1.05] tracking-[-0.8px] text-white">
                Ensure your business
                <br />
                continuity
              </h1>
              <p className="mt-6 text-[22px] text-gray-300 font-medium">
                With Salam 5G Business Wireless Internet (BWI)
              </p>
              <button className="mt-10 bg-[#12B76A] hover:bg-[#0ea95f] transition-colors px-10 py-4 rounded-full text-lg font-semibold flex items-center gap-3">
                <span className="text-xl">›</span>
                Learn more..
              </button>
            </div>
            <div className="flex justify-end items-center">
              <img
                src="/5g.png"
                alt="5G"
                className="w-[720px] xl:w-[820px] object-contain -ml-24"
              />
            </div>
          </div>
        </div>
        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white/60 text-3xl cursor-pointer hover:text-white transition-colors">‹</div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-white/60 text-3xl cursor-pointer hover:text-white transition-colors">›</div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="w-3 h-3 bg-[#12B76A] rounded-full"></div>
        </div>
      </section>
    </div>
  );
});

SalamHeroFull.displayName = "SalamHeroFull";
export default SalamHeroFull;