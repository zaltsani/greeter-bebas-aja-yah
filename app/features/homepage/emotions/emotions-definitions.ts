type IEmotionsDefinitions = {
  value: string;
  label: string;
  response: string[];
}

export const EmotionsDefinitions: IEmotionsDefinitions[] = [
  {
    value: "happy",
    label: "Happy",
    response: [
      "Keep shining—your energy makes the world brighter.",
      "Happiness looks good on you. Don’t let it go."
    ],
  },
  {
    value: "calm",
    label: "Calm",
    response: [
      "Peace is power. Stay grounded and trust the moment.",
      "In stillness, you find your strongest self."
    ]
  },
  {
    value: "tired",
    label: "Tired",
    response: [
      "Rest is not a setback—it’s part of the journey.",
      "Take a break. You deserve to recharge."
    ]
  },
  {
    value: "angry",
    label: "Angry",
    response: [
      "Breathe first. React later.",
      "Your strength is in control, not in anger."
    ]
  },
]