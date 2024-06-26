import React, { useState, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { getAxios } from "../services/service";
import { AuthContext } from '../App';


const FormLoggin = () => {


  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();



      async function GetLog() {

      const data = await getAxios();

      let encontrado = false;

      data.forEach(i => {
        if (correo === i.correo && password === i.password) {
          encontrado = true;
          navigate('/inicio')
        }
      });


      if (encontrado) {

        console.log('El usuario ingresado sí existe');
        const token = localStorage.setItem('token', true)

      } else {

        console.log('Creo que no existe, o hubo una falla, una de dos, jajaja.');
        const token = localStorage.setItem('token', false)

      }


  }




  return (
    <>
      <label htmlFor="correo">Correo</label>
      <input id="correo" value={correo} type="text" placeholder='Correo' onChange={(e) => setCorreo(e.target.value)} />
      <label htmlFor="password">Contrasena</label>
      <input id="password" value={password} type="password" placeholder='Contrasena' onChange={(e) => setPassword(e.target.value)} />
      <button onClick={GetLog}>Obtener</button>
    </>
  );


}


export default FormLoggin;