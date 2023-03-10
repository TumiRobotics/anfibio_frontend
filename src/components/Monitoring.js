import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import "../style/Monitoring.css";
import tumilogo from "../img/tumi_logo_2.png"
import sep from "../img/separator.png"
import icon1 from "../img/monitoring_icon_1.png";
import icon2 from "../img/monitoring_icon_2.png";
import icon3 from "../img/monitoring_icon_3.png";
import boton1 from "../img/monitoring_boton_1.png";
import boton2 from "../img/monitoring_boton_2.png";
import nav3 from "../img/nav_3.png";
import closeBtn from "../img/close.png";
import ind from "../img/ind.png";
import info_icon from "../img/info__icon.png";
import html2canvas from "html2canvas";
import Canvas2Image from "canvas2image"

function getGamepadInfo()
{   
    let gp_object = navigator.getGamepads()[0]
    for(let i = 0;i<gp_object.buttons.length;i++)
    {
        if(gp_object.buttons[i].value === 1)
        {
            let botonPresionado = `$OAXBTN${i}`
            console.log(botonPresionado)
            /*
            fetch(`/devTumi/gamepadButton?comando=${botonPresionado}`)
            .then(response => response.json())
            .then(data => {
                if(data.mensaje === 'recibido')
                {
                    elemento_html = document.getElementById(String(i))
                    elemento_html.value = '0'
                    elemento_html.value = '1'
                }
            })
            */
            
        }
    }
}
let infoGamepad = null
let start = null
let stop = null
let mediaRecorder = null

document.addEventListener('DOMContentLoaded',()=>{
    let start = document.getElementById('start'),stop  = document.getElementById('stop'),mediaRecorder;
    window.addEventListener("gamepadconnected", function(e) {
        console.log('Gamepad ha sido conectado')
        let infoGamepad = setInterval(getGamepadInfo,100)
    })

    window.addEventListener("gamepaddisconnected", function(e) {
        console.log('Gamepad ha sido desconectado')
        clearInterval(infoGamepad)
    })
})

/*
function terminarTrabajo() 
{
    console.log('Finalizar')
    console.log(tstate.horas)
    let duracion = this.state.horas + '.' + parseFloat(parseFloat(this.setState.minutos)/60).toFixed(2)
    let distanciaTotal = this.state.distancia
    fetch(`http://127.0.0.1:8000/infoAnfibio/registrarTrabajo?duracion=${duracion}&distancia=${distanciaTotal}`)
    .then(response=>response.json())
    .then(data => {
        console.log(data)
    })
    window.location.assign('http://localhost:3000/Main')
}
*/

async function grabarVideo(){
    let stream = await recordScreen();
    let mimeType = 'video/webm';
    mediaRecorder = createRecorder(stream, mimeType);
  let node = document.createElement("p");
    node.textContent = "Started recording";
    document.body.appendChild(node);
}

function detenerVideo(){
    mediaRecorder.stop();
    let node = document.createElement("p");
    node.textContent = "Stopped recording";
    document.body.appendChild(node);
}

async function recordScreen() {
    return await navigator.mediaDevices.getDisplayMedia({
        audio: true, 
        video: { mediaSource: "screen"}
    });
}

function createRecorder (stream, mimeType) {
  // the stream data is stored in this array
  let recordedChunks = []; 

  const mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = function (e) {
    if (e.data.size > 0) {
      recordedChunks.push(e.data);
    }  
  };
  mediaRecorder.onstop = function () {
     saveFile(recordedChunks);
     recordedChunks = [];
  };
  mediaRecorder.start(200); // For every 200ms the stream data will be stored in a separate chunk.
  return mediaRecorder;
}

