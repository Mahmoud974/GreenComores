"use client";
import { Fence } from "lucide-react";
import React, { useState } from "react";
import { RiFilePaper2Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { RiTreeFill } from "react-icons/ri";
import { GiGardeningShears, GiMonsteraLeaf } from "react-icons/gi";
import { TbGardenCart } from "react-icons/tb";
import MiniNav from "@/app/optiondescription/contractyearly/page";

type NavImg = {
  icon: React.JSX.Element;
  text: string;
  url?: string;
};

export default function NavPrestation() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const navImg: NavImg[] = [
    {
      icon: <RiFilePaper2Line className="text-4xl mx-auto" />,
      text: `Contract \n annuel`,
      url: "contractyearly",
    },
    {
      icon: <FaSearch className="text-4xl mx-auto" />,
      text: "Diagnostic phytosanitaire",
      url: "diagnostic",
    },
    {
      icon: <RiTreeFill className="text-4xl mx-auto" />,
      text: "Élagage & Tonte",
      url: "elegage",
    },
    {
      icon: <Fence className="text-4xl mx-auto" />,
      text: "Clôture & Terrasse",
      url: "cloture",
    },
    {
      icon: <GiGardeningShears className="text-4xl mx-auto" />,
      text: "Outil de jardinage",
      url: "tools",
    },
    {
      icon: <GiMonsteraLeaf className="text-4xl mx-auto -rotate-45" />,
      text: "Création de jardin",
      url: "creations",
    },
    {
      icon: <TbGardenCart className="text-4xl mx-auto" />,
      text: "Terrassement",
      url: "terrassement",
    },
  ];

  return (
    <section className="mx-auto container relative -mt-12 ">
      <ul className="flex justify-center gap-8 flex-wrap">
        {navImg.map((item: NavImg, index: number) => (
          <li
            key={index}
            onClick={() => setActiveSlug(item.url || "")}
            className={`w-36 h-36  text-center rounded-full shadow-xl flex justify-center items-center flex-col cursor-pointer bg-green-700 hover:bg-green-900 text-white transition-transform duration-300 ${
              activeSlug === item.url ? "bg-dark-green" : ""
            }`}
          >
            <div className="active text-center transform hover:scale-110 transition-transform duration-300 mb-2">
              {item.icon}
            </div>
            <p className="font-bold text-sm">{item.text}</p>
          </li>
        ))}
      </ul>
      {activeSlug && <MiniNav slug={activeSlug} />}
    </section>
  );
}
