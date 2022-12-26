import React, { Component } from "react";
import "../style/Home.css";
import background_home from "../img/prestart.png";
import tumilogo from "../img/tumi_logo_2.png";
import back_arrow from "../img/arrow_left.png";
import Usuario from "./Usuario";
import NuevoUsuario from "./NuevoUsuario";

function IniciarTrabajo()
{
    window.location.assign('/Main')

}


class ConsolaAdmin extends Component
{
    state = {
        usuarios:[]
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/infoAnfibio/infoUsuarios')
        .then(response=>response.json())
        .then(data => {
            console.log(data.usuarios)
            this.setState({usuarios:data.usuarios})
        })
    }

    render()
    {
        return(
            <>
            <div className="home_container">
                <img className="home_background_img" src={background_home} alt='Presentacion'/>
                <div className="home_overlay">
                    <div>
                        <img className='home_logotumi_img' src={ tumilogo } alt="Logo" />
                    </div>
                    <div>
                        <img className='home_back_img' style={{visibility: 'hidden'}} src={ back_arrow } alt="Logo" />
                    </div>
                    <p className="home_main_text">Consola de administrador</p>
                    <div className="conainter_card">
                        <div className="card_row">
                            <NuevoUsuario />
                        </div>
                        <button onClick={IniciarTrabajo} className='id_btn_login'> Ir al Trabajo</button>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default ConsolaAdmin;