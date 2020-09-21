import Nav from '@components/nav'

export default function AboutPage(): JSX.Element {
  return (
    <main>
      <Nav index={1} />
      <div className="w-full max-w-4xl py-5 mx-auto">About Page</div>
    </main>
  )
}
