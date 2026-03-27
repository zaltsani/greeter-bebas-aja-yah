import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function useRealTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return {
    formattedTime: time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }),
    ampm: time.toLocaleTimeString("en-US", { hour12: true }).split(" ")[1],
  };
}

export function useWeather() {
  return useQuery({
    queryKey: ["weather"],
    queryFn: async () => {
      const pos = await new Promise<GeolocationPosition>((res, rej) => 
        navigator.geolocation.getCurrentPosition(res, rej)
      );
      
      const { latitude, longitude } = pos.coords;
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const data = await response.json();
      
      return {
        temp: Math.round(data.current_weather.temperature),
        condition: data.current_weather.weathercode,
      };
    },
    staleTime: 1000 * 60 * 15,
  });
}