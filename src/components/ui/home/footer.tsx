import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Send,
  
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3a3a3a] text-[#a0a0a0] font-sans pt-16 pb-8 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center text-[#6bb82d] text-3xl font-black tracking-wide">
              Medi <span className="text-muted-text"> Store</span>
              <span className="text-white ml-0.5 text-2xl font-light">+</span>
            </div>
            <p className="text-sm leading-relaxed text-[#9e9e9e] pr-4">
              An injection puts a small amount of filler into a chosen area with
              the aim of helping to tempo rarily reduce the visibility
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-[#555555] hover:border-[#6bb82d] hover:bg-[#6bb82d] text-white transition-colors rounded-sm"
              >
              
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-[#555555] hover:border-[#6bb82d] hover:bg-[#6bb82d] text-white transition-colors rounded-sm"
              >
                {/* <i className="fa-brands fa-twitter"></i> */}
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-[#555555] hover:border-[#6bb82d] hover:bg-[#6bb82d] text-white transition-colors rounded-sm"
              >
                {/* <i className="fa-brands fa-instagram"></i> */}
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-[#555555] hover:border-[#6bb82d] hover:bg-[#6bb82d] text-white transition-colors rounded-sm"
              >
                <span className="text-xs font-bold font-serif">G+</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-wider uppercase mb-8 text-md">
              Infomation
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-[#9e9e9e]">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#6bb82d] shrink-0 mt-1" />
                <span>
                  PO Box 16122 Collins Street, West Victoria 8007, Australia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#6bb82d] shrink-0" />
                <span>Tel. +1 2123431725</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#6bb82d] shrink-0" />
                <span>Email. info@harutheme.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-wider uppercase mb-8 text-md">
              Useful Links
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm text-[#9e9e9e]">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-[#6bb82d] transition-colors"
                >
                  <ChevronRight size={14} className="text-gray-500" /> About
                  Store
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-[#6bb82d] transition-colors"
                >
                  <ChevronRight size={14} className="text-gray-500" /> New
                  Collection
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-[#6bb82d] transition-colors"
                >
                  <ChevronRight size={14} className="text-gray-500" /> Woman
                  Drug
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-[#6bb82d] transition-colors"
                >
                  <ChevronRight size={14} className="text-gray-500" /> Contact
                  Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-[#6bb82d] transition-colors"
                >
                  <ChevronRight size={14} className="text-gray-500" /> Latest
                  News
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold tracking-wider uppercase mb-4 text-md">
              Subscribe
            </h4>
            <p className="text-sm text-[#9e9e9e] leading-relaxed mb-2">
              Enter your email address for our mailing list to keep yourself
              updated.
            </p>
            <div className="flex w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full px-4 py-3 bg-white text-gray-800 placeholder-gray-400 focus:outline-none text-sm rounded-l-sm"
              />
              <button className="bg-[#6bb82d] hover:bg-[#5aa325] text-white px-5 flex items-center justify-center transition-colors rounded-r-sm">
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#4a4a4a] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            Design With <span className="text-gray-500">♥</span> by HaruTheme
          </p>
          <div className="flex items-center gap-2 opacity-80">
            <img
              src="https://img.icons8.com/color/48/mastercard.png"
              alt="Mastercard"
              className="h-7 object-contain"
            />
            <img
              src="https://img.icons8.com/color/48/paypal.png"
              alt="Paypal"
              className="h-7 object-contain"
            />
            <img
              src="https://img.icons8.com/color/48/amex.png"
              alt="Amex"
              className="h-7 object-contain"
            />
            <img
              src="https://img.icons8.com/color/48/bitcoin.png"
              alt="Bitcoin"
              className="h-7 object-contain"
            />
            <img
              src="https://img.icons8.com/color/48/visa.png"
              alt="Visa"
              className="h-7 object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
