/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BookHeart, Shield, CalendarDays, Activity, ChevronRight, Smartphone, Sparkles, Lock } from 'lucide-react';
import React, { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-blue-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-stone-200/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-blue-600">
            <BookHeart className="w-6 h-6" />
            <span>감정 일기 뷰 Vhue</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <a href="#features" className="hover:text-stone-900 transition-colors">주요 기능</a>
            <a href="#preview" className="hover:text-stone-900 transition-colors">앱 미리보기</a>
            <a href="#privacy" className="hover:text-stone-900 transition-colors">프라이버시</a>
          </div>
          <a href="#waitlist" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors shadow-sm">
            사전예약
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>9월 MVP 출시 예정!</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.15] tracking-tight mb-6 text-stone-900">
              기록만 하세요,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">당신의 마음은<br/> 우리가 읽을게요.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 mb-8 leading-relaxed">
              감정을 고르느라 고민하지 마세요. 텍스트에서 감정을 자동으로 추출하여 시각화해주는 프라이빗 타임라인 일기 앱입니다.
            </p>
            
            <div id="waitlist" className="bg-white p-2 rounded-2xl shadow-lg border border-stone-100 max-w-md flex">
              {isSubmitted ? (
                <div className="w-full py-3 px-4 text-center text-emerald-600 font-medium flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  사전예약이 완료되었습니다!
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full flex">
                  <input 
                    type="email" 
                    placeholder="이메일 주소를 입력해주세요" 
                    className="flex-1 bg-transparent px-4 py-3 outline-none text-stone-900 placeholder:text-stone-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="bg-stone-900 hover:bg-stone-800 text-white px-6 py-3 rounded-xl font-medium transition-colors whitespace-nowrap">
                    출시 알림 받기
                  </button>
                </form>
              )}
            </div>
            <p className="text-sm text-stone-500 mt-4 flex items-center gap-1">
              <Lock className="w-3 h-3" /> 스팸 메일은 보내지 않습니다.
            </p>
          </motion.div>

          {/* Hero Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-[320px] md:max-w-[360px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-[3rem] blur-2xl opacity-20 transform rotate-6"></div>
            <div className="relative bg-white border-[8px] border-stone-900 rounded-[3rem] h-[700px] overflow-hidden shadow-2xl flex flex-col">
              {/* Mockup Header */}
              <div className="pt-12 pb-4 px-6 text-center border-b border-stone-100">
                <h3 className="font-bold text-lg">2026년 02월</h3>
                <div className="flex justify-between mt-6 px-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, i) => (
                    <div key={day} className="flex flex-col items-center gap-2">
                      <span className="text-[10px] text-stone-400 uppercase">{day}</span>
                      <div className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium ${i === 2 ? 'bg-blue-500 text-white shadow-md' : 'text-stone-700'}`}>
                        {i + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Mockup Content */}
              <div className="flex-1 p-6 bg-stone-50/50 relative">
                <div className="bg-stone-100 rounded-2xl p-5 mb-6 max-w-[85%] rounded-tl-none">
                  <p className="text-stone-800 font-medium leading-relaxed">오늘 무슨 일 있었어?<br/>네 마음이 궁금해.</p>
                </div>
                
                <div className="border-2 border-dashed border-stone-300 rounded-2xl p-5 text-stone-400 text-sm flex items-center justify-center">
                  터치해서 일기 쓰기...
                </div>

                {/* Floating Action Button - Moved to bottom nav */}
              </div>
              {/* Mockup Bottom Nav */}
              <div className="h-20 bg-white border-t border-stone-100 flex justify-around items-center pb-4 relative">
                <div className="flex flex-col items-center gap-1 text-blue-500 w-16">
                  <CalendarDays className="w-6 h-6" />
                  <span className="text-[10px] font-medium">달력</span>
                </div>
                
                {/* Floating Action Button */}
                <div className="w-14 h-14 bg-blue-500 rounded-full shadow-lg flex items-center justify-center text-white -mt-8 relative z-10 border-4 border-white">
                  <span className="text-3xl font-light leading-none mb-1">+</span>
                </div>

                <div className="flex flex-col items-center gap-1 text-stone-400 w-16">
                  <Smartphone className="w-6 h-6" />
                  <span className="text-[10px] font-medium">MY</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">당신의 감정을 기록하는<br/>가장 똑똑한 방법</h2>
            <p className="text-stone-500 text-lg">핵심 기능은 이미 모두 준비되어 있습니다.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Sparkles className="w-6 h-6 text-blue-500" />,
                title: "감정 자동 추출",
                desc: "감정을 고르지 마세요. 작성된 글의 문맥을 분석하여 당신의 진짜 감정을 읽어냅니다."
              },
              {
                icon: <Activity className="w-6 h-6 text-indigo-500" />,
                title: "타임라인 트래킹",
                desc: "하루에도 몇 번씩 바뀌는 감정. 타임라인 형식으로 남겨진 일기로 하루 사이의 감정 변화를 체크하세요."
              },
              {
                icon: <CalendarDays className="w-6 h-6 text-rose-500" />,
                title: "감정 시각화 캘린더",
                desc: "현재, 최근, 과거의 내 감정 상태를 다채로운 색상의 달력으로 한눈에 모니터링할 수 있습니다."
              },
              {
                icon: <Shield className="w-6 h-6 text-emerald-500" />,
                title: "완벽한 프라이버시",
                desc: "가장 개인적인 기록인 일기. 서버로 공유되지 않고 오직 당신의 기기에만 안전하게 보관됩니다."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-stone-50 rounded-3xl p-8 border border-stone-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-stone-900">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section id="preview" className="py-24 bg-stone-900 text-white px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                색으로 물드는<br/>나만의 감정 달력
              </h2>
              <p className="text-stone-400 text-lg mb-8 leading-relaxed">
                매일매일 기록된 감정들이 모여 하나의 아름다운 달력을 완성합니다. 
                어떤 날은 기쁨의 노란색으로, 어떤 날은 우울함의 파란색으로. 
                나의 한 달이 어떤 색이었는지 직관적으로 확인하세요.
              </p>
              <ul className="space-y-4">
                {[
                  "일기 작성 시 자동으로 감정 색상 부여",
                  "월별 감정 통계 및 흐름 파악",
                  "특정 감정의 날만 모아보기 기능 지원"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-300">
                    <div className="w-6 h-6 rounded-full bg-stone-800 flex items-center justify-center shrink-0">
                      <ChevronRight className="w-4 h-4 text-blue-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
              {/* Calendar Mockup */}
              <div className="relative bg-white text-stone-900 rounded-[2rem] p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 max-w-md mx-auto">
                <div className="text-center mb-8">
                  <h3 className="font-bold text-xl">2026년 01월</h3>
                  <div className="w-8 h-1 bg-stone-200 mx-auto mt-2 rounded-full"></div>
                </div>
                <div className="grid grid-cols-7 gap-y-6 gap-x-2 text-center mb-4">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                    <div key={i} className="text-xs font-medium text-stone-400">{d}</div>
                  ))}
                  
                  {/* Empty days */}
                  {Array.from({length: 3}).map((_, i) => <div key={`empty-${i}`} />)}
                  
                  {/* Days with emotion colors */}
                  {[
                    { d: 1, c: 'bg-transparent' }, { d: 2, c: 'bg-transparent' }, { d: 3, c: 'bg-transparent' },
                    { d: 4, c: 'bg-transparent' }, { d: 5, c: 'bg-transparent' }, { d: 6, c: 'bg-transparent' },
                    { d: 7, c: 'bg-transparent' }, { d: 8, c: 'bg-transparent' }, { d: 9, c: 'bg-transparent' },
                    { d: 10, c: 'bg-transparent' },
                    { d: 11, c: 'bg-stone-100 text-stone-500' }, 
                    { d: 12, c: 'bg-rose-400 text-white shadow-md shadow-rose-200' }, 
                    { d: 13, c: 'bg-stone-100 text-stone-500' }, 
                    { d: 14, c: 'bg-emerald-300 text-emerald-900 shadow-md shadow-emerald-100' }, 
                    { d: 15, c: 'bg-gradient-to-br from-amber-400 to-rose-400 text-white shadow-md shadow-orange-200' }, 
                    { d: 16, c: 'bg-stone-500 text-white shadow-md shadow-stone-200' }, 
                    { d: 17, c: 'bg-purple-400 text-white shadow-md shadow-purple-200' },
                    { d: 18, c: 'bg-rose-500 text-white shadow-md shadow-rose-200' }, 
                    { d: 19, c: 'bg-amber-400 text-amber-900 shadow-md shadow-amber-200' }, 
                    { d: 20, c: 'bg-transparent' }, { d: 21, c: 'bg-transparent' }, { d: 22, c: 'bg-transparent' },
                    { d: 23, c: 'bg-transparent' }, { d: 24, c: 'bg-transparent' }, { d: 25, c: 'bg-transparent' },
                    { d: 26, c: 'bg-transparent' }, 
                    { d: 27, c: 'bg-purple-400 text-white ring-2 ring-blue-500 ring-offset-2 shadow-md shadow-purple-200' },
                  ].map((day, i) => (
                    <div key={i} className="flex justify-center">
                      <div className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-medium ${day.c || 'text-stone-700 hover:bg-stone-100'}`}>
                        {day.d}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Preview Section */}
      <section className="py-24 bg-stone-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row">
            
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 blur-3xl rounded-full"></div>
              {/* Timeline Mockup */}
              <div className="relative bg-white rounded-[2rem] p-8 shadow-xl max-w-md mx-auto border border-stone-100">
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-200 before:to-transparent">
                  
                  {/* Timeline Item 1 */}
                  <div className="relative flex items-center gap-4 group is-active">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full border-4 border-white bg-purple-400 shadow shrink-0 z-10 ml-0.5"></div>
                    <div className="flex-1 p-4 rounded-2xl bg-white border border-stone-100 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-stone-400">15:52</span>
                      </div>
                      <p className="text-stone-800 text-sm leading-relaxed">
                        오랜만에 작업을 하려니 불안과 설렘이 함께다.
                      </p>
                    </div>
                  </div>

                  {/* Timeline Item 2 */}
                  <div className="relative flex items-center gap-4 group is-active">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full border-4 border-white bg-stone-200 shadow shrink-0 z-10 ml-0.5"></div>
                    <div className="flex-1 p-4 rounded-2xl bg-white border border-stone-100 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-stone-400">15:52</span>
                      </div>
                      <p className="text-stone-800 text-sm leading-relaxed">
                        그냥 다 끄고 달리러 나갈까.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-stone-900">
                하루의 감정선,<br/>타임라인으로 한눈에
              </h2>
              <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                아침의 우울함이 저녁의 평온함으로 바뀌기까지. 
                시간대별로 남겨진 일기들을 타임라인 형식으로 확인하며, 
                내 감정이 하루 동안 어떻게 흘러갔는지 모니터링하세요.
              </p>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-stone-200 shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">감정의 흐름 파악</h4>
                  <p className="text-sm text-stone-500">시간에 따른 감정 변화를 시각적으로 추적합니다.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className="py-24 bg-blue-600 text-white px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <Shield className="w-16 h-16 mx-auto mb-8 text-blue-200" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            당신의 일기는 오직<br/>당신만 볼 수 있습니다
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed">
            사용자의 일기 데이터를 외부 서버로 전송하거나 저장하지 않습니다.<br className="hidden md:block"/>
            모든 데이터는 오직 사용자의 기기 내부에만 안전하게 보관됩니다.
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20">
            <Lock className="w-5 h-5" />
            <span className="font-medium">100% 로컬 저장소 활용</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-xl text-white">
            <BookHeart className="w-6 h-6" />
            <span>감정 일기 뷰 Vhue</span>
          </div>
          <div className="text-sm">
            &copy; 2026 뷰 (Vhue). All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">이용약관</a>
            <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition-colors">고객지원</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
