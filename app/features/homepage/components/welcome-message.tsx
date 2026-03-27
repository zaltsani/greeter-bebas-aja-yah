import { greeting_list_definition } from "../greeting/greeting-list-definition";
import { useGreetingSelection } from "../greeting/greeting-selection";

export function WelcomeMessage() {
  const greeting = useGreetingSelection(greeting_list_definition);
  const name = "Zaltsani Fadlillah";

  return (
    <div className="grid gap-2">
      <div className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl grid">
        <p>{greeting},</p>
        <p>{name}</p>
      </div>
      <p className="sm:text-lg">Today is Friday, October 27th. A perfect day to nurture your inner glow.</p>
    </div>
  )
}