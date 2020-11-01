interface Props {
  glyphs: string
  fontFamily: string
}

export const GlyphsTable: React.FC<Props> = ({ fontFamily, glyphs }: Props) => {
  return (
    <div
      className="border-t-2 border-l-2 border-solid border-gray-light"
      style={{
        fontFamily: fontFamily,
      }}>
      <div className="grid grid-cols-auto">
        {glyphs.split('').map((a) => (
          <div
            key={a}
            className="box-content flex items-center justify-center w-10 h-10 overflow-hidden border-b-2 border-r-2 border-solid border-gray">
            <span className="text-lg text-black">{a}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
