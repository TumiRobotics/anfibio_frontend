import React from 'react'
import "../style/Main.css";
import welcome from "../img/main_img.png"
import tumilogo from "../img/tumi_logo_2.png"
import sep from "../img/separator.png"
import option1 from "../img/option1.png"
import option2 from "../img/option2.png"
import { Component } from 'react';
import { Link } from 'react-router-dom';


class Main extends Component {
    render() {
        return(
            <>
                <div className='welcome_container'>
                    <div className='welcome_header'>
                        <img className='home_logotumi_img' src={ tumilogo } alt="Logo" />
                        <img className='welcome_logotumi_img_2' src={ sep } alt="" />
                        <p className='welcome_header_text'>Bienvenido</p> 
                    </div>  
                    <img className='welcome_img' src={welcome} alt='Presentacion'></img>
                    <div className='welcome_btn_container'>
                        <p className='welcome_text_title'>TUMI ANFIBIO 2022 - Limpieza de barcos</p>
                        <Link style={{textDecoration: 'none'}} to={"/Work"}><button className='welcome_btn_work'> Iniciar trabajo</button></Link>
                    </div>
                    <div className='welcome_conf_btn_config'>
                        <div  className='welcome_option_img_container'>
                            <Link style={{textDecoration: 'none'}} to={"/Gallery"}><img className='welcome_option_img' src= { option1 } alt="" /></Link>
                        </div>
                        <div  className='welcome_option_img_container'>
                            <Link style={{textDecoration: 'none'}} to={"/Statistics"}><img className='welcome_option_img' src= { option2 } alt="" /></Link>
                        </div>
                    </div>
                </div>  
            </>
        )
    }
}

export default Main;
