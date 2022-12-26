import React,{ Component } from "react";
import { Link } from "react-router-dom";


class Boat extends Component
{
    render()
    {
        return(
            <>
            <Link to={'/Monitoring'} style={{textDecoration: 'none'}}>
                <div className='card_boat'>
                    <img src={this.props.informacion[1]} style={{height:"800px"}}/>
                    <div className='card_boat_txt_container'>{this.props.informacion[0]}</div>
                </div>
            </Link>
            </>
        );
    }
}

export default Boat;