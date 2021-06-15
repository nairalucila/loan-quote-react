import React, { Fragment, useState } from 'react';
import { calcularTotal } from '../helpers';
//todo lo que es interactivo usa el state, retorna dos valores

const Formulario = (props) => {
    const {cantidad, guardarCantidad, plazo, guardarPlazo, total, guardarTotal, cargando, guardarCargando} = props;
    const [error, guardarError]= useState(false)
    
    const calcularPrestamoSubm = (e)=>{
        e.preventDefault();
        //Validar
        if(cantidad === 0 || plazo === ''){
            guardarError(true);
            return;
        }
        guardarError(false);

        //habilita spinner
        guardarCargando(true);

        setTimeout(() => {
            let totalAPagar = calcularTotal(cantidad, plazo);
            guardarTotal(totalAPagar);

            //deshabilita spinner
            guardarCargando(false);
        }, 3100);
    }
    return ( 
        <Fragment>
            <form onSubmit={calcularPrestamoSubm}>
                <div className="row">
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input 
                            className="u-full-width" 
                            type="number" 
                            placeholder="Ejemplo: 3000"
                            onChange={e => guardarCantidad(parseInt(e.target.value))}
                        />
                    </div>
                    <div>
                        <label>Plazo para Pagar</label>
                        <select 
                            className="u-full-width"
                            onChange={e => guardarPlazo(parseInt(e.target.value))}
                        >
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Calcular" 
                            className="button-primary u-full-width" 
                        />
                    </div>
                </div>
            </form>

            {(error) ?<p className="error"> Todos los campos son obligatorios</p> : null }
            

        </Fragment>
    );
}
//ESTO ES LO MISMO QUE ESTA EN ONCHANGE e guardarCantidad
   // const leerCantidad = (e)=>{
    //     console.log(e.target.value);
    //     guardarCantidad(parseInt(e.target.value))
    // }
 
export default Formulario;