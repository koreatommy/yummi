"use client";

import { Trash2, AlertCircle, BookOpen, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const problems = [
  {
    icon: Trash2,
    title: "음식물 쓰레기 과다 발생",
    description: "초등학교 급식 잔반량이 연간 수천 톤에 달합니다",
    stat: "연간 5,000톤",
    color: "text-red-500",
  },
  {
    icon: AlertCircle,
    title: "편식·식습관 문제",
    description: "저학년 학생들의 편식과 불균형한 식습관이 지속됩니다",
    stat: "학생 1인당 평균 120g",
    color: "text-orange-500",
  },
  {
    icon: BookOpen,
    title: "환경 교육 실천 부족",
    description: "이론 중심의 교육으로 실질적인 환경 보호 체험이 부족합니다",
    stat: "CO₂ 배출량 증가",
    color: "text-yellow-500",
  },
  {
    icon: Eye,
    title: "기존 관리 방식의 한계",
    description: "시각적 확인과 단순 지도만으로는 지속적인 변화가 어렵습니다",
    stat: "정량화 시스템 부재",
    color: "text-blue-500",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            왜 급식 잔반 문제가 심각한가요?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            현재 초등학교에서 직면하고 있는 급식 잔반 문제의 현실
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Card
                key={index}
                className="border-2 hover:border-green-500 dark:hover:border-green-400 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`p-4 rounded-full bg-gray-100 dark:bg-gray-800 ${problem.color}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {problem.description}
                    </p>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mt-2">
                      {problem.stat}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-8 text-center">
          <p className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            객관적인 측정과 피드백 시스템이 필요합니다
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            단순한 지도가 아닌, 학생들이 스스로 참여하고 동기부여를 받을 수 있는 구조가 필요합니다
          </p>
        </div>
      </div>
    </section>
  );
}

