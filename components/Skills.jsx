const Skills = () => {
  return (
    <section className='skill'>
      <h3 className='h3 skills-title'>My skills</h3>

      <ul className='skills-list content-card'>
        <li className='skills-item'>
          <div className='title-wrapper'>
            <h5 className='h5'>React.js | Next.js</h5>
            <data value='85'></data>
          </div>

          <div className='skill-progress-bg'>
            <div className='skill-progress-fill' style={{ width: '85%' }}></div>
          </div>
        </li>

        <li className='skills-item'>
          <div className='title-wrapper'>
            <h5 className='h5'>Testing & QA (Jest, Cypress)</h5>
            <data value='75'></data>
          </div>

          <div className='skill-progress-bg'>
            <div className='skill-progress-fill' style={{ width: '75%' }}></div>
          </div>
        </li>

        <li className='skills-item'>
          <div className='title-wrapper'>
            <h5 className='h5'>JavaScript (ES6+) | TypeScript</h5>
            <data value='85'></data>
          </div>

          <div className='skill-progress-bg'>
            <div className='skill-progress-fill' style={{ width: '85%' }}></div>
          </div>
        </li>

        <li className='skills-item'>
          <div className='title-wrapper'>
            <h5 className='h5'>Node.js | REST APIs</h5>
            <data value='70'></data>
          </div>

          <div className='skill-progress-bg'>
            <div className='skill-progress-fill' style={{ width: '70%' }}></div>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Skills
