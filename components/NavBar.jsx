import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <Link href={'/'} className='navbar-link active' data-nav-link>
            About
          </Link>
        </li>

        <li className='navbar-item'>
          <Link href={'/resume'} className='navbar-link' data-nav-link>
            Resume
          </Link>
        </li>

        <li className='navbar-item'>
          <Link href={'/portfolio'} className='navbar-link' data-nav-link>
            Portfolio
          </Link>
        </li>

        <li className='navbar-item'>
          <Link href={'/blog'} className='navbar-link' data-nav-link>
            Blog
          </Link>
        </li>

        <li className='navbar-item'>
          <Link href={'/contact'} className='navbar-link' data-nav-link>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
