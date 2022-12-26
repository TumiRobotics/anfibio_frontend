import React from "react";
import "../style/Home.css"
import background_home from "../img/prestart.png"
import tumilogo from "../img/tumi_logo_2.png"
import back_arrow from "../img/arrow_left.png";
import { Component } from "react";
import { useParams } from "react-router-dom"
import Usuario from "./Usuario";

function ingresarUsuario()
{
    console.log('INGRESE A ESTA FUNCION')
    let codigoInfo = document.getElementById('codUsr')
    let contraInfo = document.getElementById('fcontra')
    fetch(`http://127.0.0.1:8000/infoAnfibio/accederUsuario?codigo=${codigoInfo.innerHTML}&contra=${contraInfo.value}`)
    .then(response=>response.json())
    .then(data => {
        console.log(data)
        if(data.resp === '200')
        {
            window.location.assign('/Main')
        }
        else if(data.resp === '300')
        {
            window.location.assign('/Consola')
        }
        else
        {
            window.location.reload()
        }
    })
}


class Identification extends Component
{

    state = {
        datosUsuario:[]
    }

    componentDidMount() {
        fetch(`http://127.0.0.1:8000/infoAnfibio/datosUsuario?codigo=${this.props.codigoUsuario}`)
        .then(response=>response.json())
        .then(data => {
            console.log(data)
            this.setState({datosUsuario:data.info})
        })
    }


    render()
    {
        return(
            <>
            <div className="home_container">
                <img className='home_background_img' src={ background_home } alt='Presentacion'></img>
                <div className='home_overlay'>
                    <div>
                        <img className='home_logotumi_img' src={ tumilogo } alt="Logo" />
                    </div>
                    <div>
                        <a href='/'><img className='home_back_img'  src={ back_arrow } alt="Logo" /></a>
                    </div>
                    <div className="container_card">
                        <div className="card_row">
                            <div className="card">
                                <h1 style={{display:'none'}} id='codUsr'>{this.state.datosUsuario[3]}</h1>
                                <div className="photo_container">
                                    <img className="photo" src={this.state.datosUsuario[4]}/>
                                </div>
                                <p className="id_text_1">Bienvenido/a {this.state.datosUsuario[0]} {this.state.datosUsuario[1]}</p>
                                <p className="id_text_1">Ingresa tu contraseña</p>
                                <input name="contra" className="input_register input_password" type="password" id="fcontra"/>
                                <button onClick={ingresarUsuario} className='id_btn_login'> Iniciar sesión</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Identification;