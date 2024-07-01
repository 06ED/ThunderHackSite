import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import lottie from "lottie-web";

import discordAnimation from "@/animations/discord.json"
import githubAnimation from "@/animations/github.json"
import { useEffect, useRef, useState } from "react";



const NavBar = () => {
  const githubRef = useRef(null)
  const discordRef = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      name: "github",
      container: githubRef.current!,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: githubAnimation,

    })
    return () => lottie.destroy()
  }, [])
  useEffect(() => {
    lottie.loadAnimation({
      name: "discord",
      container: discordRef.current!,
      renderer: "svg",
      loop: true,
      autoplay: false,
      animationData: discordAnimation,

    })
    return () => lottie.destroy()
  }, [])

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0  backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200 dark:border-gray-700 z-40">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <h1 className="font-glitch-font text-[50px]">THUNDERHACK</h1>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 text-center justify-center items-center">
        <Link
          href="#features"
          className="text-sm font-medium hover:underline transition-all duration-500 underline-offset-4"
          prefetch={false}
        >
          Features
        </Link>
        <Link
          href="#github"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>
        <Link href="https://discord.gg/TZNxCw2SFR"
          onMouseEnter={() => lottie.play("discord")}
          onMouseLeave={() => {
            lottie.stop("discord")
          }}
          ref={discordRef}
          style={{
            width: "55px",
            height: "55px",
          }} />
        <Link href="https://github.com/Pan4ur/ThunderHack-Recode"
          onMouseEnter={() => lottie.play("github")}
          onMouseLeave={() => lottie.stop("github")}
          ref={githubRef}
          style={{
            width: "55px",
            height: "55px",
          }} />
        <ModeToggle />
      </nav>
    </header>
  );
};

export default NavBar;
