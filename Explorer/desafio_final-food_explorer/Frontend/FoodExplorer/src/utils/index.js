export function getRelative(fontSize = "1.6rem", percentage = 1.5) {
  return `${getDecimal(fontSize) * percentage}${getDecimalExcept(fontSize)}`;
}

export function getDecimal(text) {
  return Number(String(text).replace(/[^0-9.]/g, ""));
}

export function getDecimalExcept(text) {
  return String(text).replace(/[0-9.]/g, "");
}

/**
 * gap: 0.5
 * lineWeight: 1.5
 */
