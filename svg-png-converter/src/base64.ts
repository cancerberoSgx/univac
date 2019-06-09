import { Base64 } from 'js-base64'

export function dataToUrl(data: string, mimeType: string) {
  return base64ToUrl(dataToBase64(data), mimeType)
}

export function dataToBase64(data: string): string {
  return Base64.encode(data)
}

export function base64ToUrl(base64: string, mimeType: string): string {
  return `data:${mimeType};base64,${base64}`
}

export function urlToBase64(s: string) {
  return s.substring(s.indexOf(';base64,') + ';base64,'.length)
}

export function urlToData(s: string) {
  return Base64.atob(urlToBase64(s))
}

export function isBase64(str: string) {
  if (str === '' || str.trim() === '') { return false }
  try {
    return Base64.btoa(Base64.atob(str)) == str
  } catch (err) {
    return false
  }
}
