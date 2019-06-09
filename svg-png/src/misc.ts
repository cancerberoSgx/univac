export function isBase64(str: string) {
  if (str ==='' || str.trim() ===''){ return false; }
  try {
      return Base64.btoa(Base64.atob(str)) == str;
  } catch (err) {
      return false;
  }
}