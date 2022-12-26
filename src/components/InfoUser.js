import React, { Component } from "react";
import "../style/Main.css";


class InfoUser extends Component
{
    render()
    {
        return(
            <>
            <h1 className="work_text_1">Este es un ejemplo de {this.props.nombre}</h1>
            </>
        );
    }
}

export default InfoUser;