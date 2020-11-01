import type { FontFamily } from '@lib/types'
import Link from 'next/link'
import { animated, config as springConfig, useSpring } from 'react-spring'

type Props = FontFamily & { preview: string }

export const InfoCard: React.FC<Props> = ({
  family,
  fonts,
  author,
  preview,
}: Props) => {
  const { opacity, x } = useSpring({
    config: springConfig.stiff,
    opacity: 1,
    x: 0,
    from: {
      opacity: 0,
      x: 20,
    },
  })

  return (
    <div className="block w-full px-2 my-2 overflow-hidden lg:min-h-50 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <Link href={`/specimen/${family.replace(/\s/g, '+')}`}>
        <a className="block w-full h-full px-4 py-3 transition duration-300 ease-in-out border-2 border-solid rounded cursor-pointer border-gray-lighter hover:border-brand">
          <div className="flex flex-row items-center justify-between">
            <h2 className="text-lg font-bold leading-tight text-black">
              {family}
            </h2>
            <span className="px-2 text-xs font-medium rounded-full text-info-dark bg-info-light">
              {fonts.length} Styles
            </span>
          </div>
          <span className="text-gray-darkest">{author}</span>
          <animated.div
            className="my-3 text-xl"
            style={{
              fontFamily: family,
              opacity,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}>
            {preview}
          </animated.div>
        </a>
      </Link>
    </div>
  )
}
