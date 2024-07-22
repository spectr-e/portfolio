import { Education, Experiences } from '@/components'

const ResumePage = () => {
  return (
    <article className='resume active' data-page='resume'>
      <header>
        <h2 className='h2 article-title'>Resume</h2>
      </header>

      {/* experience */}
      <Experiences />

      {/* education */}
      <Education />

      {/* skills */}
      <section className='skill'>
        <h3 className='h3 skills-title'>My skills</h3>

        <ul className='skills-list content-card'>
          <li className='skills-item'>
            <div className='title-wrapper'>
              <h5 className='h5'>Web design</h5>
              <data value='80'>80%</data>
            </div>

            <div className='skill-progress-bg'>
              <div
                className='skill-progress-fill'
                style={{ width: '80%' }}
              ></div>
            </div>
          </li>

          <li className='skills-item'>
            <div className='title-wrapper'>
              <h5 className='h5'>Graphic design</h5>
              <data value='70'>70%</data>
            </div>

            <div className='skill-progress-bg'>
              <div
                className='skill-progress-fill'
                style={{ width: '70%' }}
              ></div>
            </div>
          </li>

          <li className='skills-item'>
            <div className='title-wrapper'>
              <h5 className='h5'>Branding</h5>
              <data value='90'>90%</data>
            </div>

            <div className='skill-progress-bg'>
              <div
                className='skill-progress-fill'
                style={{ width: '90%' }}
              ></div>
            </div>
          </li>

          <li className='skills-item'>
            <div className='title-wrapper'>
              <h5 className='h5'>WordPress</h5>
              <data value='50'>50%</data>
            </div>

            <div className='skill-progress-bg'>
              <div
                className='skill-progress-fill'
                style={{ width: '50%' }}
              ></div>
            </div>
          </li>
        </ul>
      </section>
    </article>
  )
}

export default ResumePage
