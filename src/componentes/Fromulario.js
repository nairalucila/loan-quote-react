import React, { Fragment, useState } from 'react';
import { calcularTotal } from '../helpers';

const Formulario = (props) => {
    const {cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando} = props;
    const [error, guardarError]= useState(false)
    
    const calcularPrestamoSubm = (e)=>{
        e.preventDefault();
        if(cantidad === 0 || plazo === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarCargando(true);

        setTimeout(() => {
            let totalAPagar = calcularTotal(cantidad, plazo);
            guardarTotal(totalAPagar);
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
export default Formulario;