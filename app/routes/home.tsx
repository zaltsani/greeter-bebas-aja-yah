import { Emotions } from "~/features/homepage/components/emotions"
import { WelcomeMessage } from "~/features/homepage/components/welcome-message"

export default function Home() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex flex-col gap-4 w-full">
        <WelcomeMessage />
        <Emotions />
      </div>
      <h1>test CI/CD</h1>
    </div>
  )
}
