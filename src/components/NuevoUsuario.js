import React,{ Component } from "react";
import { Link } from "react-router-dom";


class NuevoUsuario extends Component
{
    render()
    {
        return(
            <>
            <Link to={"/NewUser"} style={{textDecoration:'none'}}>
                <div className="card">
                    <div className="photo_container">
                        <img className="photo" src="https://robotanfibio.s3.sa-east-1.amazonaws.com/person.png"/>
                    </div>
                    <p className="card_text_1">Cree una cuenta</p>
                    <p className="card_text_2"><br/></p>
                </div>
            </Link>
            </>
        );
    }
}

export default NuevoUsuario;