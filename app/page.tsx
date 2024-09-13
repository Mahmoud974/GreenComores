"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import MiniNav from "@/app/optiondescription/contractyearly/page";

import NavPrestation from "@/components/Header/NavPrestation";
import Header from "@/components/Header/Header";
import Block from "@/components/Block";

export default function Page() {
  const pathname = usePathname();
  const idHotel = pathname.split("/").pop();
  console.log(idHotel);

  return (
    <section className="bg-green-600 h-8 text-white mb-8">
      {/* Banniere image & naviguateur */}
      <Header />
      <Image
        width={1000}
        height={60}
        src="/grass.jpg"
        alt="Élagage Image"
        className="rounded-lg shadow-lg mt-3 w-full  object-cover"
      />
      {/* Tronconeuse */}
      {/* <Image
        width={500}
        height={500}
        src="/tron.png"
        alt="Élagage Image"
        className="rounded-lg mt-3 h-18 w-18 absolute right-1/2 transform rotate-6 translate-x-3/4 translate-y-4/4"
      /> */}

      <NavPrestation />
      <MiniNav />
      <Block />
    </section>
  );
}
