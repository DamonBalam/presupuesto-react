import React,{ Fragment, useState } from 'react';

import Error from './Error';

const Pregunta = ({ setPresupuesto,setRestante }) => {

    // DEFINIR EL STATE
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);


    // Funcion que lee el presupuesto
    const definirPresupuesto = ( e ) => {
        
        setCantidad(parseInt(e.target.value));
        
    }
    // Submit para definir el presupuesto
    const agregarPresupuesto = (e) => {
        e.preventDefault();

        // validar
        if (cantidad < 1 || isNaN( cantidad )) {
            setError(true);
            return;
        }


        setError(false);

        //guardando el presupuesto
        setPresupuesto(cantidad);
        setRestante(cantidad);

    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            { error
                ? <Error mensaje="El presupuesto es incorrecto" />
                : null }

            <form onSubmit={ agregarPresupuesto }>
                <input 
                    name="presupuesto"
                    type="number" 
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={ definirPresupuesto }
                />

                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
     );
}
 
export default Pregunta;