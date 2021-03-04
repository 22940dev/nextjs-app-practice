import Image from 'next/image'
import Page from '@layouts/page'

export default function About() {
  return (
    <Page>
      <section>
        <Image src="/Profile.png" width={300} height={300} />
      </section>
      <section>
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
      <section>
        <small>Follow on Twitter @</small>
        <a
          href="https://twitter.com/BrodasGeo"
          rel="noopener noreferrer"
          target="_blank"
          style={{
            textDecorationLine: 'underline',
            textDecorationColor: 'rgb(100, 64, 100)',
          }}
        >
          Georgey V B
        </a>
      </section>
    </Page>
  )
}
