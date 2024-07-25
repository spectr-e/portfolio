import Image from 'next/image'

const Service = ({ service }) => {
  const { title, url, description } = service
  return (
    <li className='service-item'>
      <div className='service-icon-box'>
        <Image
          width={60}
          className='max-w-[none]'
          height={60}
          loading='lazy'
          src={url}
          alt={title}
        />
      </div>

      <div className='service-content-box'>
        <h4 className='h4 service-item-title'>{title}</h4>

        <p className='service-item-text'>{description}</p>
      </div>
    </li>
  )
}

export default Service
