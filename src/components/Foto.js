import React,{ Component } from "react";
import { Link } from "react-router-dom";


class Boat extends Component
{
    componentDidMount() {
        let enlace = document.getElementById(String(this.props.informacion[0]))
        enlace.href = `http://192.168.137.80:8000/infoAnfibio/foto/${this.props.informacion[0]}`
    }
    render()
    {
        return(
            <>
            <div className="gallery_boat" style={{border:'1px solid white'}}>
                <a style={{textDecoration:'none'}} id={this.props.informacion[0]}>
                    <p style={{color:'white',fontSize:'20px'}}>{this.props.informacion[1]}</p>
                </a>
            </div>
            </>
        );
    }
}

export default Boat;