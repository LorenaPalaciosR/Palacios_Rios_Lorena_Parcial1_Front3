import {useState} from 'react'


const Form = ({cards}) => {
    const [name, setName]=useState("");
    const [lastName, setLastName]=useState("");
    const [email, setEmail]=useState("");
    const [show, setShow] = useState(null); 
   



    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const handleShop = (e) => {
        if (name.length > 3 && lastName.length > 3 && emailRegex.test(email)) {
            setShow(true);
        } else {
            setShow(false);
        }
    }



    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
                <label>Apellido</label>
                <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
                <label>Correo</label>
                <input type="email"value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <button onClick={handleShop}>Confirmar</button>
            </form>
            {show === true && <p>¡Gracias por su compra!</p>}
            {show === false && <p>Datos incorrectos</p>}      
            </div>
    )
}

export default Form