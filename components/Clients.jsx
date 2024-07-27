import Image from 'next/image'
import Link from 'next/link'
import { logo1, logo2, logo3, logo4, logo5, logo6 } from '@/public/images'

const Clients = () => {
  return (
    <section className='clients'>
      <h3 className='h3 clients-title'>Clients</h3>

      <ul className='clients-list has-scrollbar'>
        <li className='clients-item'>
          <Link href='#'>
            <Image src={logo1} alt='client logo' />
          </Link>
        </li>

        <li className='clients-item'>
          <Link href='#'>
            <Image src={logo2} alt='client logo' />
          </Link>
        </li>

        <li className='clients-item'>
          <Link href='#'>
            <Image src={logo3} alt='client logo' />
          </Link>
        </li>

        <li className='clients-item'>
          <Link href='#'>
            <Image src={logo4} alt='client logo' />
          </Link>
        </li>

        <li className='clients-item'>
          <Link href='#'>
            <Image src={logo5} alt='client logo' />
          </Link>
        </li>

        <li className='clients-item'>
          <Link href='#'>
            <Image src={logo6} alt='client logo' />
          </Link>
        </li>
      </ul>
    </section>
  )
}

export default Clients
