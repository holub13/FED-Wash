import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import './Sidebar.css'

const Sidebar = () => {
  const section = [
    {
      name: 'Техпроцесс',
      id: 'techprocess',
      path: '/techprocess',
    },
    {
      name: 'Оборудование',
      id: 'equipment',
      path: '/equipment',
    },
    {
      name: 'Инструкции',
      id: 'instruction',
      path: '/instruction',
    },
  ]

  const [toggleState, setToggelState] = useState('')

  const toggleTab = (id) => {
    setToggelState(id)
  }

  return (
    <nav
      id="sidebarMenu"
      className="bg-dark col-md-3 col-lg-2 d-md-block sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          {section.map((item) => (
            <li>
              <Link
                key={item.id}
                className={
                  toggleState === item.id ? 'nav-link active' : 'nav-link'
                }
                to={item.path}
                onClick={() => toggleTab(item.id)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Sidebar
