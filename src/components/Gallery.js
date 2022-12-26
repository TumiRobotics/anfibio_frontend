import React from 'react'
import "../style/Main.css";
import tumilogo from "../img/tumi_logo_2.png"
import sep from "../img/separator.png"
import { Component } from 'react';
import back_arrow from "../img/arrow_left.png";
import arrow_right from "../img/arrow_right.png";
import arrow_left from "../img/arrow_left2.png";
import { Link } from 'react-router-dom';
import Foto from './Foto.js'


class Gallery extends Component {
    state = {
        fotos: []
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/infoAnfibio/infoFotos')
        .then(response=>response.json())
        .then(data => {
            console.log(data.fotos)
            this.setState({fotos:data.fotos})
        })
    }

    render() {
        return(
            <>
                <div className='gallery_view'>
                    <div className='welcome_header'>
                        <img className='welcome_logotumi_img' src={ tumilogo } alt="Logo" />
                        <img className='welcome_logotumi_img_2' src={ sep } alt="" />
                        <p className='welcome_header_text'>Galería</p> 
                    </div>
                    <Link style={{textDecoration: 'none'}} to={"/Main"}><img className='work_back_img'  src={ back_arrow } alt="" /></Link>
                    <img className='arrow_img_left'  src={ arrow_left } alt="" />
                    <img className='arrow_img_right'  src={ arrow_right } alt="" />
                    <div className='gallery_section'>
                        <div className='gallery_container_buttons'>
                            <button className='gallery_button button_gallery_enable'> Fotos</button>
                            <Link style={{textDecoration:'none'}} to='/Album'>
                                <button className='gallery_button button_gallery_disable'> Videos</button>
                            </Link>
                        </div>
                        <div className='gallery_boat_row'>
                            {
                                this.state.fotos.map(foto => {
                                    return(<Foto informacion={foto} key={foto.toString()}/>)
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
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </>
        )
    }
}

export default Gallery;