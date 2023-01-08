export function filterBy(cards, filterCallback) {
  return cards.filter(filterCallback);
}

export function containsCode(data, search) {
  const clean = search.replace(/[- ()]/g, ""); // удаляем -; ' ' и т.д.
  let firstLetter = clean.substr(0, 2);
  return data.some((code) => code.startsWith(firstLetter));
}
