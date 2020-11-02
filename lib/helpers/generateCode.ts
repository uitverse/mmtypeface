export function generateCode(query: string, type: 'html' | 'css'): string {
  const url = process.env.URL
  if (type === 'html') {
    return `<link href="https://${url}/api?${query}" rel="stylesheet">`
  } else {
    return `@import url('https://${url}/api?${query}');`
  }
}
