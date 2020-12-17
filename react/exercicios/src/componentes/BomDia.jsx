import React from 'react'

//              utiliza props por conveção (propiedade)
export default props => [
    <h1 key='h1'>Bom dia {props.nome}!</h1>,
    <h2 key='h2'>Até Breve</h2>
]

// import React, { Fragment } from 'react'
// export default props => 
//     <Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até Breve</h2>
//     </Fragment>

// export default props => 
//     <React.Fragment>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até Breve</h2>
//     </React.Fragment>

// export default props => 
//     <div>
//         <h1>Bom dia {props.nome}!</h1>
//         <h2>Até Breve</h2>
//     </div>