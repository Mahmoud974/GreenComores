"use client";

import { textSection } from "@/app/db/textSection";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

type MiniNavProps = {
  slug: string;
};

export default function MiniNav({ slug }: MiniNavProps) {
  // Trouver la section en fonction du slug
  const currentSection = textSection.find((section) => section.slug === slug);
  console.log(currentSection);

  // Si la section n'est pas trouvée, afficher un message d'erreur ou une autre logique
  if (!currentSection) {
    return <div>Section non trouvée</div>;
  }

  return (
    <section className="mx-auto container text-black">
      <div className="flex mx-auto container text-xl lg:flex-row items-center justify-between p-10">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full p-5">
          <Image
            width={800}
            height={800}
            src="/contact.jpg"
            alt="Élagage Image"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 w-full p-5 ">
          <h2 className="text-3xl  font-bold mb-4 ml-4">
            {currentSection.title}
          </h2>
          <ul className="list-disc pl-6 mb-6 space-y-4">
            {currentSection.items.map((item, index) => (
              <li key={index}>
                <strong>{item.strongText}</strong> {item.description}
              </li>
            ))}
          </ul>

          {/* Compteur */}
          <section className="py-5">
            <div className="mx-auto">
              <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-6 justify-center">
                <div className="p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 text-center">
                  <h3 className="text-6xl font-bold text-green-700">
                    <CountUp start={0} end={550} duration={1} />+
                  </h3>
                  <p className="text-gray-600 mt-2">Arbres coupés</p>
                </div>
                <div className="p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 text-center">
                  <h3 className="text-6xl font-bold text-green-700">
                    <CountUp start={0} end={100} duration={1} suffix="m²" />
                  </h3>
                  <p className="text-gray-600 mt-2">Gazon coupé</p>
                </div>
                <div className="p-6 rounded-lg transform transition-transform duration-300 hover:scale-105 text-center">
                  <h3 className="text-6xl font-bold text-green-700">
                    <CountUp start={0} end={20} duration={1} />
                  </h3>
                  <p className="text-gray-600 mt-2">Créations de jardin</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
