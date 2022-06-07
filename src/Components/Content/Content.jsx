import React, { useState } from 'react'

import CardList from '../CardList'
import Input from '../Input'

import './Content.css'

const Content = ({ name, info, foo, id, appState }) => {
  const [searchValue, setSearchValue] = useState('')

  const onValueChange = (e) => {
    const { value } = e.target
    setSearchValue(value)
  }

  const filteredTitles = info.filter((item) => {
    return item.title.toLowerCase().includes(searchValue.toLowerCase())
  })
  // console.log(info)
  // console.log(id)

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">{name}</h1>
      </div>
      <Input
        onValueChange={onValueChange}
        value={searchValue ? searchValue : ''}
      />
      <CardList info={filteredTitles} foo={foo} id={id} appState={appState} />
    </main>
  )
}

export default Content
