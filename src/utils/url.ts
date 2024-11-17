export function extractBaseUrl(url: string) {
  const urlObj = new URL(url) // Parse the URL
  return `${urlObj.origin}${urlObj.pathname}` // Combine origin and pathname
}
