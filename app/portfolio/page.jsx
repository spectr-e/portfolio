'use client'
import { useState } from 'react'

// assets
import { data } from '@/assets/data/Projects'
import Project from '@/components/Project'

const PortfolioPage = () => {
  const [selected, setSelected] = useState('All')
  const [filtered, setFiltered] = useState(data)

  const filterItems = (category) => {
    setSelected(category)
    if (category === 'All') {
      setFiltered(data)
    } else {
      const newItems = data.filter((item) => item.category === category)
      setFiltered(newItems)
    }
  }

  return (
    <article className='portfolio active' data-page='portfolio'>
      <header>
        <h2 className='h2 article-title'>Portfolio</h2>
      </header>

      <section className='projects'>
        <ul className='filter-list'>
          {['All', 'Design', 'Development', 'Applications'].map((category) => (
            <li key={category} className='filter-item'>
              <button
                onClick={() => filterItems(category)}
                className={`${selected === category ? 'active' : null}`}
              >
                {category}
              </button>
            </li>
          ))}
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
          {filtered.map((project) => (
            <Project project={project} key={project.title} />
          ))}
        </ul>
      </section>
    </article>
  )
}

export default PortfolioPage
