"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  return (
    <AnimatePresence mode="wait">
      <div className="flex flex-col items-center">
      <motion.div
        className={cn(
          "flex md:max-w-fit fixed top-6 border border-white/[0.2] rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] p-8 py-4 items-center justify-center md:space-x-4 space-x-2",
          className,
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "items-center flex md:space-x-1 text-white md:text-sm text-xs hover:text-gray-600",
            )}
          >
            {navItem.name}
          </Link>
        ))}
      </motion.div>
      </div>
    </AnimatePresence>
  );
};
