import { getCurrentDateFormatted } from "~/utils/get-current-date-formatted";
import { greeting_list_definition } from "../greeting/greeting-list-definition";
import { useGreetingSelection } from "../greeting/greeting-selection";

export function WelcomeMessage() {
  const greeting = useGreetingSelection(greeting_list_definition);
  const name = "Zaltsani Fadlillah";
  const currentDate = getCurrentDateFormatted()

  return (
    <div className="grid gap-2 animate-in fade-in slide-in-from-left duration-700">
      <div className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl grid leading-tight">
        <p className="text-[#a04223]/80 font-medium">{greeting},</p>
        <p className="text-[#343230]">{name}</p>
      </div>
      <p className="sm:text-lg">Today is {currentDate}. A perfect day to nurture your inner glow.</p>
    </div>
  );
}