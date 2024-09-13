import React from "react";

import {
  FaceIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Mail, Map, Phone } from "lucide-react";
import Image from "next/image";
import { NavigationMenuDemo } from "./NavMenu";

export default function Header() {
  return (
    <>
      <nav className="mx-auto container flex items-center justify-between">
        <ul className="flex flex-row gap-2">
          <li className="flex flex-row">
            {" "}
            <Mail className="mr-1 " /> greencomores@gmail.com{" "}
          </li>
          <li className="flex flex-row">
            <Phone className="mr-1 " /> 07.90.56.12.12
          </li>
          <li className="flex flex-row">
            <Map className="mr-1 " /> 12 rue Hahay
          </li>
        </ul>
        <ul className="flex items-center  gap-3">
          <li className="bg-white p-1 rounded-xl text-green-600">
            <InstagramLogoIcon />
          </li>
          <li className="bg-white p-1 rounded-xl text-green-600">
            <TwitterLogoIcon />
          </li>
          <li className="bg-white p-1 rounded-xl text-green-600">
            <FaceIcon />
          </li>
        </ul>
      </nav>
      <aside className="mx-auto container flex items-center justify-between mt-6 text-black  ">
        <Image
          width={80}
          height={80}
          src="/logo.png"
          alt="Élagage Image"
          className=""
        />
        <NavigationMenuDemo />
      </aside>
    </>
  );
}
