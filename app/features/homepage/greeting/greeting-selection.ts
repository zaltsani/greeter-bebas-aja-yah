export function useGreetingSelection(list: string[]) {
  const random_index = Math.floor(Math.random() * list.length)
  return list[random_index];
};