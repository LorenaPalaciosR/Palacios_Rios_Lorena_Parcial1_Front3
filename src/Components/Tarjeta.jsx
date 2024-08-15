import React from 'react'


const Tarjeta = ({tarjeta, setSelected}) => {
    return (
        <div>
            <h3>Nombre: {tarjeta.nombre}</h3>
            <img src={tarjeta.img} alt=""/>
            <h4>Precio: $ {tarjeta.precio}</h4>
            <button onClick={()=> setSelected(tarjeta)}>Comprar</button>
        </div>
    )
}

export default Tarjeta