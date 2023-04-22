interface Props {
  children?: React.ReactNode
  round?: boolean
  className?: string
}

// A div with a border radius that sits on a fancy shadow
const ElevatedCard: React.FC<Props> = ({ children, round, ...props }) => {
  return (
    <div
      css={{
        backgroundColor: 'red',
        borderRadius: round ? '50%' : '16px',
        boxShadow: '0px 4px 11px 4px #000000'
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export default ElevatedCard
