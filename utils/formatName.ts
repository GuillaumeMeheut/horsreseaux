export function formatName(name: string): string {
  return name.replace(/ /g, '-')
}

export function revertFormatName(name: string): string {
  return name.replace(/-/g, ' ')
}
