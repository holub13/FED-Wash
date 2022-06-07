import axios from 'axios'
import React, { useState } from 'react'

const AddContent = ({ appState }) => {
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [massage, setMassage] = useState('')

  async function submitHandler(e) {
    e.preventDefault()
    let name
    let path
    let infoData = []

    appState.forEach((item) => {
      if (item.id === id) {
        item.info.push({ title: title, content: content })
        infoData = item.info
        name = item.name
        path = item.path
        // console.log(item)
      }
    })

    await axios
      .put(`http://localhost:8000/data/${id}`, {
        id: id,
        name: name,
        path: path,
        info: [...infoData],
      })
      .then((response) => {
        // console.log(response)
        setMassage('Success')
      })
      .catch((error) => {
        console.log(error)
        setMassage(`Error ${error.request.status}`)
      })
    setTitle('')
    setContent('')
  }

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <h1 className="pt-3 pb-2 mb-4">Добавить</h1>
      <form
        className="d-flex flex-column align-items-center"
        onSubmit={submitHandler}
      >
        <select
          className="form-select w-25"
          name="select"
          onChange={(e) => {
            setId(e.target.value)
          }}
        >
          <option value="">Выберите раздел</option>
          <option value="techprocess">Техпроцессы</option>
          <option value="equipment">Оборудование</option>
          <option value="instruction">Инструкции</option>
        </select>
        <br />

        <input
          className="form-control w-25"
          placeholder="title"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label className="form-control w-50">
          Описание
          <textarea
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <br />

        <button type="submit" className="btn btn-secondary w-25">
          Post
        </button>
      </form>
      <p>{massage}</p>
    </main>
  )
}

export default AddContent
