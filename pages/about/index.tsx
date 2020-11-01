import { NavBar } from '@components/NavBar'
import { NextPage } from 'next'

const AboutPage: NextPage = () => {
  return (
    <main>
      <NavBar index={1} />
      <div className="w-full p-4 md:pt-3 md:mx-auto md:max-w-4xl lg:max-w-screen-xl">
        About Page
      </div>
    </main>
  )
}

export default AboutPage
