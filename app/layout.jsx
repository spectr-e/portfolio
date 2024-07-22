import { poppins } from '@/utils/fonts'
import '@/assets/styles/globals.css'
import { NavBar, SideNav } from '@/components'

export const metadata = {
  title: 'Josiah Nganga | Web Developer',
  description: 'A Showcase of My Portfolio',
  keywords:
    'software developer in kenya, web developer in kenya, frontend developer in kenya , backend developer in kenya, developer in react.js, developer in next.js',
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <head>
        <script
          type='module'
          src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js'
        ></script>
        <script
          noModule={true}
          src='https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'
        ></script>
      </head>
      <body className={`${poppins}`} suppressHydrationWarning={true}>
        <main className='font-poppins'>
          <SideNav />
          <div className='main-content'>
            <NavBar />
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}

export default MainLayout
