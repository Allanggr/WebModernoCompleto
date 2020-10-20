import React from 'react'
import ReactDOM from 'react-dom'

// tem que ter letra maiuscula!!
// import BomDia from './componentes/BomDia'

// import Multi, { BoaNoite} from './componentes/Multiplos'

import Saudacao from './componentes/Saudacao'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'
// ReactDOM.render(
//     <div>
//         <Multi.BoaTarde nome="Ana"/>
//         <BoaNoite nome="Bia"/>
//     </div>
//     , document.getElementById('root'))

// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome="João"/>
//     </div>
// , document.getElementById('root'))

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            {/* Como passo os componentes Filhos aqui? */}
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
, document.getElementById('root'))