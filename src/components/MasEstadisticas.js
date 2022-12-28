import { Component } from "react";
import tumilogo from "../img/tumi_logo_2.png"
import sep from "../img/separator.png";
import back_arrow from "../img/arrow_left.png";
import { Link } from 'react-router-dom';
import info_icon from "../img/info__icon.png";
import CardInspeccion from "./CardInspeccion";

class MasEstadisticas extends Component{
    state = {
        tiempo:'Null',
        distancia: 'Null',
        recorridos:'Null',
        inspecciones:[]
    }

    componentDidMount() {
        fetch('http://192.168.137.80:8000/infoAnfibio/consultarEstadisticas')
        .then(response=>response.json())
        .then(data => {
            console.log(data)
            this.setState({
                ...this.state,
                tiempo:data.horas,
                distancia: data.distancia,
                recorridos: data.recorridos
            })
        })

        fetch('http://192.168.137.80:8000/infoAnfibio/infoInspecciones')
        .then(response=>response.json())
        .then(data => {
            console.log(data.inspecciones)
            this.setState({
                ...this.state,
                inspecciones:data.inspecciones
            })
        })

    }

    render(){
        return(
            <>
            <div className='statistics_section'>
                <div className='statistics_view'>
                    <div className='welcome_header'>
                        <img className='welcome_logotumi_img' src={ tumilogo } alt="Logo" />
                        <img className='welcome_logotumi_img_2' src={ sep } alt="" />
                        <p className='welcome_header_text'>Estadísticas</p> 
                    </div>
                    <Link style={{textDecoration: 'none'}} to={"/Statistics"}><img className='work_back_img'  src={ back_arrow } alt="Logo" /></Link>

                    <div className='moreStats_description'>
                        <img className='moreStats_description_icon'  src={ info_icon } alt="" />
                        <p>Copia de seguridad automática de los registros de tus recorridos</p>
                    </div>

                    <p className='moreStats_desc_enable'>Habilitada</p>


                    <div className='moreStats_container'>
                        <div className='card_moreStats_row'>
                            <div className='card_moreStats'>
                                <p className='card_number_moreStats'>Distancia total</p>
                                <div className='card_number_moreStats_container'>
                                    <p className='card_number_moreStats_number'>{this.state.distancia}</p>
                                    <p className='card_number_moreStats_units'>km</p>
                                </div>
                            </div>
                            <img className='welcome_logotumi_img_2' src={ sep } alt="" />
                            <div className='card_moreStats'>
                                <p className='card_number_moreStats'>Tiempo total de trabajo</p>
                                <div className='card_number_moreStats_container'>
                                    <p className='card_number_moreStats_number'>{this.state.tiempo}</p>
                                    <p className='card_number_moreStats_units'>hrs</p>
                                </div>
                            </div>
                            <img className='welcome_logotumi_img_2' src={ sep } alt="" />
                            <div className='card_moreStats'>
                                <p className='card_number_moreStats'>Número total de recorridos</p>
                                <div className='card_number_moreStats_container'>
                                    <p className='card_number_moreStats_number'>{this.state.recorridos}</p>
                                </div>
                            </div>
                        </div>
                        <table  className='moreStats_table'>
                            <tbody className='moreStats_table'>
                                <tr  className='moreStats_table_th_container'>
                                    <th>Fecha</th>
                                    <th>Distancia</th>
                                    <th>Duración</th>
                                    <th>Todas las embarcaciones</th>
                                </tr>
                                {
                                    this.state.inspecciones.map(inspeccion => {
                                        return(<CardInspeccion informacion={inspeccion} key={inspeccion.toString()}/>);
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>  
            </>
        );
    }
}

export default MasEstadisticas;