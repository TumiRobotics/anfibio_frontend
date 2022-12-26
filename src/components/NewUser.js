import React from 'react'
import "../style/Home.css";
import background_home from "../img/prestart.png"
import tumilogo from "../img/tumi_logo_2.png"
import back_arrow from "../img/arrow_left.png";
import {Component} from 'react'
import { Link } from 'react-router-dom';

function crearUsuario()
{
    let elementoNombre = document.getElementById('fname')
    let elementoApellido = document.getElementById('lname')
    let elementoCelular = document.getElementById('phone_')
    let elementoContra = document.getElementById('pass')
    let elementoEmail = document.getElementById('email')
    fetch(`http://127.0.0.1:8000/infoAnfibio/crearUsuario?nombre=${elementoNombre.value}&apellido=${elementoApellido.value}&celular=${elementoCelular.value}&email=${elementoEmail.value}&contra=${elementoContra.value}`)
    .then(response=>response.json())
    .then(data => {
      console.log(data)
    })
    window.location.assign('http://localhos:3000/Consola')
}


class NewUser extends Component
{
    render()
    {
        return(
            <>
                <div className='home_container'>
                    <img className='home_background_img' src={ background_home } alt='Presentacion'/>
                    <div className='home_overlay'>
                        <div>
                            <img className='home_logotumi_img' src={ tumilogo } alt="Logo" />
                        </div>
                        <div>
                            <Link style={{textDecoration: 'none'}} to={"/"}><img className='home_back_img'  src={ back_arrow } alt="Logo" /></Link>
                        </div>
                        <p className='home_main_text'>Regístrate y crea una cuenta</p>  
                        <div className='container_user'>
                            <p className="label_register">Nombre</p>
                            <input name='fname' className="input_register" type="text" id="fname" onKeyPress={(event) => {
                                if (/[0-9]/.test(event.key))
                                {
                                    event.preventDefault();
                                }
                            }}/>
                            <p className="label_register">Apellido</p>
                            <input name='fname' className="input_register" type="text" id="lname" onKeyPress={(event) => {
                                if (/[0-9]/.test(event.key))
                                {
                                    event.preventDefault();
                                }
                            }}/>
                            <p className="label_register">Celular</p>
                            <input name='fname' className="input_register input_icon" type="nummber" id='phone_' onKeyPress={(event) => {
                                if (!/[0-9]/.test(event.key))
                                {
                                    event.preventDefault();
                                }
                            }}/> 
                            <p className="label_register">Email</p>
                            <input name='fname' className="input_register" type="email" id="email"/>
                            <p className="label_register">Contraseña</p>
                            <input name='fname' className="input_register" type="password" id="pass"/>
                            <a href='/'><button className='button_next' onClick={crearUsuario}> Guardar</button></a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default NewUser;