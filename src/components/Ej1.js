import React, { Component } from "react";
import "../style/Main.css";
import InfoUser from './InfoUser';


class Ej1 extends Component
{
    render()
    {
        //Aqui va el codigo javascript
        let usuarios = ['alexander','jaimico','luis']

        return(
            <>
            {
                usuarios.map(usuario => {
                    return(<InfoUser nombre={usuario} />)
                })
            }
            </>
        );
    }
}

export default Ej1;