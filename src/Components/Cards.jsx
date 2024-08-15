import {useState} from 'react'
import { listaTarjetas } from '../Utiles/listaTarjetas'
import Tarjeta from './Tarjeta'
import Form from './Form'
const Cards = () => {
    const [selected, setSelected] = useState(null);
    console.log(selected)

    return (
        <div>
            <h2>Lista de mejores albumes </h2>
            {listaTarjetas.map((lista)=>(
                <Tarjeta key={lista.id} tarjeta={lista} setSelected={setSelected} />
            ))} 
            {selected ? <Form cards={selected}/> : null}
        </div>
    )
}

export default Cards