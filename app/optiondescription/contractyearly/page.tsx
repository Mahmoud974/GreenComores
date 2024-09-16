import Image from "next/image";
import React from "react";
import CountUp from "react-countup";

export default function MiniNav() {
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
          <h2 className="text-2xl font-bold mb-4">{`Contrat Annuel d'Élagage`}</h2>
          <ul className="list-disc pl-6 mb-6 space-y-4">
            <li>
              <strong>Élagage saisonnier :</strong> Des interventions planifiées
              selon les besoins spécifiques de chaque arbre, garantissant leur
              santé et leur croissance optimale.
            </li>
            <li>
              <strong>Nettoyage après intervention :</strong> Après chaque
              prestation, nous veillons à laisser vos espaces propres, sans
              branches ni débris.
            </li>
            <li>
              <strong>Inspection de sécurité :</strong>{" "}
              {`Identification des branches mortes, malades ou dangereuses afin d'assurer la sécurité autour de votre propriété.`}
            </li>
            <li>
              <strong>{`Conseils d'entretien :`}</strong> Recommandations
              personnalisées pour améliorer la santé de vos arbres et préserver
              la beauté de vos espaces verts.
            </li>
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
