import React from 'react'
import "../style/Main.css";
import tumilogo from "../img/tumi_logo_2.png"
import sep from "../img/separator.png"
import option1 from "../img/option1.png"
import option2 from "../img/option2.png"
import { Component } from 'react';
import back_arrow from "../img/arrow_left.png";
import check from "../img/check_icon.png";
import person2 from "../img/users/mariel.png";
import { Link } from 'react-router-dom';
import Boat from './Boat';


class Work extends Component 
{
    state = {
        boats:[]
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/infoAnfibio/infoBoats')
        .then(response=>response.json())
        .then(data => {
            console.log(data.boats)
            this.setState({boats:data.boats})
        })
    }




    render() {
        return(
            <>
                <div className='work_view'>
                    <div className='welcome_header'>
                        <img className='welcome_logotumi_img' src={ tumilogo } alt="Logo" />
                        <img className='welcome_logotumi_img_2' src={ sep } alt="" />
                        <p className='welcome_header_text'>Iniciar trabajo</p> 
                    </div>
                    <div className='work_section'>
                        <br></br>
                        <br></br>
                        <Link style={{textDecoration: 'none'}} to={"/main/"}><img className='work_back_img'  src={ back_arrow } alt="" /></Link>
                        <div className='main_section'>
                            {/*<input name='fname' className="input_findWork" type="text" id="fname" placeholder='Busca tu embarcación'/>*/}
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div className='card_boat_row'>
                                {
                                    this.state.boats.map(boat => {
                                        return(<Boat informacion={boat} key={boat.toString()}/>)
                                    })
                                }
                            </div >
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br> 
                            <br></br>
                            <br></br>
                            <br></br> 
                            <br></br>
                            <br></br>
                            <br></br> 
                            <br></br>
                            <br></br>
                            <br></br> 
                            <br></br>
                            <br></br>
                            <br></br> 
                            <div className='work_text_container'>
                                <p className='work_text_1'>TUMI ANFIBIO 2022 - Limpieza de barcos</p>
                                <div className='work_check_container'>
                                    <img className='work_check_img' src= { check } alt="" />
                                    <p className='work_text_2'>Enlace confirmado</p>
                                </div>  
                            </div>
                        </div>
                    </div> 
                    <div className='work_conf_btn_config'>
                        <Link style={{textDecoration: 'none'}} to={"/Gallery"}>
                            <div  className='welcome_option_img_container'>
                                <img className='welcome_option_img' src= { option1 } alt="" />
                            </div>
                        </Link>
                        <Link to={"/Statistics"}>
                            <div  className='welcome_option_img_container'>
                                <img className='welcome_option_img' src= { option2 } alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}

export default Work;