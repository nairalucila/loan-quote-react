import React, { Fragment, useState } from 'react';
import Formulario from './componentes/Fromulario';
import Header from './componentes/Header';
import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado';
import Spiner from './componentes/Spiner';

/**Nota importante linea 61 */

function App() {
  //Definir state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);
  
  let componenteMensaje;
  //condicion para mostrar el spinner
 

  if(cargando){
    componenteMensaje = <Spiner/>
  }else if(total === 0){
    //carga condicional en React: mostrar un componente u otro dependiendo.
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
      {/* Div de formulario */}
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

/**Para deployar con ftp:
 * hacer build --> ver doc
 * y en la carpeta build que se crea
 * en el index.html
 * buscar los /statics y borrarles la barra / de adelante
 * en 3 lugares
 */