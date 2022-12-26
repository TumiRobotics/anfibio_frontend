import React from 'react'
import "../style/Main.css";
import tumilogo from "../img/tumi_logo_2.png"
import sep from "../img/separator.png"
import { Component } from 'react';
import back_arrow from "../img/arrow_left.png";
import arrow_right from "../img/arrow_right.png";
import arrow_left from "../img/arrow_left2.png";
import { Link } from 'react-router-dom';


class Album extends Component {
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
              {/* <input value={'Busca tu embarcación'} defaultValue={'Busca tu embarcación'}> </input> */}
              <div className='gallery_container_buttons'>
                <Link style={{textDecoration: 'none'}} to={"/Gallery"}><button className='gallery_button button_gallery_disable'> Fotos</button></Link>
                <button className='gallery_button button_gallery_enable'> Videos</button>
              </div>
              <input name='fname' class="input_findWork" type="text" id="fname" placeholder='Busca por nombre'/>
              <div className='gallery_scroll'>


              <div className='gallery_boat_row'>
                
                
                <div className='gallery_boat boat2'>
                </div>
                <div className='gallery_boat boat3'>                  
                </div>
                <div className='gallery_boat boat4'>
                </div>
                <div className='gallery_boat boat1'>                  
                </div>
                <div className='gallery_boat boat5'>                  
                </div>
                
                

                <div className='gallery_boat boat3'>                  
                </div>
                <div className='gallery_boat boat4'>
                </div>
                <div className='gallery_boat boat5'>                  
                </div>
                <div className='gallery_boat boat1'>                  
                </div>
                <div className='gallery_boat boat2'>
                </div>

              </div >


              

                {/* <div className='gallery_boat_row'>
                  
                  <div className='album_boat_container'>
                    <div className='album_boat boat1'></div>
                    <p className='album_boat_text'>Recientes</p>
                    <p className='album_boat_text_2'>50</p>
                  </div>
                  <div className='album_boat_container'>
                    <div className='album_boat boat2'></div>
                    <p className='album_boat_text'>Videos</p>
                    <p className='album_boat_text_2'>130</p>
                  </div>
                  <div className='album_boat_container'>
                    <div className='album_boat boat3'></div>
                    <p className='album_boat_text'>Barcos 181-285</p>
                    <p className='album_boat_text_2'>110</p>
                  </div>
                </div>
                <div className='gallery_boat_row'>
                  <div className='album_boat_container'>
                    <div className='album_boat boat3'></div>
                    <p className='album_boat_text'>Recientes</p>
                    <p className='album_boat_text_2'>50</p>
                  </div>
                  <div className='album_boat_container'>
                    <div className='album_boat boat4'></div>
                    <p className='album_boat_text'>Videos</p>
                    <p className='album_boat_text_2'>130</p>
                  </div>
                  <div className='album_boat_container'>
                    <div className='album_boat boat5'></div>
                    <p className='album_boat_text'>Barcos 181-285</p>
                    <p className='album_boat_text_2'>110</p>
                  </div>

                </div >  */}

              </div>
              
              
            </div>  

        </div>
        
      </>
    )
  }
}

export default Album;