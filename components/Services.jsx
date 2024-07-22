const Services = () => {
  return (
    <section className='service'>
      <h3 className='h3 service-title'>My Offerings</h3>

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
  )
}

export default Services
