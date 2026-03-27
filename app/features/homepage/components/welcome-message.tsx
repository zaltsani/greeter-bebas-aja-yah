import { useMemo } from "react";
import { useProfile } from "~/hooks/fetch-user";
import { getCurrentDateFormatted } from "~/utils/get-current-date-formatted";
import { useRealTime, useWeather } from "~/utils/get-current-time-formatted";
import { greeting_list_definition } from "../greeting/greeting-list-definition";
import { useGreetingSelection } from "../greeting/greeting-selection";

export function WelcomeMessage() {
  const initialGreeting = useGreetingSelection(greeting_list_definition);
  const greeting = useMemo(() => initialGreeting, []);

  const { data: profile, isLoading: profileLoading } = useProfile();
  const { formattedTime, ampm } = useRealTime();
  const { data: weather, isLoading: weatherLoading } = useWeather();
  const currentDate = getCurrentDateFormatted();

  const name = profileLoading ? "..." : profile?.name || "Explorer";
  const weatherIcon = (code?: number) => {
    if (code === undefined) return "cloudy";
    if (code === 0) return "sunny";
    if (code > 0 && code < 4) return "partly_cloudy_day";
    if (code >= 45) return "rainy";
    return "cloudy";
  };

  return (
    <div className="relative w-full min-h-[350px] flex flex-col justify-end p-8 md:p-12 rounded-[2.5rem] overflow-hidden shadow-sm border border-white/20 group">
      <div className="absolute inset-0 z-0">
        <img
          src="/card-greeting.png"
          alt="Peaceful Background"
          className="w-full h-full object-cover opacity-80 transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Widgets Section */}
      <div className="absolute top-8 left-8 right-8 z-10 flex flex-col sm:flex-row justify-between items-start gap-4">
        <div className="bg-white/40 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2 border border-white/20">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#343230]">
            {greeting === "Good Morning" ? "Morning Ember" : "Good Evening Dear"}
          </span>
        </div>

        {/* Real-time & Weather Widget */}
        <div className="bg-white/60 backdrop-blur-xl p-4 rounded-[2rem] flex items-center gap-4 border border-white/40 shadow-xl transition-all hover:scale-105">
          <div className="text-right">
            <p className="text-3xl font-black text-[#343230] leading-none tabular-nums">
              {formattedTime}
            </p>
            <p className="text-[10px] font-bold text-[#615e5c] uppercase tracking-widest">{ampm}</p>
          </div>

          <div className="w-px h-10 bg-[#343230]/10" />

          <div className="flex items-center gap-3">
            {weatherLoading ? (
              <div className="w-10 h-10 bg-black/5 animate-pulse rounded-full" />
            ) : (
              <>
                <span className="material-symbols-outlined text-[#a04223] text-3xl">
                  {weatherIcon(weather?.condition)}
                </span>
                <div>
                  <p className="text-2xl font-black text-[#343230] leading-none">
                    {weather?.temp ?? "--"}°C
                  </p>
                  <p className="text-[10px] font-bold text-[#615e5c] uppercase">Local Temp</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="relative z-10 space-y-4 animate-in fade-in slide-in-from-bottom-6 duration-1000">
        <div className="space-y-1">
          <p className="text-[#343230]/80 font-bold uppercase tracking-[0.2em] text-3xl">
            {greeting}</p>
          <h1 className="font-black text-4xl md:text-6xl tracking-tighter text-[#343230] leading-[0.9]">
            {name}.
          </h1>
        </div>
        <p className="text-[#343230]/80 font-medium text-lg md:text-xl max-w-xl leading-relaxed ">
          It's {currentDate}. A perfect moment to reflect and grow.
        </p>
      </div>
    </div>
  );
}