import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
} from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'

const PortfolioPage = () => {
  return (
    <article className='portfolio active' data-page='portfolio'>
      <header>
        <h2 className='h2 article-title'>Portfolio</h2>
      </header>

      <section className='projects'>
        <ul className='filter-list'>
          <li className='filter-item'>
            <button className='active' data-filter-btn>
              All
            </button>
          </li>

          <li className='filter-item'>
            <button data-filter-btn>Web design</button>
          </li>

          <li className='filter-item'>
            <button data-filter-btn>Applications</button>
          </li>

          <li className='filter-item'>
            <button data-filter-btn>Web development</button>
          </li>
        </ul>

        <div className='filter-select-box'>
          <button className='filter-select' data-select>
            <div className='select-value' data-selecct-value>
              Select category
            </div>

            <div className='select-icon'>
              <ion-icon name='chevron-down'></ion-icon>
            </div>
          </button>

          <ul className='select-list'>
            <li className='select-item'>
              <button data-select-item>All</button>
            </li>

            <li className='select-item'>
              <button data-select-item>Web design</button>
            </li>

            <li className='select-item'>
              <button data-select-item>Applications</button>
            </li>

            <li className='select-item'>
              <button data-select-item>Web development</button>
            </li>
          </ul>
        </div>

        <ul className='project-list'>
          {/* movers app */}
          <li
            className='project-item active'
            data-filter-item
            data-category='applications'
          >
            <Link href='https://github.com/spectr-e/movers-ui' target='_blank'>
              <figure className='project-img'>
                <div className='project-item-icon-box'>
                  <ion-icon name='eye-outline'></ion-icon>
                </div>

                <Image
                  sizes='100vh'
                  width={0}
                  height={0}
                  src={project4}
                  alt='brawlhalla'
                  loading='lazy'
                />
              </figure>

              <h3 className='project-title'>Movers</h3>

              <p className='project-category'>Web development</p>
            </Link>
          </li>

          {/* kodisha app */}
          <li
            className='project-item active'
            data-filter-item
            data-category='web development'
          >
            <Link href='https://github.com/spectr-e/kodisha' target='_blank'>
              <figure className='project-img'>
                <div className='project-item-icon-box'>
                  <ion-icon name='eye-outline'></ion-icon>
                </div>

                <Image
                  sizes='100vh'
                  width={0}
                  height={0}
                  src={project1}
                  alt='finance'
                  loading='lazy'
                />
              </figure>

              <h3 className='project-title'>Kodisha</h3>

              <p className='project-category'>Applications</p>
            </Link>
          </li>

          {/* bankers app */}
          <li
            className='project-item active'
            data-filter-item
            data-category='web design'
          >
            <Link href='https://github.com/spectr-e/bank-app' target='_blank'>
              <figure className='project-img'>
                <div className='project-item-icon-box'>
                  <ion-icon name='eye-outline'></ion-icon>
                </div>

                <Image
                  sizes='100vh'
                  width={0}
                  height={0}
                  src={project3}
                  alt='fundo'
                  loading='lazy'
                />
              </figure>

              <h3 className='project-title'>Bank App</h3>

              <p className='project-category'>Web design</p>
            </Link>
          </li>

          {/* portfolio app */}
          <li
            className='project-item active'
            data-filter-item
            data-category='web development'
          >
            <Link href='https://github.com/spectr-e/portfolio' target='_blank'>
              <figure className='project-img'>
                <div className='project-item-icon-box'>
                  <ion-icon name='eye-outline'></ion-icon>
                </div>

                <Image
                  sizes='100vh'
                  width={0}
                  height={0}
                  src={project2}
                  alt='orizon'
                  loading='lazy'
                />
              </figure>

              <h3 className='project-title'>Portfolio</h3>

              <p className='project-category'>Web development</p>
            </Link>
          </li>
        </ul>
      </section>
    </article>
  )
}

export default PortfolioPage
