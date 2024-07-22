'use client'
import { profile } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaDog } from 'react-icons/fa'
import { PiXLogoBold } from 'react-icons/pi'

const SideNav = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <aside className={`sidebar ${toggle ? 'active' : null}`}>
      <div className='sidebar-info'>
        <figure className='avatar-box'>
          <Image src={profile} alt='Josiah Nganga' priority={true} width={80} />
        </figure>

        <div className='info-content'>
          <h1 className='name' title='Josiah Kamau'>
            Josiah Kamau
          </h1>

          <p className='title'>Web developer</p>
        </div>

        <button
          className='info_more-btn'
          onClick={() => setToggle((prev) => !prev)}
        >
          <span>Show Contacts</span>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1em'
            height='1em'
            viewBox='0 0 24 24'
          >
            <path
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='m19 9l-7 7l-7-7'
            ></path>
          </svg>
        </button>
      </div>

      <div className='sidebar-info_more'>
        <div className='separator'></div>

        <ul className='contacts-list'>
          <li className='contact-item'>
            <div className='icon-box'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 512 512'
              >
                <rect
                  width={416}
                  height={320}
                  x={48}
                  y={96}
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={32}
                  rx={40}
                  ry={40}
                ></rect>
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={32}
                  d='m112 160l144 112l144-112'
                ></path>
              </svg>
            </div>

            <div className='contact-info'>
              <p className='contact-title'>E-mail</p>

              <Link
                href='mailto:business.josia@gmail.com'
                className='contact-link'
              >
                business.josia@gmail.com
              </Link>
            </div>
          </li>

          <li className='contact-item'>
            <div className='icon-box'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 512 512'
              >
                <rect
                  width={256}
                  height={480}
                  x={128}
                  y={16}
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={32}
                  rx={48}
                  ry={48}
                ></rect>
                <path
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={32}
                  d='M176 16h24a8 8 0 0 1 8 8h0a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16h0a8 8 0 0 1 8-8h24'
                ></path>
              </svg>
            </div>

            <div className='contact-info'>
              <p className='contact-title'>Phone</p>

              <Link href='tel:+254736972910' className='contact-link'>
                +254 (736) 972-910
              </Link>
            </div>
          </li>

          <li className='contact-item'>
            <div className='icon-box'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5'
                ></path>
              </svg>
            </div>

            <div className='contact-info'>
              <p className='contact-title'>Location</p>

              <address>Nairobi, Kenya</address>
            </div>
          </li>

          <li className='contact-item'>
            <div className='icon-box'>
              <FaDog />
            </div>

            <div className='contact-info'>
              <p className='contact-title'>Pets</p>

              <p className='contact-link'>I love dogs!</p>
            </div>
          </li>
        </ul>

        <div className='separator'></div>

        <ul className='social-list'>
          <li className='social-item'>
            <Link
              href='https://linkedin.com/in/kamaujosia'
              target='_blank'
              className='social-link'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 32 32'
              >
                <path
                  fill='currentColor'
                  d='M26.2 4H5.8C4.8 4 4 4.8 4 5.7v20.5c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V5.7c0-.9-.8-1.7-1.8-1.7M11.1 24.4H7.6V13h3.5zm-1.7-13c-1.1 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1c1.1 0 2.1.9 2.1 2.1s-1 2.1-2.1 2.1m15.1 12.9H21v-5.6c0-1.3 0-3.1-1.9-3.1S17 17.1 17 18.5v5.7h-3.5V13h3.3v1.5h.1c.5-.9 1.7-1.9 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5v6.2z'
                ></path>
              </svg>
            </Link>
          </li>

          <li className='social-item'>
            <Link
              href='https://x.com/kamaujosia'
              target='_blank'
              className='social-link'
            >
              <PiXLogoBold />
            </Link>
          </li>

          <li className='social-item'>
            <Link
              target='_blank'
              href='https://medium.com/@kamaujosia'
              className='social-link'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='1em'
                height='1em'
                viewBox='0 0 32 32'
              >
                <path
                  fill='currentColor'
                  d='M30 16c0 3.7-.6 6.7-1.4 6.7s-1.4-3-1.4-6.7s.6-6.7 1.4-6.7s1.4 3 1.4 6.7m-3.5 0c0 4.1-1.8 7.5-3.9 7.5s-3.9-3.4-3.9-7.5s1.8-7.5 3.9-7.5s3.9 3.4 3.9 7.5m-8.7 0c0 4.4-3.5 8-7.9 8S2 20.4 2 16s3.5-8 7.9-8s7.9 3.6 7.9 8'
                ></path>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default SideNav
