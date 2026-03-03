"use client";

import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar, Clock, Users, MapPin, ArrowRight } from "lucide-react";

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "13:00", 
  "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"
];

const guestOptions = ["1명", "2명", "3명", "4명", "5명 이상"];

const branches = [
  { id: "gangnam", name: "강남점", address: "서울 강남구 테헤란로 123" },
  { id: "seongsu", name: "성수점", address: "서울 성동구 성수이로 45" },
  { id: "hannam", name: "한남점", address: "서울 용산구 이태원로 67" },
  { id: "bukchon", name: "북촌점", address: "서울 종로구 북촌로 89" },
  { id: "yeouido", name: "여의도점", address: "서울 영등포구 여의대로 101" },
];

export function ReservationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedGuests, setSelectedGuests] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section
        id="reservation"
        className="py-24 lg:py-32 bg-primary text-primary-foreground"
      >
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl">예약이 완료되었습니다</h2>
            <p className="mt-6 text-primary-foreground/80 text-lg">
              예약 확인 문자가 {phone}으로 발송됩니다.
              <br />
              MAISON에서 특별한 시간 보내세요.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setSelectedDate("");
                setSelectedTime("");
                setSelectedGuests("");
                setSelectedBranch("");
                setName("");
                setPhone("");
              }}
              className="mt-8 px-8 py-3 bg-primary-foreground text-primary font-medium rounded-full hover:bg-primary-foreground/90 transition-colors"
            >
              새 예약하기
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="reservation"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side - Info */}
          <div
            className={cn(
              "transition-all duration-1000",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <span className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase">
              Reservation
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight">
              특별한 순간을
              <br />
              예약하세요
            </h2>
            <p className="mt-8 text-primary-foreground/80 text-lg leading-relaxed">
              프라이빗 공간에서의 미팅, 특별한 날의 브런치,
              또는 조용한 오후의 커피 타임까지.
              MAISON에서 당신만의 시간을 보내세요.
            </p>

            {/* Branch List */}
            <div className="mt-10 space-y-4">
              <h4 className="text-sm tracking-widest uppercase text-primary-foreground/60">
                매장 안내
              </h4>
              {branches.map((branch) => (
                <div
                  key={branch.id}
                  className="flex items-start gap-3 p-4 rounded-lg bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors cursor-pointer"
                  onClick={() => setSelectedBranch(branch.id)}
                >
                  <MapPin className="w-5 h-5 mt-0.5 text-primary-foreground/60" />
                  <div>
                    <p className="font-medium">{branch.name}</p>
                    <p className="text-sm text-primary-foreground/60">{branch.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div
            className={cn(
              "bg-card text-card-foreground rounded-2xl p-8 lg:p-10 shadow-2xl transition-all duration-1000 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h3 className="font-serif text-2xl text-foreground mb-8">예약 정보</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Branch Selection */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  매장 선택
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {branches.map((branch) => (
                    <button
                      key={branch.id}
                      type="button"
                      onClick={() => setSelectedBranch(branch.id)}
                      className={cn(
                        "px-4 py-2 text-sm rounded-lg border transition-all",
                        selectedBranch === branch.id
                          ? "border-accent bg-accent/10 text-foreground"
                          : "border-border text-muted-foreground hover:border-accent/50"
                      )}
                    >
                      {branch.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                  <Calendar className="w-4 h-4 text-accent" />
                  날짜 선택
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-accent focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Time Selection */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                  <Clock className="w-4 h-4 text-accent" />
                  시간 선택
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={cn(
                        "px-3 py-2 text-sm rounded-lg border transition-all",
                        selectedTime === time
                          ? "border-accent bg-accent/10 text-foreground"
                          : "border-border text-muted-foreground hover:border-accent/50"
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guests Selection */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                  <Users className="w-4 h-4 text-accent" />
                  인원
                </label>
                <div className="flex flex-wrap gap-2">
                  {guestOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedGuests(option)}
                      className={cn(
                        "px-4 py-2 text-sm rounded-lg border transition-all",
                        selectedGuests === option
                          ? "border-accent bg-accent/10 text-foreground"
                          : "border-border text-muted-foreground hover:border-accent/50"
                      )}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    이름
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="홍길동"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-accent focus:outline-none transition-colors placeholder:text-muted-foreground"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    연락처
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="010-0000-0000"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:border-accent focus:outline-none transition-colors placeholder:text-muted-foreground"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || !selectedBranch || !selectedDate || !selectedTime || !selectedGuests || !name || !phone}
                className={cn(
                  "w-full py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all",
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                  "disabled:opacity-50 disabled:cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    예약 중...
                  </span>
                ) : (
                  <>
                    예약 완료하기
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
