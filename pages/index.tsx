import Nav from '@components/nav'
import data from 'fonts.yaml'

export default function Home(): JSX.Element {
  return (
    <main className="font-san shadow-border-top-brand">
      <Nav index={0} />
      <div className="w-full max-w-4xl py-5 mx-auto">
        {data.map(({ family }) => (
          <div key={family}>{family}</div>
        ))}
      </div>
    </main>
  )
}
