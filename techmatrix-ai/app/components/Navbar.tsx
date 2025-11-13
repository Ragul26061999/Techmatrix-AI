"use client";

import { useState, useEffect } from "react";
import {
  HomeIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  FolderIcon,
  PhoneIcon,
  DocumentTextIcon
} from "@heroicons/react/24/outline";

type NavbarProps = {
  links: string[];
  active?: string;
};

const linkTargets: Record<string, string> = {
  Home: "/",
  "About Us": "/aboutUS",
  Services: "/service",
  Portfolio: "/portfolio",
  About: "/#about",
  Contact: "/contactUS",
};

const linkIcons = {
  "Home": HomeIcon,
  "About Us": UserGroupIcon,
  "Services": WrenchScrewdriverIcon,
  "Portfolio": FolderIcon,
  "Contact": PhoneIcon,
};

// Define unique colors for each icon
const iconColors = {
  "Home": "text-blue-500",
  "About Us": "text-green-500",
  "Services": "text-purple-500",
  "Portfolio": "text-amber-500",
  "Contact": "text-rose-500",
};

const resolveHref = (label: string) => linkTargets[label] ?? "#";

export default function Navbar({ links, active }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show icons only when scrolled down more than 50px
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    // Initialize the state on component mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-6 z-50 mx-auto flex max-w-6xl flex-col gap-4 rounded-3xl bg-white/90 px-6 py-4 shadow-sm ring-1 ring-slate-100 backdrop-blur-md md:flex-row md:items-center transition-all duration-300 ${
      isScrolled ? 'md:justify-center max-w-4xl px-4 py-3' : 'md:justify-between'
    }`}>
      {/* Brand section - slightly reduced padding when scrolled */}
      <div className={`flex items-center gap-3 ${isScrolled ? 'md:pl-0' : ''}`}>
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 text-white transition-all duration-300 ${
          isScrolled ? 'h-10 w-10 rounded-lg' : ''
        }`}>
          <div className={`space-y-0 text-xs font-bold uppercase leading-3 tracking-[0.15em] transition-all duration-300 ${
            isScrolled ? 'text-[0.6rem] leading-2' : ''
          }`}>
            <span>TM</span>
            <div>AI</div>
          </div>
        </div>
        {/* Hide brand text when scrolled */}
        {!isScrolled && (
          <div>
            <p className="font-bold text-slate-900">Techmatrix AI</p>
            <p className="text-sm text-slate-500">Intelligent Product Studio</p>
          </div>
        )}
      </div>
      
      <nav className="flex flex-wrap items-center gap-1 text-sm font-medium text-slate-600 md:gap-4">
        {links.map((link) => {
          const Icon = linkIcons[link as keyof typeof linkIcons] || DocumentTextIcon;
          const colorClass = iconColors[link as keyof typeof iconColors] || "text-slate-600";
          return (
            <a
              key={link}
              href={resolveHref(link)}
              className={`transition-all hover:text-slate-900 flex items-center gap-2 ${
                active === link 
                  ? "text-slate-900 font-semibold" 
                  : "hover:bg-slate-50"
              } ${isScrolled 
                ? 'px-2 py-1 rounded-md' 
                : 'px-3 py-2 rounded-lg bg-slate-100'
              }`}
            >
              <Icon className={`h-5 w-5 ${colorClass}`} />
              {/* Show text only when at the top of the page (not scrolled) */}
              {!isScrolled && <span>{link}</span>}
            </a>
          );
        })}
      </nav>
      <button className={`bg-gradient-to-r from-blue-600 to-indigo-700 text-sm font-semibold text-white transition-all hover:from-blue-700 hover:to-indigo-800 hover:shadow-md flex items-center gap-2 transition-all duration-300 ${
        isScrolled 
          ? 'px-3 py-1.5 rounded-lg' 
          : 'px-5 py-2.5 rounded-xl'
      }`}>
        <DocumentTextIcon className="h-5 w-5 text-white" />
        {/* Show text only when at the top of the page (not scrolled) */}
        {!isScrolled && <span>Get a Quote</span>}
      </button>
    </header>
  );
}