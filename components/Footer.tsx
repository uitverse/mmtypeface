import Link from 'next/link'

export default function Footer(): JSX.Element {
  return (
    <footer className="flex flex-row items-center justify-between py-2 my-2 border-t-2 border-solid border-gray-lighter">
      <div>
        <Link href="/terms">
          <a className="mr-5 underline text-gray-darkest hover:text-brand">
            Terms
          </a>
        </Link>
        <Link href="/privacy">
          <a className="underline text-gray-darkest hover:text-brand">
            Privacy
          </a>
        </Link>
      </div>
      <div>mmtypeface &copy; 2020</div>
    </footer>
  )
}
