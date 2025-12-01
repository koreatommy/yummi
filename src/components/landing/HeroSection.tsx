"use client";

import { Button } from "@/components/ui/button";
import { Camera, Sparkles, Heart } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 pt-24 pb-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 텍스트 콘텐츠 */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>초등학생 창업동아리 냠냠급식</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
              급식 잔반,
              <br />
              <span className="text-green-600 dark:text-green-400">
                이제 재미있게 줄여요!
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
              AI가 측정하고, 게임처럼 즐기고,
              <br />
              기부까지 연결되는 스마트 급식 관리
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 h-auto"
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
                무료로 시작하기
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 h-auto border-2"
              >
                <Link href="#features">
                  체험해보기
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Camera className="w-5 h-5" />
                <span className="text-sm">사진 한 장으로 측정</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="text-sm">기부까지 연결</span>
              </div>
            </div>
          </div>
          
          {/* 비주얼 영역 */}
          <div className="relative">
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-lg p-4 text-white">
                  <div className="text-sm opacity-90">오늘의 잔반 점수</div>
                  <div className="text-4xl font-bold">95점</div>
                  <div className="text-sm mt-2">🎉 완벽해요!</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-yellow-100 dark:bg-yellow-900/30 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">🏆</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">랭킹 1위</div>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">⭐</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">연속 7일</div>
                  </div>
                  <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-3 text-center">
                    <div className="text-2xl mb-1">💚</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">포인트 50</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-yellow-400 dark:bg-yellow-600 rounded-full w-24 h-24 -z-10 blur-2xl opacity-50"></div>
            <div className="absolute -top-4 -left-4 bg-green-400 dark:bg-green-600 rounded-full w-32 h-32 -z-10 blur-2xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

