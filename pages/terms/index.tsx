import { NavBar } from '@components/NavBar'
import { NextPage } from 'next'

const TermsPage: NextPage = () => {
  return (
    <main>
      <NavBar index={1} />
      <div className="w-full p-4 md:pt-3 md:mx-auto md:max-w-4xl lg:max-w-screen-xl">
        Terms of Services
      </div>
    </main>
  )
}

export default TermsPage
