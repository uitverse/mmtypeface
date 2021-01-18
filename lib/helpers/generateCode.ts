export function generateCode(query: string, type: 'html' | 'css'): string {
  const url = process.env.URL
  if (type === 'html') {
    return `<link href="https://${url}/api?family=${query}" rel="stylesheet">`
  } else {
    return `@import url('https://${url}/api?family=${query}');`
  }
}
