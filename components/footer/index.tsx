import { css } from '@emotion/react'
import { IoLogoGithub as Github } from 'react-icons/io'
import { IoLogoTwitter as Twitter } from 'react-icons/io'
import { FaDev as Dev } from 'react-icons/fa'
import { metadata } from 'config'
import { footer } from './styles'
import { leakedList } from '@shared/style-helpers'

const Footer = () => (
  <footer css={footer}>
    <ul css={leakedList}>
      <li>
        <a
          aria-label="Georgey's GitHub Account"
          href={metadata.author.githubURL}
          target="_blank"
          ref="noopener"
        >
          <Github />
        </a>
      </li>
      <li>
        <a
          aria-label="Georgey's Twitter Account"
          href={metadata.author.twitterURL}
          target="_blank"
          ref="noopener"
        >
          <Twitter />
        </a>
      </li>
      <li>
        <a
          aria-label="Georgey's Dev Blog Account"
          href={metadata.author.devURL}
          target="_blank"
          ref="noopener"
        >
          <Dev />
        </a>
      </li>
    </ul>
  </footer>
)

export default Footer
