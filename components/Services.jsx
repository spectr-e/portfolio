const Services = () => {
  return (
    <section className='service'>
      <h3 className='h3 service-title'>My Offerings</h3>

      <ul className='service-list'>
        <li className='service-item'>
          <div className='service-icon-box'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='2em'
              height='2em'
              viewBox='0 0 512 512'
              style={{
                color: 'var(--orange-yellow-crayola)',
              }}
            >
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={32}
                d='M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48'
              ></path>
              <path
                fill='currentColor'
                d='M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38M399.34 90L218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0'
              ></path>
            </svg>
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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='2em'
              height='2em'
              viewBox='0 0 512 512'
              style={{
                color: 'var(--orange-yellow-crayola)',
              }}
            >
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeMiterlimit={10}
                strokeWidth={32}
                d='M436.67 184.11a27.17 27.17 0 0 1-38.3 0l-22.48-22.49a27.15 27.15 0 0 1 0-38.29l50.89-50.89a.85.85 0 0 0-.26-1.38C393.68 57 351.09 64.15 324.05 91c-25.88 25.69-27.35 64.27-17.87 98a27 27 0 0 1-7.67 27.14l-173 160.76a40.76 40.76 0 1 0 57.57 57.54l162.15-173.3a27 27 0 0 1 26.77-7.7c33.46 8.94 71.49 7.26 97.07-17.94c27.49-27.08 33.42-74.94 20.1-102.33a.85.85 0 0 0-1.36-.22Z'
              ></path>
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={32}
                d='M224 284c-17.48-17-25.49-24.91-31-30.29a18.24 18.24 0 0 1-3.33-21.35a20.8 20.8 0 0 1 3.5-4.62l15.68-15.29a18.7 18.7 0 0 1 5.63-3.87a18.11 18.11 0 0 1 20 3.62c5.45 5.29 15.43 15 33.41 32.52m49.18 46.58c40.95 38.1 90.62 83.27 110 99.41a13.46 13.46 0 0 1 .94 19.92L394.63 444a14 14 0 0 1-20.29-.76c-16.53-19.18-61.09-67.11-99.27-107'
              ></path>
              <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={32}
                d='m17.34 193.5l29.41-28.74a4.7 4.7 0 0 1 3.41-1.35a4.85 4.85 0 0 1 3.41 1.35h0a9.86 9.86 0 0 0 8.19 2.77c3.83-.42 7.92-1.6 10.57-4.12c6-5.8-.94-17.23 4.34-24.54a207 207 0 0 1 19.78-22.6c6-5.88 29.84-28.32 69.9-44.45A107.3 107.3 0 0 1 206.67 64c22.59 0 40 10 46.26 15.67a89.5 89.5 0 0 1 10.28 11.64a79 79 0 0 0-9.21-2.77a68.8 68.8 0 0 0-20-1.26c-13.33 1.09-29.41 7.26-38 14c-13.9 11-19.87 25.72-20.81 44.71c-.68 14.12 2.72 22.1 36.1 55.49a6.6 6.6 0 0 1-.34 9.16l-18.22 18a6.88 6.88 0 0 1-9.54.09c-21.94-21.94-36.65-33.09-45-38.16s-15.07-6.5-18.3-6.85a30.85 30.85 0 0 0-18.27 3.87a11.4 11.4 0 0 0-2.64 2a14.14 14.14 0 0 0 .42 20.08l1.71 1.6a4.63 4.63 0 0 1 0 6.64L71.73 246.6a4.7 4.7 0 0 1-3.41 1.4a4.86 4.86 0 0 1-3.41-1.35l-47.57-46.43a4.88 4.88 0 0 1 0-6.72'
              ></path>
            </svg>
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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='2em'
              height='2em'
              viewBox='0 0 24 24'
              style={{
                color: 'var(--orange-yellow-crayola)',
              }}
            >
              <g
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
              >
                <path d='M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16'></path>
                <path d='M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-12v2m0 18v-2m5 .66l-1-1.73m-5-8.66L7 3.34M20.66 17l-1.73-1M3.34 7l1.73 1M14 12h8M2 12h2m16.66-5l-1.73 1M3.34 17l1.73-1M17 3.34l-1 1.73m-5 8.66l-4 6.93'></path>
              </g>
            </svg>
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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='2em'
              height='2em'
              viewBox='0 0 24 24'
              style={{
                color: 'var(--orange-yellow-crayola)',
              }}
            >
              <path
                fill='currentColor'
                d='M11.4 9h8q-.675-1.725-2.062-2.963T14.15 4.3zm-2.3 2l4-6.9q-.275-.05-.55-.075T12 4q-1.65 0-3.075.625T6.4 6.3zm-4.85 3H9.7l-4-6.9q-.8 1.025-1.25 2.263T4 12q0 .525.063 1.013T4.25 14m5.6 5.7l2.7-4.7H4.6q.675 1.725 2.063 2.963T9.85 19.7M12 20q1.65 0 3.075-.625T17.6 17.7L14.9 13l-4 6.9q.275.05.538.075T12 20m6.3-3.1q.8-1.025 1.25-2.262T20 12q0-.525-.062-1.012T19.75 10H14.3zM12 22q-2.05 0-3.875-.788t-3.187-2.15t-2.15-3.187T2 12q0-2.075.788-3.887t2.15-3.175t3.187-2.15T12 2q2.075 0 3.888.788t3.174 2.15t2.15 3.175T22 12q0 2.05-.788 3.875t-2.15 3.188t-3.175 2.15T12 22'
              ></path>
            </svg>
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
