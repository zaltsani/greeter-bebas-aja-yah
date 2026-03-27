import { useProfile } from "~/hooks/fetch-user";
import { greeting_list_definition } from "../greeting/greeting-list-definition";
import { useGreetingSelection } from "../greeting/greeting-selection";

export function WelcomeMessage() {
  const greeting = useGreetingSelection(greeting_list_definition);
  const { data: profile, isLoading } = useProfile();
  const name = isLoading ? "..." : profile?.name || "Guest";
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="grid gap-2 animate-in fade-in slide-in-from-left duration-700">
      <div className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl grid leading-tight">
        <p className="text-[#a04223]/80 font-medium">{greeting},</p>
        <p className="text-[#343230]">{name}</p>
      </div>
      <p className="text-[#615e5c] sm:text-lg">
        Today is {today}. A perfect day to nurture your inner glow.
      </p>
    </div>
  );
}