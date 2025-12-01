"use client";

import { Brain, Gamepad2, HeartHandshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const solutions = [
  {
    icon: Brain,
    title: "AI 자동 분석",
    description: "식판 사진만 찍으면 자동으로 잔반량을 정확하게 측정합니다",
    details: [
      "초정밀 AI 이미지 분석 기술로 잔반량을 0.1g 단위까지 측정",
      "배식량 대비 잔반 비율을 실시간으로 계산하여 즉시 피드백 제공",
      "복잡한 설정 없이 스마트폰 카메라로 간편하게 촬영",
      "학생 개인의 식습관 변화를 데이터로 추적하고 분석",
    ],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    icon: Gamepad2,
    title: "게임화 동기부여",
    description: "뱃지, 랭킹, 포인트로 즐겁게 참여하며 자연스럽게 습관을 만듭니다",
    details: [
      "연속 무잔반 달성 시 특별 뱃지와 보상으로 성취감 부여",
      "학급·학교 단위 랭킹으로 건강한 경쟁 문화 조성",
      "포인트 적립 시스템으로 매일의 작은 실천이 가치로 연결",
      "캐릭터 성장 시스템으로 장기적인 동기부여 유지",
    ],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    icon: HeartHandshake,
    title: "실질적 기여",
    description: "모은 포인트로 기부하고, 탄소 절감량을 시각적으로 확인합니다",
    details: [
      "적립한 포인트를 기아·난민·지역 아동센터 식사 지원에 기부",
      "개인별·학급별·학교별 탄소 절감량을 실시간으로 시각화",
      "기부 증서 자동 발급으로 나눔의 가치를 구체적으로 확인",
      "환경 보호의 실질적 기여를 숫자로 확인하며 자긍심 향상",
    ],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            냠냠급식이 해결합니다
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            기술과 교육이 만나 만든 혁신적인 솔루션
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:scale-105`}
              >
                {/* 그라데이션 배경 오버레이 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* 큰 배경 아이콘 */}
                <div className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br ${solution.color} opacity-10 dark:opacity-5 rounded-full blur-2xl group-hover:opacity-20 dark:group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative p-8 lg:p-10">
                  {/* 상단: 아이콘과 제목 */}
                  <div className={`flex items-start gap-6 mb-6 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* 아이콘 영역 */}
                    <div className={`flex-shrink-0 relative`}>
                      <div className={`p-5 rounded-2xl bg-gradient-to-br ${solution.color} text-white shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 lg:w-10 lg:h-10" />
                      </div>
                      {/* 아이콘 주변 장식 */}
                      <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br ${solution.color} rounded-full opacity-60 animate-pulse`}></div>
                    </div>
                    
                    {/* 제목 영역 */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 dark:group-hover:from-white dark:group-hover:to-gray-300 transition-all duration-300">
                        {solution.title}
                      </h3>
                      <div className={`h-1 w-16 bg-gradient-to-r ${solution.color} rounded-full`}></div>
                    </div>
                  </div>
                  
                  {/* 설명 */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-base lg:text-lg font-medium mb-6">
                    {solution.description}
                  </p>
                  
                  {/* 특징 리스트 */}
                  <ul className="space-y-3">
                    {solution.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm lg:text-base text-gray-600 dark:text-gray-400 group/item"
                      >
                        <div className={`flex-shrink-0 mt-1.5 w-6 h-6 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center opacity-80 group-hover/item:opacity-100 transition-opacity`}>
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="leading-relaxed flex-1">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* 하단 장식 라인 */}
                  <div className={`mt-8 h-1 bg-gradient-to-r ${solution.color} rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300`}></div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold">
            ESG 실천 + 환경 교육 + 기부 활동을 한 번에!
          </div>
        </div>
      </div>
    </section>
  );
}

