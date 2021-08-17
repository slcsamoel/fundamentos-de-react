import React from 'react';

function Primeiro (){
    return(
      <div>
         <h1>Primeiro Componente</h1>
         <h2>Exempo de um componente em react</h2>
     </div>
    );

}

export default Primeiro ; 


//Outras Maneiras de exportar esse componente

// export default function (){
//     return(
//       <div>
//          <h1>Primeiro Componente</h1>
//          <h2>Exempo de um componente em react</h2>
//      </div>
//     );

// }

// export default () =>
//          <>
//         <h1>Primeiro Componente {Arrow}</h1>
//         <h2>Exemplo de um componente React</h2>
//         </>