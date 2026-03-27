export function getCurrentDateFormatted(): string {
  const now = new Date()

  return now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}