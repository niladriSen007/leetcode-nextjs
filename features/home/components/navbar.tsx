import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs";

import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "@/components/ui/toggle-theme";
import { Role } from "@/prisma/generated/prisma/enums";
import { Activity } from "react";

const Navbar = ({ userRole }: { userRole: string | null }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      {/* Glassmorphic Container */}
      <div className="max-w-7xl mx-auto">
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute -inset-0.5 bg-linear-to-r from-violet-600 via-fuchsia-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 blur transition duration-300"></div>

          {/* Main Navbar */}
          <div className="relative bg-black/80 backdrop-blur-xl border border-violet-500/30 rounded-2xl shadow-2xl shadow-violet-500/10">
            <div className="px-6 py-4 flex items-center justify-between">
              {/* Logo Section */}
              <Link
                href="/"
                className="flex items-center gap-3 group/logo hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-linear-to-br from-violet-500 to-fuchsia-500 rounded-xl blur-md opacity-50 group-hover/logo:opacity-75 transition-opacity"></div>
                  <div className="relative bg-linear-to-br from-violet-600 to-fuchsia-600 p-2 rounded-xl shadow-lg">
                    <Image
                      src="/logo.svg"
                      alt="LeetCode"
                      width={28}
                      height={28}
                      className="relative z-10"
                    />
                  </div>
                </div>
                <span className="font-black text-2xl bg-linear-to-r from-violet-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
                  LeetCode
                </span>
              </Link>

              {/* Navigation Links - Center */}
              <div className="hidden md:flex items-center gap-1 bg-violet-950/30 rounded-xl p-1 border border-violet-500/20">
                <Link href="/problems">
                  <Button
                    variant="ghost"
                    className="text-sm font-medium text-violet-200 hover:text-white hover:bg-violet-600/30 transition-all duration-200 px-4 py-2 rounded-lg"
                  >
                    <span className="mr-2">💻</span>
                    Problems
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="ghost"
                    className="text-sm font-medium text-violet-200 hover:text-white hover:bg-violet-600/30 transition-all duration-200 px-4 py-2 rounded-lg"
                  >
                    <span className="mr-2">ℹ️</span>
                    About
                  </Button>
                </Link>
                <Link href="/profile">
                  <Button
                    variant="ghost"
                    className="text-sm font-medium text-violet-200 hover:text-white hover:bg-violet-600/30 transition-all duration-200 px-4 py-2 rounded-lg"
                  >
                    <span className="mr-2">👤</span>
                    Profile
                  </Button>
                </Link>
              </div>

              {/* Right Section - Auth & Theme */}
              <div className="flex items-center gap-3">
                {/* Theme Toggle */}
                <div className="hidden sm:block">
                  <ToggleTheme />
                </div>

                <Separator
                  orientation="vertical"
                  className="h-8 bg-violet-500/20 hidden sm:block"
                />

                {/* Signed In State */}
                <SignedIn>
                  <div className="flex items-center gap-3">
                    {/* Admin Badge & Button */}
                    <Activity mode={userRole === Role.ADMIN ? "visible" : "hidden"}>
                      {/* {userRole && userRole === Role.ADMIN && ( */}
                      <>
                        <Badge className="hidden lg:flex bg-linear-to-r from-fuchsia-500 to-purple-500 text-white border-none shadow-lg shadow-fuchsia-500/30 px-3 py-1 font-semibold">
                          ⚡ ADMIN
                        </Badge>
                        <Link href="/create-problem">
                          <Button
                            size="sm"
                            className="bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white font-medium shadow-lg shadow-violet-500/30 border-none transition-all duration-300 hover:scale-105"
                          >
                            <span className="mr-2">➕</span>
                            Create Problem
                          </Button>
                        </Link>
                      </>
                    </Activity>
                    {/* )} */}

                    {/* User Role Badge for Regular Users */}
                    <Activity mode={userRole === Role.USER ? "visible" : "hidden"}>
                      {/*   {userRole && userRole === Role.USER && ( */}
                      <Badge className="hidden lg:flex bg-violet-500/20 text-violet-300 border border-violet-500/30 px-3 py-1 font-medium">
                        👨‍💻 USER
                      </Badge>
                    </Activity>

                    {/* User Button */}
                    <div className="relative">
                      {/*  <div className="absolute -inset-1 bg-linear-to-r from-violet-500 to-fuchsia-500 rounded-full opacity-30 blur"></div> */}
                      <div className="relative ring-2 ring-violet-500/50 rounded-full hover:ring-violet-400 transition-all duration-300">
                        <UserButton
                          appearance={{
                            elements: {
                              avatarBox: "w-9 h-12",
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </SignedIn>

                {/* Signed Out State */}
                <SignedOut>
                  <div className="flex items-center gap-2">
                    <SignInButton>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-sm font-medium text-violet-300 hover:text-white hover:bg-violet-600/30 border border-violet-500/30 hover:border-violet-500/50 transition-all duration-200"
                      >
                        Sign In
                      </Button>
                    </SignInButton>
                    <SignUpButton>
                      <Button
                        size="sm"
                        className="text-sm font-semibold bg-linear-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white shadow-lg shadow-violet-500/30 border-none transition-all duration-300 hover:scale-105"
                      >
                        <span className="mr-1">✨</span>
                        Sign Up
                      </Button>
                    </SignUpButton>
                  </div>
                </SignedOut>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
