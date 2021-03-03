import { css } from '@emotion/react'
import { IoMdPlanet as Saturn } from 'react-icons/io'

const SaturnLogo = css`
  position: relative;
  top: 0.2em;
`

const logoStyles = css`
  color: var(--color-text-invert);
  font-size: 7rem;
  display: block;
  text-align: center;
  font-variant: small-caps;
`

const logo = () => (
  <span css={logoStyles}>
    DEVL
    <Saturn css={SaturnLogo} />G
  </span>
)

export default logo
