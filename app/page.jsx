import { About, Services } from '@/components'

export const dynamic = 'force-dynamic'

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
