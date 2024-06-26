// import React from 'react'

import { useState } from "react"
import postAxios from "../services/service"


const FormRegister = () => {

const [usuario, setUser] = useState()
const [correo, setCorreo] = useState()
const [contrasena, setConstrasena] = useState()
const tasks = [];

const dataPost = async ()=>{
  if (usuario && contrasena && correo !== '') {
    const data = await postAxios(usuario,correo,contrasena,tasks)
    console.log(data);
  } else {
   alert('Campos vacíos')
  }
}


  return (
    <div>
        <label htmlFor="">Usuario</label>
        <input type="text" placeholder='Usuario' value={usuario} onChange={(e) => setUser(e.target.value.trim())}/>
        <label htmlFor="">Correo</label>
        <input type="text" placeholder='Correo' value={correo} onChange={(e) => setCorreo(e.target.value.trim())}/>
        <label htmlFor="">Contrasena</label>
        <input type="text" placeholder='Contrasena' value={contrasena} onChange={(e) => setConstrasena(e.target.value.trim())}/>
        <button onClick={dataPost}>Registrarse</button>
    </div>
  )
}

export default FormRegister

// POST({ name: nameReg.value, email: emailReg.value, password: passwordReg.value, tasks: [] })