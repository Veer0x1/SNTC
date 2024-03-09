"use client"

import React from "react";
import Logo from "@/public/logo.svg";
import Image from "next/image";
import {Button} from "@/components/ui/button";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Menu} from "lucide-react";
import Link from "next/link";


const Navbar :React.FC = () => {
  // const [open, setOpen] = React.useState(false);
  // const [flyer, setFlyer] = React.useState(false);
  // const [flyerTwo, setFlyerTwo] = React.useState(false);
  const [position, setPosition] = React.useState("home")

  return (
      <>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center border-b-2 border-primary py-4 px-8 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only text-white">Workflow</span>
                  <Image
                      className="h-8 w-auto sm:h-10 bg-white"
                      height={60}
                      width={60}
                      src={Logo}
                      alt="SNTC Logo"
                  />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline"><Menu /></Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                      <DropdownMenuRadioItem value="home">Home</DropdownMenuRadioItem>
                      <Link href={'/clubs'}>
                      <DropdownMenuRadioItem value="clubs">Clubs</DropdownMenuRadioItem>
                      </Link>
                      <DropdownMenuRadioItem value="events">Events</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="achievements">Achievements</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="contact">Contact</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <nav className="hidden md:flex space-x-10">
                  <Button
                      type="button"
                      variant={'ghost'}
                  >
                   Home
                  </Button>

                <Button
                    variant={'ghost'}
                >
                  Clubs
                </Button>
                  <Button
                      type="button"
                      variant={'ghost'}
                  >
                   Events
                  </Button>

                <Button
                    variant={'ghost'}
                >
                  Achievements
                </Button>
                <Button
                    variant={'ghost'}
                >
                 Contact
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </>
  );
};
export default Navbar;