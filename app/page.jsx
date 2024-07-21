import { NavBar, SideBar } from '@/components'

const HomePage = () => {
  return (
    <main className='font-poppins'>
      <SideBar />
      <div class='main-content'>
        <NavBar />
      </div>
    </main>
  )
}

export default HomePage
