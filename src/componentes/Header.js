import React from 'react';

// function Header({titulo}) {

//     return (
//         <Fragment>
//         <h1> {titulo}</h1>
//         </Fragment>
//     )
// };

//Esta es otra forma de definir la funcion, en esta no es necesario escribir el return
//Pero cuando necesitas crear codigo js es necesario el return
const Header = ({titulo}) => ( 
    <h1> {titulo}</h1>
);


export default Header;