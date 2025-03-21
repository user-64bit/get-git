"use client";

import { SearchBar } from "@/components/search-bar";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { ArrowDownCircle } from "lucide-react";

// Remove static metadata from client component

export default function Home() {
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark");
  }, []);
  return (
    <BackgroundBeamsWithCollision className="h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span>Get Git</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span>Get Git</span>
              </div>
            </div>
          </h1>
          <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
            Explore GitHub profiles in a beautiful and interactive way. Enter a
            username to get started.
          </p>
          <div className="max-w-lg mx-auto relative">
            <SearchBar />
          </div>
        </div>

        <footer className="absolute bottom-4 w-full left-0 text-center text-sm text-muted-foreground opacity-70">
          <p>
            Made with ❤️ for GitHub explorers |{" "}
            <a
              href="https://github.com/user-64bit/get-git"
              className="underline hover:text-primary transition-colors"
            >
              View on GitHub
            </a>
          </p>
        </footer>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
