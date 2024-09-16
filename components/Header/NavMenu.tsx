import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

export function NavigationMenuDemo() {
  return (
    <>
      {/* Menu mobile */}
      <Sheet>
        <SheetTrigger>
          <Menu className="lg:hidden flex text-green-600" />
        </SheetTrigger>
        <SheetContent className="bg-white p-4">
          <SheetHeader>
            <SheetDescription>
              <ul>
                <li className="py-2">
                  <Link href="#home" legacyBehavior passHref>
                    <a className="text-green-600 hover:text-green-700">
                      Accueil
                    </a>
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="#about" legacyBehavior passHref>
                    <a className="text-green-600 hover:text-green-700">
                      À propos
                    </a>
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="#services" legacyBehavior passHref>
                    <a className="text-green-600 hover:text-green-700">
                      Services
                    </a>
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="#realisations" legacyBehavior passHref>
                    <a className="text-green-600 hover:text-green-700">
                      Réalisations
                    </a>
                  </Link>
                </li>
                <li className="py-2">
                  <Link href="#contact" legacyBehavior passHref>
                    <a className="text-green-600 hover:text-green-700">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      {/* Menu desktop */}
      <NavigationMenu className="lg:flex hidden">
        <NavigationMenuList className="flex space-x-4">
          <NavigationMenuItem className="relative group">
            <Link href="#home" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "relative cursor-pointer"
                )}
              >
                Accueil
                <span className="absolute bottom-0 left-0 w-full h-1 bg-green-700 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="relative group">
            <Link href="#about" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "relative cursor-pointer"
                )}
              >
                À propos
                <span className="absolute bottom-0 left-0 w-full h-1 bg-green-700 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="relative group">
            <Link href="#realisations" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "relative cursor-pointer"
                )}
              >
                Réalisations
                <span className="absolute bottom-0 left-0 w-full h-1 bg-green-700 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="relative group">
            <Link href="#contact" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "relative cursor-pointer"
                )}
              >
                Contact
                <span className="absolute bottom-0 left-0 w-full h-1 bg-green-700 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-green-700 text-white p-3 rounded-full cursor-pointer"
                )}
              >
                Obtenir un devis
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
