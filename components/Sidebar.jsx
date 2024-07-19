'use client'

import { myAvatar } from '@/assets/styles/images'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaDog } from 'react-icons/fa'
import { PiXLogoBold } from 'react-icons/pi'

const Sidebar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <aside className={`sidebar ${toggle ? 'active' : null}`}>
      <div className='sidebar-info'>
        <figure className='avatar-box'>
          <Image
            src={myAvatar}
            alt='Josiah Nganga'
            priority={true}
            width={80}
          />
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

          <ion-icon name='chevron-down-outline'></ion-icon>
        </button>
      </div>

      <div className='sidebar-info_more'>
        <div className='separator'></div>

        <ul className='contacts-list'>
          <li className='contact-item'>
            <div className='icon-box'>
              <ion-icon name='mail-outline'></ion-icon>
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
              <ion-icon name='phone-portrait-outline'></ion-icon>
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
              <ion-icon name='location-outline'></ion-icon>
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
              className='social-link'
            >
              <ion-icon name='logo-linkedin'></ion-icon>
            </Link>
          </li>

          <li className='social-item'>
            <Link href='https://x.com/kamaujosia' className='social-link'>
              <PiXLogoBold />
            </Link>
          </li>

          <li className='social-item'>
            <Link href='https://medium.com/kamaujosia' className='social-link'>
              <ion-icon name='logo-medium'></ion-icon>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
