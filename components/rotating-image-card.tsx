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
        lineHeight: '1em'
      }}
      {...props}
    >
      I {verb} {items[0].label}
    </ElevatedCard>
  )
}

export default RotatingImageCard
