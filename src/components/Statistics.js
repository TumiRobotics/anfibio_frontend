import React from 'react'
import "../style/Main.css";
import tumilogo from "../img/tumi_logo_2.png"
import sep from "../img/separator.png"
import { Component } from 'react';
import back_arrow from "../img/arrow_left.png";
import person2 from "../img/users/mariel.png";
import { Link } from 'react-router-dom';


class Statistics extends Component {
    state = {
        horas: 'Null',
        distancia: 'Null',
        recorridos: 'Null'

    }

    componentDidMount() {
        fetch('http://192.168.137.80:8000/infoAnfibio/consultarEstadisticas')
        .then(response=>response.json())
        .then(data => {
            console.log(data)
            this.setState({
                horas:data.horas,
                distancia: data.distancia,
                recorridos: data.recorridos
            })
        })
    }
    render() {
        return(
            <>
                <div className='statistics_section'>
                    <div className='statistics_view'>
                        <div className='welcome_header'>
                            <img className='welcome_logotumi_img' src={ tumilogo } alt="Logo" />
                            <img className='welcome_logotumi_img_2' src={ sep } alt="" />
                            <p className='welcome_header_text'>Estadísticas</p> 
                        </div>
                        <Link style={{textDecoration: 'none'}} to={"/Main"}><img className='work_back_img'  src={ back_arrow } alt="Logo" /></Link>
                        <p className='statistics_description'>Indicadores actualizados al 20.10.2022</p>
                        <div className='statistics_container'>
                            <div className='card_statistics_row'>
                                <div className='card_statistics'>
                                    <div className='card_number_container'>
                                        <p className='card_number_number'>{this.state.horas}</p>
                                        <p className='card_number_units'>hrs</p>
                                    </div>
                                    <p className='card_number_stats'>Horas</p>
                                </div>
                                <div className='card_statistics'>
                                    <div className='card_number_container'>
                                        <p className='card_number_number'>{this.state.distancia}</p>
                                        <p className='card_number_units'>km</p>
                                    </div>
                                    <p className='card_number_stats'>Distancia</p>
                                </div>
                                <div className='card_statistics'>
                                    <div className='card_number_container'>
                                        <p className='card_number_number'>{this.state.recorridos}</p>
                                    </div>
                                    <p className='card_number_stats'>Recorridos</p>
                                </div>
                            </div>
                            <Link style={{textDecoration: 'none'}} to={"/MasEstadisticas"}><button className='more_stats'>Más</button></Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Statistics;
