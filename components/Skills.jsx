const Skills = () => {
  return (
    <section className='skill'>
      <h3 className='h3 skills-title'>My skills</h3>

      <ul className='skills-list content-card'>
        <li className='skills-item'>
          <div className='title-wrapper'>
            <h5 className='h5'>React.js | Next.js</h5>
            <data value='80'></data>
          </div>

          <div className='skill-progress-bg'>
            <div className='skill-progress-fill' style={{ width: '80%' }}></div>
          </div>
        </li>

        <li className='skills-item'>
          <div className='title-wrapper'>
            <h5 className='h5'>Node.js | Ruby on Rails</h5>
            <data value='70'></data>
          </div>

          <div className='skill-progress-bg'>
            <div className='skill-progress-fill' style={{ width: '70%' }}></div>
          </div>
        </li>

        <li className='skills-item'>
          <div className='title-wrapper'>
            <h5 className='h5'>Adobe Illustrator | Figma</h5>
            <data value='90'></data>
          </div>

          <div className='skill-progress-bg'>
            <div className='skill-progress-fill' style={{ width: '90%' }}></div>
          </div>
        </li>

        <li className='skills-item'>
          <div className='title-wrapper'>
            <h5 className='h5'>Project Management | Product Design</h5>
            <data value='50'></data>
          </div>

          <div className='skill-progress-bg'>
            <div className='skill-progress-fill' style={{ width: '50%' }}></div>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Skills
