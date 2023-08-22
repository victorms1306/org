import "./Boton.css"
//Creando un boton 
const Boton = (props) => {
    return <button className="boton">{props.texto}</button>
}

export default Boton