"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { toast } from "sonner";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "소개", href: "#problem" },
    { name: "기능", href: "#features" },
    { name: "문제", href: "#problem" },
    { name: "솔루션", href: "#solution" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <Link href="/" className="text-2xl font-bold text-green-600 dark:text-green-400">
            하남교육재단 하리보 팀
          </Link>

          {/* 데스크톱 메뉴 */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Button
              className="bg-green-600 hover:bg-green-700 text-white"
              onClick={() => {
                const element = document.getElementById("start");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                } else {
                  toast.info("준비중입니다", {
                    description: "해당 페이지는 준비 중입니다.",
                  });
                }
              }}
            >
              시작하기
            </Button>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors font-medium px-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                className="bg-green-600 hover:bg-green-700 text-white w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  const element = document.getElementById("start");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  } else {
                    toast.info("준비중입니다", {
                      description: "해당 페이지는 준비 중입니다.",
                    });
                  }
                }}
              >
                시작하기
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

