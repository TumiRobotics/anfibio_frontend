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
                <td>{this.props.informacion[1]} km</td>
                <td>{this.props.informacion[2]} hor</td>
                <td>{this.props.informacion[3]}</td>
            </tr>
            </>
        );
    }
}

export default CardInspeccion;