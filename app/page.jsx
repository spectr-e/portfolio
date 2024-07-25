import { About, Services, Stack } from '@/components'

export const dynamic = 'force-dynamic'

const HomePage = () => {
  return (
    // start here
    <article className='about active' data-page='about'>
      <About />
      <Services />
      <Stack />
    </article>
  )
}

export default HomePage
