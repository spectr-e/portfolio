const Experiences = () => {
  return (
    <section className='timeline'>
      <div className='title-wrapper'>
        <div className='icon-box'>
          <ion-icon name='book-outline'></ion-icon>
        </div>

        <h3 className='h3'>Experience</h3>
      </div>

      <ol className='timeline-list'>
        <li className='timeline-item'>
          <h4 className='h4 timeline-item-title'>
            AI Technical Mentor | Moringa School
          </h4>

          <span className='text-sm mb-2'>Jan 2026 — Present</span>

          <p className='timeline-text'>
            Instruct curriculum spanning AI fundamentals and cloud-based AI
            systems, building technical knowledge across cohorts. Provide
            structured mentorship to learners, delivering real-time feedback and
            tracking individual progress against defined program outcomes.
          </p>
        </li>

        <li className='timeline-item'>
          <h4 className='h4 timeline-item-title'>
            Software Developer | Silicon Savannah Solutions
          </h4>

          <span className='text-sm mb-2'>Nov 2025 — Jan 2026</span>

          <p className='timeline-text'>
            Validated responsive layouts across device breakpoints and browsers
            before each client delivery, catching UI defects early. Analysed
            on-page SEO output and cross-checked rendered markup against Figma
            specs to ensure design-to-code fidelity.
          </p>
        </li>

        <li className='timeline-item'>
          <h4 className='h4 timeline-item-title'>
            React Software Engineer | Esheria Ventures Ltd
          </h4>

          <span className='text-sm mb-2'>Feb 2025 — Jun 2025</span>

          <p className='timeline-text'>
            Maintained rigorous test coverage throughout a large-scale codebase
            refactor, achieving zero regressions after eliminating over 33,000
            lines of deprecated code. Collaborated closely with the founding
            team to translate product requirements into testable acceptance
            criteria.
          </p>
        </li>
      </ol>
    </section>
  )
}

export default Experiences
