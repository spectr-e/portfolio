import { poppins } from '@/utils/fonts'
import '@/public/styles/globals.css'
import { NavBar, SideNav } from '@/components'

export const metadata = {
  title: 'Josiah Nganga | JavaScript Developer · QA Engineer',
  description: 'JavaScript developer with hands-on experience in frontend web development with React.js/Next.js and a focused interest in quality assurance for software systems.',
  keywords:
    'javascript developer in kenya, qa engineer in kenya, frontend developer in kenya, react developer, next.js developer, quality assurance engineer, software tester, cypress testing, jest testing',
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
