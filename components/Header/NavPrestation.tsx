import {
  Fence,
  Leaf,
  Paperclip,
  Pickaxe,
  Search,
  TreeDeciduous,
} from "lucide-react";
import Link from "next/link";
import React from "react";

type NavImg = {
  icon: React.JSX.Element;
  text: string;
  url?: string;
};

export default function NavPrestation() {
  const navImg: NavImg[] = [
    {
      icon: <Paperclip className="text-3xl text-center mx-auto" />,
      text: "Contract annuel",
      url: "contractyearly",
    },
    {
      icon: <Search className="text-3xl text-center mx-auto" />,
      text: "Diagnostic phytosanitaire",
      url: "diagnostic",
    },
    {
      icon: <TreeDeciduous className="text-3xl text-center mx-auto" />,
      text: "Elegage & Tonte",
      url: "elegage",
    },

    {
      icon: <Fence className="text-3xl text-center mx-auto" />,
      text: "Cloture & Terrasse",
      url: "cloture",
    },
    {
      icon: <Paperclip className="text-3xl text-center mx-auto" />,
      text: "Outil de jardinage",
      url: "tools",
    },
    {
      icon: <Leaf className="text-3xl text-center mx-auto" />,
      text: "Création de jardin",
      url: "creactions",
    },
    {
      icon: <Pickaxe className="text-3xl text-center mx-auto" />,
      text: "Terrassement",
      url: "terrassement",
    },
  ];
  return (
    <section className="mx-auto container relative -mt-12">
      <ul className="flex justify-center gap-8  ">
        {navImg.map((item: NavImg, index: number) => (
          <li
            key={index}
            className="w-36 h-36 rounded-full shadow-lg text-center flex justify-center flex-col cursor-pointer bg-green-800 hover:bg-emerald-900 text-white"
          >
            <Link href={"/optiondescription/" + item.url}>
              {item.icon}
              <p className="font-bold">{item.text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
