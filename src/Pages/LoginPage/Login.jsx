import axios from 'axios'
import React, { useLayoutEffect, useState } from 'react'

const Login = ({ appState }) => {
  const [name, setName] = useState('')
  const [path, setPath] = useState('')
  const [section, setSection] = useState('')
  const [id, setId] = useState('')
  //   const [state, setState] = useState([])

  //   useLayoutEffect(() => {
  //     setState(appState)
  //   }, [appState])

  //   console.log(state)

  async function submitHandler(e) {
    // e.preventDefault()
    const data = { name, path, section, id }
    console.log(data)
    // await setState([data])
    // console.log(data)
    await axios
      .post(`http://localhost:8000/data/`, { ...data })
      .then(function (response) {
        // console.log(response)
      })
      .catch(function (error) {
        // console.log(error.request.status)
        if (error.request.status) {
          axios
            .put('http://localhost:8000/data/' + id, data)
            .then((response) => {
              response.data = data
            })
            .catch((error) => {
              console.log(error)
            })
        }
      })
  }

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <h1 className="pt-3 pb-2 mb-4">Login Page</h1>
      <form
        className="d-flex flex-column align-items-center"
        onSubmit={submitHandler}
      >
        <input
          className="form-control w-25"
          placeholder="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <input
          className="form-control w-25"
          placeholder="path"
          type="text"
          name="path"
          value={path}
          onChange={(e) => setPath(e.target.value)}
        />
        <br />

        <input
          className="form-control w-25"
          placeholder="section"
          type="text"
          name="section"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        />

        <br />
        <input
          className="form-control w-25"
          placeholder="id"
          type="text"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br />

        <button type="submit" className="btn btn-secondary w-25">
          Post
        </button>
      </form>
    </main>
  )
}

export default Login
