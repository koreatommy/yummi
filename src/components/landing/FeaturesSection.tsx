"use client";

import { useState, useRef } from "react";
import { Scan, Trophy, Gift, Shield, Leaf, Lightbulb, ClipboardCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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

const selfTestQuestions = [
  "급식 메뉴 중 새로운 음식이나 모르는 재료가 나오면 잘 먹지 않고 남기는 편이다.",
  "식사 시간에 스마트폰 사용, 대화 등으로 집중하지 못해 식사를 끝까지 먹지 못한 적이 자주 있다.",
  "아침을 거르거나 간식을 많이 먹어 점심시간에 배가 별로 고프지 않을 때가 많다.",
  "급식의 냄새, 질감, 모양 등 외형 때문에 먹기 전에 거부감이 생기는 편이다.",
  "급식 양 조절을 하지 않아 항상 너무 많은 양을 받아 결국 남기는 경우가 있다.",
  "먹기 싫은 반찬을 접시에 그대로 남기고, 좋아하는 메뉴만 선택적으로 먹는 경향이 있다.",
];

export default function FeaturesSection() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const confettiTriggered = useRef(false);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(6).fill(false));
  const [showResult, setShowResult] = useState(false);

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

  const handleCheckboxChange = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
    setShowResult(false);
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const checkedCount = checkedItems.filter(Boolean).length;
  const hasRisk = checkedCount >= 2;

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
        
        {/* 자가 테스트 섹션 */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 text-green-700 dark:text-green-300 mb-4">
              <ClipboardCheck className="w-5 h-5" />
              <span className="font-medium">자가 테스트</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              혹시 나도 급식을 많이 남길까?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              아래 항목 중 해당되는 것을 체크해보세요
            </p>
          </div>
          
          <Card className="border-2 shadow-xl max-w-5xl mx-auto bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
            <CardContent className="p-8 md:p-10">
              <div className="space-y-6">
                <div className="space-y-3">
                  {selfTestQuestions.map((question, index) => (
                    <label
                      key={index}
                      className={`flex items-start gap-4 p-5 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                        checkedItems[index]
                          ? "bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700 shadow-md"
                          : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700 hover:shadow-sm"
                      }`}
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <input
                          type="checkbox"
                          checked={checkedItems[index]}
                          onChange={() => handleCheckboxChange(index)}
                          className="w-6 h-6 text-green-600 border-2 border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-green-500 focus:ring-offset-2 cursor-pointer transition-all"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className={`text-base md:text-lg leading-relaxed ${
                          checkedItems[index]
                            ? "text-gray-900 dark:text-gray-100 font-medium"
                            : "text-gray-700 dark:text-gray-300"
                        }`}>
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 font-semibold text-sm mr-3">
                            {index + 1}
                          </span>
                          {question}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
                
                <div className="pt-6 border-t-2 border-gray-200 dark:border-gray-700">
                  <Button
                    onClick={handleShowResult}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-lg font-semibold py-7 shadow-lg hover:shadow-xl transition-all duration-200"
                    size="lg"
                  >
                    결과보기
                  </Button>
                </div>
                
                {showResult && (
                  <div className={`mt-6 p-8 rounded-xl border-2 shadow-lg ${
                    hasRisk 
                      ? "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-900/20 border-orange-300 dark:border-orange-700" 
                      : "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-900/20 border-green-300 dark:border-green-700"
                  }`}>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-full ${
                          hasRisk 
                            ? "bg-orange-200 dark:bg-orange-800" 
                            : "bg-green-200 dark:bg-green-800"
                        }`}>
                          <span className={`text-2xl ${hasRisk ? "text-orange-600" : "text-green-600"}`}>
                            {hasRisk ? "⚠️" : "✅"}
                          </span>
                        </div>
                        <h4 className={`text-2xl font-bold ${
                          hasRisk 
                            ? "text-orange-700 dark:text-orange-300" 
                            : "text-green-700 dark:text-green-300"
                        }`}>
                          {hasRisk ? "잔반 발생 가능성이 있습니다" : "양호한 식사 습관입니다"}
                        </h4>
                      </div>
                      {hasRisk ? (
                        <div className="space-y-3 text-gray-800 dark:text-gray-200 pl-2">
                          <p className="text-lg font-semibold">
                            {checkedCount}개 항목이 해당됩니다.
                          </p>
                          <div className="space-y-2 text-base leading-relaxed">
                            <p>
                              잔반이 발생하는 습관이 있을 가능성이 높습니다.
                            </p>
                            <p>
                              식사 집중, 양 조절, 새로운 음식 시도하기 등을 통해 개선이 필요합니다.
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2 text-gray-800 dark:text-gray-200 pl-2">
                          <p className="text-base leading-relaxed">
                            현재 식사 습관이 양호합니다. 계속 좋은 습관을 유지해주세요!
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
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

