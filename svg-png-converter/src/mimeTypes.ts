export const mimeTypes: {
  [k: string]: string;
} = {
    svg: 'image/svg+xml',
    png: 'image/png',
    jpeg: 'image/jpeg'
  }

export function getMimeTypeFromDataUrl(url: string) {
  const f = getFormatFromDataUrl(url)
  return f && mimeTypes[f]
}

export function getFormatFromDataUrl(url: string) {
  return Object.keys(mimeTypes).find(k => !!mimeTypes[k] && url.includes(mimeTypes[k]))
}
