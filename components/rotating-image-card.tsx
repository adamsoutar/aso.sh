// A card that rotates through a series of strings with accompanying images
import { css } from '@emotion/react'
import ElevatedCard from './elevated-card'

interface Props {
  /** This word is written after "I" before each label. Eg. "made" for
   *  "I made Mastermine" */
  verb: string
  items: {
    label: string
    imageUrl: string
    // TODO: Blurhash
  }[]
  className?: string
}

const RotatingImageCard: React.FC<Props> = ({ verb, items, ...props }) => {
  return (
    <ElevatedCard
      css={{
        padding: '0.5em',
        lineHeight: '1em',
        overflow: 'hidden'
      }}
      gradientColourOne='#AA38A5'
      gradientColourTwo='#171D53'
      {...props}
    >
      <div
        css={{
          backgroundImage: `url(${items[0].imageUrl})`,
          backgroundSize: 'cover',
          opacity: 0.5,
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
        }}
      />
      <div css={{ position: 'relative' }}>
        I {verb} {items[0].label}
      </div>
    </ElevatedCard>
  )
}

export default RotatingImageCard
