import {
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
} from '@/assets/styles/images'
import Image from 'next/image'
import Link from 'next/link'
import { Testimonials } from '.'

const About = () => {
  return (
    <article className='about active' data-page='about'>
      <header>
        <h2 className='h2 article-title'>About me</h2>
      </header>

      <section className='about-text'>
        <p>
          Hello, I'm Software Engineer from Nairobi, Kenya, working in web
          development and system design. I enjoy turning complex problems into
          simple, beautiful and intuitive designs.
        </p>

        <p>
          My main focus these days is building accessible, inclusive products
          and digital experiences for you. I aim to bring across your message
          and identity in the most creative way.
        </p>
      </section>

      {/* - service */}

      <section className='service'>
        <h3 className='h3 service-title'>What i'm doing</h3>

        <ul className='service-list'>
          <li className='service-item'>
            <div className='service-icon-box'>
              <ion-icon
                name='create-outline'
                style={{
                  color: 'var(--orange-yellow-crayola)',
                  fontSize: '36px',
                }}
              ></ion-icon>
            </div>

            <div className='service-content-box'>
              <h4 className='h4 service-item-title'>Web design</h4>

              <p className='service-item-text'>
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>

          <li className='service-item'>
            <div className='service-icon-box'>
              <ion-icon
                name='construct-outline'
                style={{
                  color: 'var(--orange-yellow-crayola)',
                  fontSize: '36px',
                }}
              ></ion-icon>
            </div>

            <div className='service-content-box'>
              <h4 className='h4 service-item-title'>Frontend Development</h4>

              <p className='service-item-text'>
                Crafting beautiful sites using React.js and Next.js.
              </p>
            </div>
          </li>

          <li className='service-item'>
            <div className='service-icon-box'>
              <ion-icon
                name='cog-outline'
                style={{
                  color: 'var(--orange-yellow-crayola)',
                  fontSize: '36px',
                }}
              ></ion-icon>
            </div>

            <div className='service-content-box'>
              <h4 className='h4 service-item-title'>Backend Development</h4>

              <p className='service-item-text'>
                Feature-rich applications using Node.js with Express and Ruby on
                Rails.
              </p>
            </div>
          </li>

          <li className='service-item'>
            <div className='service-icon-box'>
              <ion-icon
                name='camera-outline'
                style={{
                  color: 'var(--orange-yellow-crayola)',
                  fontSize: '36px',
                }}
              ></ion-icon>
            </div>

            <div className='service-content-box'>
              <h4 className='h4 service-item-title'>Photography</h4>

              <p className='service-item-text'>
                I make high-quality photos of any category at a professional
                level.
              </p>
            </div>
          </li>
        </ul>
      </section>

      {/* - testimonials */}

      <Testimonials />

      {/* - clients */}

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
    </article>
  )
}

export default About
