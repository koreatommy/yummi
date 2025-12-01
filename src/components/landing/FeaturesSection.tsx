"use client";

import { useState, useRef } from "react";
import { Scan, Trophy, Gift, Shield, Leaf, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import confetti from "canvas-confetti";

const features = [
  {
    icon: Scan,
    title: "스마트한 잔반 측정",
    description: "식판 사진 한 장으로 정확한 잔반량 자동 분석",
    details: [
      "배식량 대비 잔반 비율 계산",
      "0~100점 점수화",
      "단계별 피드백 제공",
    ],
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    icon: Trophy,
    title: "재미있게 습관 만들기",
    description: "뱃지, 스탬프, 랭킹으로 자연스럽게 잔반 줄이기",
    details: [
      "연속 무잔반 뱃지",
      "학급/학교 랭킹",
      "캐릭터 성장 시스템",
    ],
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    icon: Gift,
    title: "작은 실천이 큰 변화로",
    description: "모은 포인트로 기아·난민·지역 아동센터 식사 지원",
    details: [
      "잔반 점수 → 포인트 환산",
      "기부 증서 자동 발급",
      "기부 영향력 시각화",
    ],
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-50 dark:bg-green-900/20",
  },
];

export default function FeaturesSection() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const confettiTriggered = useRef(false);

  const triggerConfetti = () => {
    if (confettiTriggered.current) return;
    confettiTriggered.current = true;

    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: NodeJS.Timeout = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  };

  const handleImageLoad = () => {
    if (!imageLoaded) {
      setImageLoaded(true);
      setTimeout(() => {
        triggerConfetti();
      }, 300);
    }
  };

  return (
    <section id="features" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            주요 기능
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            냠냠급식의 핵심 기능으로 급식 잔반을 즐겁게 줄여보세요
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`${feature.bgColor} border-2 hover:shadow-2xl transition-all duration-300`}
              >
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className={`inline-flex p-4 rounded-xl ${feature.bgColor}`}>
                      <Icon className={`w-10 h-10 ${feature.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <span className={`${feature.color} mt-1`}>✓</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* 랭킹 이미지 섹션 */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 text-orange-700 dark:text-orange-300 mb-4">
              <Trophy className="w-5 h-5" />
              <span className="font-medium">랭킹 시스템</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              즐거운 경쟁으로 습관 만들기
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              학급과 학교 단위 랭킹으로 건강한 경쟁 문화를 만들어가요
            </p>
          </div>
          
          <Card className="border-2 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardContent className="p-4 md:p-8">
              <div className="relative w-full bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 rounded-lg overflow-hidden">
                <div className="relative w-full" style={{ minHeight: '400px' }}>
                  <Image
                    src="/ranking.png"
                    alt="냠냠급식 랭킹 시스템"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                    priority={false}
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    onLoad={handleImageLoad}
                  />
                  {imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="animate-ping absolute w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* 아이디어 스케치 섹션 */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 mb-4">
              <Lightbulb className="w-5 h-5" />
              <span className="font-medium">아이디어 스케치</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              서비스 와이어프레임
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              냠냠급식의 핵심 기능과 사용자 경험을 시각화한 초기 아이디어 스케치입니다
            </p>
          </div>
          
          <Card className="border-2 overflow-hidden shadow-lg">
            <CardContent className="p-4 md:p-8">
              <div className="relative w-full bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
                <div className="relative w-full" style={{ minHeight: '400px' }}>
                  <Image
                    src="/yummi_wire.png"
                    alt="냠냠급식 와이어프레임 아이디어 스케치"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                    priority={false}
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

