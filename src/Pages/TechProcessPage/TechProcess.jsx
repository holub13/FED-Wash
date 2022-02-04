import React from 'react'

import Content from '../../Components/Content'

import './TechProcess.css'

const TechProcess = ({ foo, getInfo }) => {
  const info = [
    {
      title: 'John',
      content:
        'ТП 1. Some quick example text to build on the card title and make up thebulk of the cards content 1',
    },
    {
      title: 'Alex',
      content:
        'ТП 2. Some quick example text to build on the card title and make up thebulk of the cards content 2',
    },
    {
      title: 'Ivan',
      content:
        'ТП 3. Some quick example text to build on the card title and make up thebulk of the cards content 3',
    },
    {
      title: 'Julia',
      content:
        'ТП 4. Some quick example text to build on the card title and make up thebulk of the cards content 4',
    },
    {
      title: 'Olha',
      content:
        'ТП 5. Some quick example text to build on the card title and make up thebulk of the cards content 5',
    },
    {
      title: 'Danil',
      content:
        'ТП 6. Some quick example text to build on the card title and make up thebulk of the cards content 6',
    },
    {
      title: 'Kurt',
      content:
        'ТП 7. Some quick example text to build on the card title and make up thebulk of the cards content 7',
    },
    {
      title: 'Bill',
      content:
        'ТП 8. Some quick example text to build on the card title and make up thebulk of the cards content 8',
    },
  ]

  getInfo(info)

  return (
    <>
      <Content info={info} name="Техпроцессы" foo={foo} />
    </>
  )
}

export default TechProcess
