import { About, Services } from '@/components'

const HomePage = () => {
  return (
    // start here
    <article className='about active' data-page='about'>
      <About />
      <Services />
    </article>
  )
}

export default HomePage
