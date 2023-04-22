import { ReactFCWithChildren } from '@/types/react'
import { css } from '@emotion/react'

// A div with a border radius that sits on a fancy shadow
const ElevatedCard: ReactFCWithChildren = ({ children }) => {
  return (
    <div
      css={css`
        background-color: red;
      `}
    >
      {children}
    </div>
  )
}

export default ElevatedCard