function saveFile(recordedChunks){

   const blob = new Blob(recordedChunks, {
      type: 'video/webm'
    });
    //Consultar ultimo ID
    let filename = window.prompt('Enter file name'),
        downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${filename}.webm`;

    document.body.appendChild(downloadLink);
    downloadLink.click();
    URL.revokeObjectURL(blob); // clear from memory
    document.body.removeChild(downloadLink);
}

function iniciarInspeccion()
{
    fetch('http://192.168.137.80:8000/infoAnfibio/iniciarInspeccion')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}

function capturarFotoInspeccion()
{
    fetch('http://192.168.137.80:8000/infoAnfibio/capturarFotoInspeccion')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
}

class Monitoring extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            horas:'0',
            minutos:'0',
            segundos:'0',
            distancia:'0',

            showParmams: false
        };
        this.toggleDisplay = this.toggleDisplay.bind(this);
        this.toggleDisplayParams = this.toggleDisplayParams.bind(this);
    }

    ref = React.createRef();

    handleClickTakeScreenShot = () => {
        console.log('Este es un ejemplo')
        const { cropPositionTop, cropPositionLeft, cropWidth, cropHeigth } = {
        cropPositionTop: 0,
        cropPositionLeft: 0,
        cropWidth: 1400,
        cropHeigth: 1800
        };

        html2canvas(this.ref.current).then(canvas => {
        let croppedCanvas = document.createElement("canvas");
        let croppedCanvasContext = croppedCanvas.getContext("2d");

        croppedCanvas.width = cropWidth;
        croppedCanvas.height = cropHeigth;

        croppedCanvasContext.drawImage(canvas, cropPositionLeft, cropPositionTop);

        const a = document.createElement("a");
        a.href = croppedCanvas.toDataURL();
        a.download = "img5.png";
        a.click();
        });
    };

    tomarFoto()
    {
        console.log('TomandoFoto')
        html2canvas(document.getElementById('camaraInfo'), {
            onrendered: function(canvas) 
            {
                console.log('Foto capturada')
                return Canvas2Image.saveAsPNG(canvas);
            }
        });
    }

    toggleFrontLight()
    {
        let indicador_FL = document.getElementById('fl_ind')
        if(indicador_FL.innerHTML === 'FL On')
        {
            indicador_FL.innerHTML = 'FL Off'
            console.log('Se enciende las luces delanteras')
            fetch("http://192.168.137.80:8000/infoAnfibio/encenderLucesFL")
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
        }
        else if(indicador_FL.innerHTML === 'FL Off')
        {
            indicador_FL.innerHTML = 'FL On'
            console.log('Se enciende las luces delanteras')
            fetch("http://192.168.137.80:8000/infoAnfibio/apagarLucesFL")
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
        }
    }

    toggleBackLight()
    {
        let indicador_BL = document.getElementById('bl_ind')
        if(indicador_BL.innerHTML === 'BL On')
        {
            indicador_BL.innerHTML = 'BL Off'
            console.log('Se enciende las luces delanteras')
            fetch("http://192.168.137.80:8000/infoAnfibio/encenderLucesBL")
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
        }
        else if(indicador_BL.innerHTML === 'BL Off')
        {
            indicador_BL.innerHTML = 'BL On'
            console.log('Se enciende las luces delanteras')
            fetch("http://192.168.137.80:8000/infoAnfibio/apagarLucesBL")
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
        }
    }

    toogleLavado()
    {
        let indicador_LV = document.getElementById('lv_ind')
        if(indicador_LV.innerHTML === 'LV On')
        {
            indicador_LV.innerHTML = 'LV Off'
            console.log('Se enciende las luces delanteras')
            fetch("http://192.168.137.80:8000/infoAnfibio/encenderLucesLV")
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
        }
        else if(indicador_LV.innerHTML === 'LV Off')
        {
            indicador_LV.innerHTML = 'LV On'
            console.log('Se enciende las luces delanteras')
            fetch("http://192.168.137.80:8000/infoAnfibio/apagarLucesLV")
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
        }
    }


    toggleDisplay() {
        this.setState({
            ...this.state,
            show: !this.state.show,
        });
    }
    
    toggleDisplayParams() {
        this.setState({
            ...this.state,
            showParmams: !this.state.showParmams,
        });
    }

    terminarTrabajo() {
        let datosTiempo = document.getElementById('datosTiempo')
        console.log(datosTiempo.innerHTML)
        let datoDistancia = document.getElementById('datoDistancia')
        fetch(`http://192.168.137.80:8000/infoAnfibio/registrarTrabajo?duracion=${String(datosTiempo.innerHTML)}&distancia=${String(datoDistancia.innerHTML)}`)
        .then(response=>response.json())
        .then(data => {
            console.log(data)
            window.location.assign('http://localhost:3000/Main')
        })
    }

    componentDidMount() {

        setInterval(()=>{
            console.log('hola')
            this.setState({
                ...this.state,
                segundos:String(parseInt(this.state.segundos) + 1)
            })

            if(this.state.segundos === '60')
            {
                this.setState({
                    ...this.state,
                    segundos:'0',
                    minutos:String(parseInt(this.state.minutos) + 1),
                    distancia: String(parseFloat(this.state.distancia)+0.75)
                })
            }
            if(this.state.minutos === '60')
            {
                this.setState({
                    ...this.state,
                    minutos:'0',
                    horas:String(parseInt(this.state.horas) + 1)
                })
            }
        },1000)
    }

    render() {
        return(
            <>
                <div className='monitoring_container'>
                    <div className='monitoring_header'>
                        <img className='monitoring_logotumi_img' src={ tumilogo } alt="Logo" />
                        <img className='monitoring_logotumi_img_2' src={ sep } alt="" />
                        <p className='welcome_header_text'>Trabajo iniciado</p> 
                    </div>
                    <img className='monitoring_photo_session' alt="" onClick={this.toggleDisplay}/>
                    <div className='monitoring_screen' id="#screenshot" ref={this.ref}>
                        {
                            this.state.show &&
                            <div className='monitoring_finish'>
                                <p className='monitoring_finish_title'>Terminar el trabajo</p>
                                {/* <img className='monitoring_info_icon'  src={ info_icon } alt="" /> */}
                                <div className='monitoring_finish_btn_container'>
                                    <button className='monitoring_finish_button btn2' onClick={this.toggleDisplay}>Continuar</button>
                                    <button className='monitoring_finish_button' onClick={this.terminarTrabajo}>Terminar trabajo</button>
                                </div>
                            </div>
                        }

                    <div className='monitoring_nav_1'  onClick={this.toggleDisplayParams}>
                        <img className='monitoring_nav_3' src= { nav3 } alt="" />
                    </div>
                        {
                            this.state.showParmams &&

                        <div className='monitoring_overlay_window' id='monitor_window'>
                            <img className='monitoring_overlay_close' src= { closeBtn }  onClick={this.toggleDisplayParams} alt="Close" />
                            <p className='monitoring_overlay_title'>Verificar controles antes de iniciar el trabajo</p>
                            <img className='monitoring_info_icon'  src={ info_icon } alt="" />
                            <p className='monitoring_overlay_text_1'>Modo Autom??tico</p>
                            <p className='monitoring_enable'>Habilitado</p>
                            <div className='monitoring_overlay_parameter_container'>
                                <p className='monitoring_overlay_parameter_label label_bold'>Velocidad</p>
                                <p className='monitoring_overlay_parameter_label_2'>5km</p>
                                <input type="range" id="points" name="points" min="0" max="10"  className='monitoring_overlay_parameter_range'></input>
                            </div>
                            <div className='monitoring_overlay_parameter_container_2'>
                                <p className='monitoring_overlay_parameter_label'>Velocidad controlada</p>
                                <p className='monitoring_overlay_parameter_label'>10km/H</p>
                            </div>
                            <div className='monitoring_overlay_parameter_container'>
                                <p className='monitoring_overlay_parameter_label label_bold'>Cepillos</p>
                                <p className='monitoring_overlay_parameter_label'>On</p>
                            </div>
                            <div className='monitoring_overlay_parameter_container_column'>
                                <div className='monitoring_overlay_parameter_container_3'>
                                    <p className='monitoring_overlay_parameter_label'>Cepillo 1</p>
                                    <p className='monitoring_overlay_parameter_label'>On</p>
                                </div>
                                <div className='monitoring_overlay_parameter_container_3'>
                                    <p className='monitoring_overlay_parameter_label'>Cepillo 2</p>
                                    <p className='monitoring_overlay_parameter_label'>On</p>
                                </div>
                                <div className='monitoring_overlay_parameter_container_3'>
                                    <p className='monitoring_overlay_parameter_label'>Cepillo 3</p>
                                    <p className='monitoring_overlay_parameter_label'>On</p>
                                </div>
                            </div>
                            <div className='monitoring_overlay_parameter_container'>
                                <p className='monitoring_overlay_parameter_label label_bold'>Grabaci??n de recorrido</p>
                                <p className='monitoring_overlay_parameter_label'>On</p>
                            </div>
                            <div className='monitoring_overlay_parameter_container_2'>
                                <p className='monitoring_overlay_parameter_label'>Captura de fotograf??as</p>
                                <p className='monitoring_overlay_parameter_label_2'>On</p>
                                <p className='monitoring_overlay_parameter_label'>Un captura cada 5 min</p>
                            </div>
                        </div>
                        }
                        <img className='monitoring_grid' src={ "http://192.168.137.80:8080/?action=stream" } alt=""/>
                        <div className='monitoring_parameters_container'>
                            <p id='datosTiempo'>{this.state.horas}:{this.state.minutos}:{this.state.segundos}</p><p> / Grabaci??n</p>
                            <p>D: </p><p id='datoDistancia'>{this.state.distancia}</p><p> km </p>
                        </div>
                        <button onClick={this.toggleFrontLight} className='monitoring_icon_1' id="fl_ind">FL On</button>
                        {/*<img className='monitoring_icon_1' onClick={this.toggleLight} style={{ backgroundColor:"green" }} src= { icon1 } alt="" />*/}
                        <button className='monitoring_icon_2' onClick={this.toggleBackLight} id="bl_ind">BL On</button>
                        {/*<img className='monitoring_icon_2' src= { icon2 } alt="" />*/}
                        {/*<img className='monitoring_icon_3' src= { icon3 } alt="" />*/}
                        <button className='monitoring_icon_3' onClick={this.toogleLavado} id="lv_ind">LV On</button>
                        <div  className='monitoring_option_img_container'>
                            <button style={{backgroundColor:'transparent',border:'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={capturarFotoInspeccion}>
                                <img className='monitoring_option_img' src= { boton1 } alt="" />    
                            </button>
                            
                        </div>
                        <button className='monitoring_record_btn'  onClick={grabarVideo}>
                            Grabar
                        </button>
                        <button className='monitoring_stop_btn' onClick={detenerVideo}>
                            Stop
                        </button>
                        <button className='monitoring_start_inspeccion'  onClick={iniciarInspeccion}>
                            Iniciar
                        </button>
                        <p className='monitoring_text_option_1'>{this.state.horas} : {this.state.minutos} : {this.state.segundos}</p>
                        <div className='monitoring_indicator_container'>
                            <p className='monitoring_indicator_text'>10??</p>
                            <img className='monitoring_indicator' src={ ind }></img>
                        </div>
                        <div className='monitoring_map_container'>
                            <img src={"http://192.168.137.30:8080/?action=stream"} />
                            <div className='monitoring_map_row'>
                                <div className='monitoring_map_column'>
                                    <p className='monitoring_map_text_1'>D N/A</p>
                                    <p className='monitoring_map_text_1'>V.H. N/A</p>
                                    <p className='monitoring_map_text_1'>NE 023??</p>
                                </div>
                                <div className='monitoring_map_column'>
                                    <p className='monitoring_map_text_1'>D N/A</p>
                                    <p className='monitoring_map_text_1'>V.H. N/A</p>
                                    <p className='monitoring_map_text_1'>NE 023??</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className='monitoring_nav_1'>
                            <img className='monitoring_nav_3' src= { nav3 } alt="" />
                        </div> */}
                        
                    </div>
                </div>
            </>
        )
    }
}
  
  export default Monitoring;