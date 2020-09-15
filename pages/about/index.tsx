import Nav from '@components/nav'

export default function About(): JSX.Element {
  return (
    <main className="font-san shadow-border-top-brand">
      <Nav index={1} />
      <div className="w-full max-w-4xl py-5 mx-auto">About Page</div>
    </main>
  )
}
