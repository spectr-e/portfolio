import { Testimonials, Clients, Services } from '.'

const About = () => {
  return (
    <>
      <header>
        <h2 className='h2 article-title'>About me</h2>
      </header>

      <section className='about-text'>
        <p>
          Hello, I&apos;m a JavaScript developer from Nairobi, Kenya, with
          hands-on experience in frontend web development using React.js and
          Next.js, and a focused interest in quality assurance for software
          systems. I enjoy turning complex problems into simple, reliable and
          well-tested solutions.
        </p>

        <p>
          I bring working knowledge of Jest-based unit testing, browser
          automation with Cypress, and manual testing discipline built across
          production codebases. I&apos;m eager to apply this foundation in
          QA-first environments, particularly in clean-tech sectors, where
          software correctness directly affects safety and reliability. Open to
          remote-first teams across Africa and globally.
        </p>
      </section>
    </>
  )
}

export default About
