import { getCurrentDateFormatted } from "~/utils/get-current-date-formatted";
import { greeting_list_definition } from "../greeting/greeting-list-definition";
import { useGreetingSelection } from "../greeting/greeting-selection";

export function WelcomeMessage() {
  const greeting = useGreetingSelection(greeting_list_definition);
  const name = "Zaltsani Fadlillah";
  const currentDate = getCurrentDateFormatted()

  return (
    <div className="grid gap-2 w-full px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-12 rounded-lg border border-primary/50 animate-in fade-in slide-in-from-left duration-700">
      <div className="font-bold text-2xl lg:text-3xl grid">
        <p className="text-[#a04223]/80 font-medium">{greeting},</p>
        <p className="text-[#343230]">{name}</p>
      </div>
      <p className="sm:text-lg">Today is {currentDate}. A perfect day to nurture your inner glow.</p>
    </div>
  );
}