import React from "react";
import Image from "next/image";

export default function Block() {
  return (
    <section className="flex text-black mb-12">
      <div className="bg-green-600 w-full h-[42rem]">sd</div>
      <div className="bg-green-200 w-full h-[42rem]">
        <Image
          width={1000}
          height={1000}
          src="/cut.jpg"
          alt="Élagage Image"
          className="rounded-lg shadow-lg  w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
