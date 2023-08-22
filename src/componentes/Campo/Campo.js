import { useState } from "react"
import "./Campo.css"

/*---- Creando un componente para los inputs del formulario*/
/*-- USAMOS PROPS PARA ACCEDER A LAS PROPIEDADES PROPS.TITULO LABEL O LO QUE DESEAMOS */
const Campo = (props) => {
    
    const placeholderModificado = `${props.placeholder}...`

    const { type = "text" } = props
    
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label> 
        <input
            placeholder={placeholderModificado}
            required={props.required} 
            value={props.valor} 
            onChange={manejarCambio}
            type={type}
            />
    </div>
}

export default Campo 