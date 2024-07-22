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
            Scrum Master | Moringa School
          </h4>

          <span className='text-sm mb-2'>Mar 2023 — May 2023</span>

          <p className='timeline-text'>
            Led a team of 6 developers to design, create and craft Movers App -
            a software solution for people in need of moving services.
          </p>
        </li>

        <li className='timeline-item'>
          <h4 className='h4 timeline-item-title'>
            Design Lead | Iqiniqo Furniture
          </h4>

          <span className='text-sm mb-2'>Apr 2022 — Jul 2022</span>

          <p className='timeline-text'>
            Designed and managed the digital social network that lead to
            increase in turnover by 25%
          </p>
        </li>

        <li className='timeline-item'>
          <h4 className='h4 timeline-item-title'>
            Tech Support | Luxury Internet Providers
          </h4>

          <span className='text-sm mb-2'>Jan 2021 — Sep 2021</span>

          <p className='timeline-text'>
            Designed a robust client support system for handling queries and
            onboarding processes leading to an increase in client satisfaction
            scores by 40%
          </p>
        </li>
      </ol>
    </section>
  )
}

export default Experiences
