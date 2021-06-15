import React, { Fragment, useState } from 'react';
import Formulario from './componentes/Fromulario';
import Header from './componentes/Header';
import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado';
import Spiner from './componentes/Spiner';

function App() {
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);
  
  let componenteMensaje;

  if(cargando){
    componenteMensaje = <Spiner/>
  }else if(total === 0){
    componenteMensaje = <Mensaje/>;
  } else{
    componenteMensaje = <Resultado
                          total={total}
                          plazo={plazo}
                          cantidad={cantidad}
                        />;
  }

  return (
    <Fragment>
      <Header
      titulo="Cotizador de Prestamos"
      />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          guardarTotal={guardarTotal}
          guardarCargando={guardarCargando}
        />
      <div className="mensajes">
        {componenteMensaje}
      </div>
      </div>

    </Fragment>
    
  );
}
export default App;
