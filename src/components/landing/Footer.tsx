"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const footerLinks = {
  product: [
    { name: "기능 소개", href: "#features", isExternal: false },
    { name: "가격", href: "#pricing", isExternal: true },
    { name: "체험하기", href: "#start", isExternal: false },
  ],
  company: [
    { name: "동아리 소개", href: "/about", isExternal: true },
    { name: "블로그", href: "/blog", isExternal: true },
    { name: "동아리 모집", href: "/careers", isExternal: true },
  ],
  support: [
    { name: "문의하기", href: "/contact", isExternal: true },
    { name: "도움말", href: "/help", isExternal: true },
    { name: "FAQ", href: "/faq", isExternal: true },
  ],
};

const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal: boolean) => {
  if (isExternal) {
    e.preventDefault();
    // 앵커 링크인 경우 섹션 존재 여부 확인
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (!element) {
        toast.info("준비중입니다", {
          description: "해당 페이지는 준비 중입니다.",
        });
      }
    } else {
      toast.info("준비중입니다", {
        description: "해당 페이지는 준비 중입니다.",
      });
    }
  }
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* 로고 및 소개 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">냠냠급식</h3>
            <p className="text-sm text-gray-400">
              AI로 측정하는 즐거운 급식 잔반 줄이기
              <br />
              환경 교육과 기부까지
            </p>
          </div>
          
          {/* 제품 */}
          <div>
            <h4 className="text-white font-semibold mb-4">제품</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                    onClick={(e) => handleLinkClick(e, link.href, link.isExternal)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* 회사 */}
          <div>
            <h4 className="text-white font-semibold mb-4">동아리</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                    onClick={(e) => handleLinkClick(e, link.href, link.isExternal)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* 지원 */}
          <div>
            <h4 className="text-white font-semibold mb-4">지원</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                    onClick={(e) => handleLinkClick(e, link.href, link.isExternal)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* 연락처 정보 */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>lipsciencelip@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>010-8227-1730</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>립사이언스</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              © 2025 냠냠급식. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

