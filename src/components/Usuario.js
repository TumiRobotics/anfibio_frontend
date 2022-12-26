import React,{ Component } from "react";
import { Link } from "react-router-dom";


class Usuario extends Component
{
    render()
    {
        return(
            <>
            <Link to={`/login/${this.props.informacion[2]}`} style={{textDecoration: 'none'}}>
                <div className="card">
                    <div className="photo_container">
                        <img className="photo" src={this.props.informacion[3]}/>
                    </div>
                    <p className="card_text_1">{this.props.informacion[0]} {this.props.informacion[1]}</p>
                    <p className="card_text_2">{this.props.informacion[2]}</p>
                </div>
            </Link>
            </>
        );
    }
}

export default Usuario;