import { css } from '@emotion/react'
import { GiTimeBomb as Saturn } from 'react-icons/gi'

const SaturnLogo = css`
  position: relative;
  top: 0.2em;
`

const logoStyles = css`
  color: var(--color-text-invert);
  font-size: 6rem;
  display: block;
  text-align: center;
  font-variant: small-caps;
`

const logo = () => (
  <span css={logoStyles}>
    GEOP
    <Saturn css={SaturnLogo} />P
  </span>
)

export default logo
