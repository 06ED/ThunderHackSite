"use client";

import useGitHubDownloads from "@/hooks/useGithubDownloads";
import { CloudLightning, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const developers = [
  {
    name: "Pan4ur",
    avatarUrl: "https://minotar.net/avatar/Pan4ur/100",
  },
  {
    name: "06ED",
    avatarUrl: "https://minotar.net/avatar/06ED/100",
  },
];

export default function Home() {
  const downloads = useGitHubDownloads("Pan4ur", "thunderhack-recode");
  const layers = ["/images/layer1", "/images/layer2", "/images/layer3"];

  console.log(downloads);

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Zap className="h-6 w-6" />
          <span className="sr-only">THUNDERHACK</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
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
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-500 to-sky-500 text-transparent bg-clip-text">
                    Unleash Your Minecraft Experience
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover the ultimate Minecraft utility mod that enhances
                    your gameplay and streamlines your experience.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Download Now
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative w-full">
                <Image
                  src="/images/thunderhack-main.png"
                  alt="Minecraft Utility Mod"
                  fill
                  className="skew-y-12 shadow-lg shadow-gray-400 shadow-x rounded-xl shadow-color-change"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div className="flex flex-col items-center">
                <h2 className="text-4xl font-bold tabular-nums animate-[counter_3s_ease-out_forwards] [counter-set:_num_var(--num)] before:content-[counter(num)]">
                  <span className="supports-[counter-set]:sr-only">10</span>K+
                </h2>
                <p className="text-lg text-gray-600">Downloads</p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-4xl font-bold">500K+</h2>
                <p className="text-lg text-gray-600">Active Users</p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-4xl font-bold">4.9/5</h2>
                <p className="text-lg text-gray-600">User Ratings</p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full overflow-hidden">
          <div className="container relative z-10 grid grid-cols-1 items-center gap-8 py-24 md:grid-cols-2 md:py-32 lg:py-40">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-purple-500 to-sky-500 text-transparent bg-clip-text">
                Perfect GUI
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Enhance your Minecraft experience with our utility mod featuring
                a perfect GUI. Enjoy intuitive
                controls, seamless integration, and enhanced functionality right
                at your fingertips.
              </p>
            </div>

            <div className="relative z-20 group mb-[250px]">
              <img
                src="/images/layer1.png"
                width={800}
                height={600}
                alt="Layer 1"
                className="-skew-y-6 overflow-hidden rounded-b-xl object-cover object-center absolute inset-0 z-10 group-hover:blur-sm"
              />
              <img
                src="/images/layer2.png"
                width={800}
                height={600}
                alt="Layer 2"
                className="-skew-y-6 overflow-hidden rounded-b-xl object-cover object-center absolute inset-0 z-20 transition-transform duration-500 transform translate-x-0 translate-y-0 group-hover:translate-x-[20px] group-hover:translate-y-[20px]"
              />
              <img
                src="/images/layer3.png"
                width={800}
                height={600}
                alt="Layer 3"
                className="-skew-y-6 overflow-hidden rounded-b-xl object-cover object-center absolute inset-0 z-30 transition-transform duration-500 transform translate-x-0 translate-y-0 group-hover:translate-x-[-20px] group-hover:translate-y-[-20px]"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t mt-10">
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear().toString()} THUNDERHACK
        </p>
      </footer>
    </div>
  );
}
