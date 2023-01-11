import React,{ Component } from "react";
import { Link } from "react-router-dom";



class CardInspeccion extends Component
{
    render()
    {
        return(
            <>
            <tr>
                <td>{this.props.informacion[0]}</td>
                <td>{this.props.informacion[1]}</td>
                <td>{this.props.informacion[2]} km</td>
                <td>{this.props.informacion[3]} hor</td>
                <td>{this.props.informacion[4]}</td>
                <td style={{textAling:"center"}}><a style={{textDecoration:"none"}} href={`http://192.168.137.80:8000/infoAnfibio/fotosInspeccionEspecifico/${this.props.informacion[0]}`} >Ver</a></td>
                <td style={{textAling:"center"}}><a>Convertir</a></td>
                <td style={{textAling:"center"}}>En proceso</td>
            </tr>
            </>
        );
    }
}

export default CardInspeccion;