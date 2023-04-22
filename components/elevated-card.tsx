interface Props {
  children?: React.ReactNode
  round?: boolean
  className?: string
  gradientColourOne: string
  gradientColourTwo: string
}

// A div with a border radius that sits on a fancy shadow
const ElevatedCard: React.FC<Props> = ({
  children,
  round,
  gradientColourOne,
  gradientColourTwo,
  ...props
}) => {
  return (
    <div
      css={{
        background: `radial-gradient(100% 248.64% at 0% 0%, ${gradientColourOne} 0%, ${gradientColourTwo} 100%)`,
        borderRadius: round ? '50%' : '16px',
        boxShadow: '0px 4px 11px 4px #000000',
        position: 'relative'
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default ElevatedCard
