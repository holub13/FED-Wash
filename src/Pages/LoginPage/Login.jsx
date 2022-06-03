import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Login = ({ appState }) => {
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  // const [data, setData1] = useState('')
  // const [itemInfo, setItemInfo] = useState([])
  // const [info, setInfo] = useState('')

  //   const [state, setState] = useState([])

  //   useLayoutEffect(() => {
  //     setState(appState)
  //   }, [appState])

  //   console.log(state)
  //////////////////////////////

  // async function submitHandler(e) {
  //   // e.preventDefault()
  //   const data = { name, path, section, id }
  //   console.log(data)
  //   // await setState([data])
  //   // console.log(data)
  //   await axios
  //     .post(`http://localhost:8000/data/`, { ...data })
  //     .then(function (response) {
  //       // console.log(response)
  //     })
  //     .catch(function (error) {
  //       // console.log(error.request.status)
  //       if (error.request.status) {
  //         axios
  //           .put('http://localhost:8000/data/' + id, { ...data })
  //           .then((response) => {
  //             response.data = data
  //           })
  //           .catch((error) => {
  //             console.log(error)
  //           })
  //       }
  //     })
  // }
  //////////////////////////////

  // async function submitHandler(e) {
  //   e.preventDefault()
  //   const data = { name, path, section, id }
  //   // const info = [title]
  //   console.log(data)
  //   // await setState([data])
  //   // console.log(data)
  //   await axios
  //     .post(`http://localhost:8000/data/`, { ...data })
  //     .then(function (response) {
  //       // console.log(response)
  //     })
  //     .catch(function (error) {
  //       // console.log(error.request.status)
  //       if (error.request.status) {
  //         axios
  //           .put('http://localhost:8000/data/' + id, {
  //             ...data,
  //             info: [{ title: title }],
  //           })
  //           .then((response) => {
  //             response.data = data
  //           })
  //           .catch((error) => {
  //             console.log(error)
  //           })
  //       }
  //     })
  // }

  //////////////////////

  async function submitHandler(e) {
    // e.preventDefault()
    let name
    let path
    let inf = []

    appState.forEach((item) => {
      if (item.id === id) {
        item.info.push({ title: title })
        inf = item.info
        name = item.name
        path = item.path
        console.log(item)
      }
    })

    await axios
      .put(`http://localhost:8000/data/${id}`, {
        id: id,
        name: name,
        path: path,
        info: [...inf],
      })
      .then((response) => {
        // response.data = id
        console.log(response.data)
        // console.log(inf)
        // console.log(response)
      })
      .catch((error) => {
        // console.log(error)
      })

    // await axios
    //   .post(`http://localhost:8000/data/`, {
    //     ...data,
    //   })
    //   .then(function (response) {
    //     // console.log(response)
    //   })
    //   .catch(function (error) {
    //     // console.log(error.request.status)
    //     if (error.request.status) {
    //       axios
    //         .put(`http://localhost:8000/data/${id}`, {
    //           ...data,
    //           info: [...inf],
    //         })
    //         .then((response) => {
    //           response.data = data
    //           console.log(inf)
    //           // console.log(response)
    //         })
    //         .catch((error) => {
    //           // console.log(error)
    //         })
    //     }
    //   })
  }

  // console.log(itemInfo)

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <h1 className="pt-3 pb-2 mb-4">Login Page</h1>
      <form
        className="d-flex flex-column align-items-center"
        onSubmit={submitHandler}
      >
        <select
          className="form-select w-25"
          name="select"
          onChange={(e) => {
            setId(e.target.value)
            // setName(e.target.name)
            // setPath(e.target.path)
          }}
        >
          <option value="">Выберите раздел</option>
          <option value="techprocess" name="Техпроцессы">
            Техпроцессы
          </option>
          <option value="equipment" name="Инструмент">
            Оборудование
          </option>
          <option value="instruction" name="Инструкция">
            Инструкции
          </option>
        </select>
        <br />

        {/* <input
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
        /> */}

        <br />
        {/* <input
          className="form-control w-25"
          placeholder="id"
          type="text"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <br /> */}

        <input
          className="form-control w-25"
          placeholder="title"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
