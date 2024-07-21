import { About, NavBar, SideBar } from '@/components'

const HomePage = () => {
  return (
    <main className='font-poppins'>
      <SideBar />
      <div className='main-content'>
        <NavBar />
        <About />
      </div>
    </main>
  )
}

export default HomePage
