"use client";
import Image from "next/image";
import MiniNav from "@/app/optiondescription/contractyearly/page";
import NavPrestation from "@/components/Header/NavPrestation";
import Header from "@/components/Header/Header";
import Block from "@/components/Block";
import Footer from "@/components/Footer.tsx/Footer";
import Realisation from "@/components/Realisation/Realisation";
import About from "@/components/About";
import ContactBlock from "@/components/ContactBlock";

export default function Page() {
  return (
    <section className="bg-[#1E7E3A]  h-8 text-black mb-8">
      <Header />
      <Image
        width={1000}
        height={60}
        src="/grass.jpg"
        alt="Élagage Image"
        className="h-[34rem] mt-3 w-full  object-cover"
      />
      <NavPrestation />
      <MiniNav />
      <Block />
      <Realisation />
      {/* <OpenGallery /> */}
      <About />
      {/* <Galery /> */}
      <ContactBlock />
      <Footer />
    </section>
  );
}
