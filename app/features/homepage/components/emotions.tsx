import { useState } from "react";
import { EmotionsDefinitions } from "../emotions/emotions-definitions";
import { useEmotionsSelection } from "../emotions/emotions-selection";

export function Emotions() {
  const [emotion, setEmotion] = useState<null | string>(null)
  const selectedEmotion = EmotionsDefinitions.find(
    (e) => e.value === emotion
  );
  const emotionMessage = useEmotionsSelection(
    selectedEmotion?.response ?? []
  );

  return (
    <div className="grid gap-4 w-full px-6 py-6 sm:py-8 md:px-8 md:py-12 rounded-lg md:rounded-xl bg-[#f2edea]">
      <div className="grid">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">How is your day going?</h1>
        <p className="sm:text-lg md:text-xl text-accent-foreground/60">Capture your current energy in a single tap.</p>
      </div>
      {!emotion ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 min-h-48 sm:text-lg md:text-xl ">
          {EmotionsDefinitions.map((emotion, index) => (
            <button
              key={index}
              onClick={() => setEmotion(emotion.value)}
              className="flex items-center justify-center rounded-md bg-white cursor-pointer"
            >
              {emotion.label}
            </button>
          ))}
        </div>
      ) : (
        <div className="max-w-xl px-4 py-6 sm:py-8 md:py-12 rounded-lg bg-white">
          <p className="text-xl sm:text-2xl md:text-3xl">
            "{emotionMessage}"
          </p>
        </div>
      )}
    </div>
  )
}