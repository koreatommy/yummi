"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function CTASection() {
  return (
    <section id="start" className="py-20 px-4 bg-gradient-to-br from-green-600 via-green-500 to-emerald-600 dark:from-green-800 dark:via-green-700 dark:to-emerald-800">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>지금 바로 시작하세요</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            지금 바로 시작해보세요!
          </h2>
          
          <p className="text-xl md:text-2xl text-green-50 dark:text-green-100">
            무료로 체험하고, 급식 잔반을 줄여보세요
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto font-semibold"
              onClick={() => {
                toast.info("준비중입니다", {
                  description: "회원가입 페이지는 준비 중입니다.",
                });
              }}
            >
              무료로 시작하기
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto font-semibold"
            >
              <Link href="#features">
                더 알아보기
              </Link>
            </Button>
          </div>
          
          <div className="pt-8 text-green-50 dark:text-green-100 text-sm">
            <p>무료 체험 기간 제공 • 학교 단위 구독 가능</p>
          </div>
        </div>
      </div>
    </section>
  );
}

