
/**
 * List given enum keys as array. Must be used on enums with declared values (enum E {a='a', b='b'},
 * if not values could be also returned . For enums without declared values, use enumNoValueKeys
 */
export function enumKeys(anEnum: any): string[] {
  const a = []
  for (let i in anEnum) {
    a.push(i)
  }
  return a
}

export function truncAndEscape(text: string) {
  return text.substring(0, Math.max(text.length, 10)).replace(/[\n]+/gm, '\\n').replace(/"/gm, '\\"')
}
