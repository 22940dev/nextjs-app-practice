import { css, keyframes } from '@emotion/react'
import Image from 'next/image'
import Page from '@layouts/page'

const Header = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
`

const Bio = css`
  margin-top: 5rem;

  p {
    max-width: 80%;
    margin: 0 auto;
  }

  > p + p {
    margin-top: 3rem;
  }
`

const Footer = css`
  margin-top: 5rem;
  margin-right: 1rem;
  text-align: right;
  margin-bottom: 5rem;
`

export default function About() {
  return (
    <Page>
      <section css={Header}>
        <Image src="/Profile.png" width={300} height={300} />
        <h2>Georgey V B</h2>
      </section>
      <section css={Bio}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor
          at risus viverra adipiscing. Sit amet facilisis magna etiam tempor
          orci eu. Morbi quis commodo odio aenean sed adipiscing. At augue eget
          arcu dictum varius duis at consectetur.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Et tortor
          at risus viverra adipiscing. Sit amet facilisis magna etiam tempor
          orci eu. Morbi quis commodo odio aenean sed adipiscing. At augue eget
          arcu dictum varius duis at consectetur.
        </p>
      </section>
      <section css={Footer}>
        <span>Follow on Twitter @</span>
        <a
          href="https://twitter.com/BrodasGeo"
          rel="noopener noreferrer"
          target="_blank"
          style={{
            textDecorationLine: 'underline',
            textDecorationColor: 'rgb(100, 64, 100)',
          }}
        >
          geobrodas
        </a>
      </section>
    </Page>
  )
}
