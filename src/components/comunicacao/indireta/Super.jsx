import React, { useState } from 'react';
import Sub from './Sub';

export default (props) => {

    const [texto,setTexto] = useState('Valor')
    const [num,setNum] = useState(0) 

    function qndClicar(valorGerado , texto){
        setNum(valorGerado);
        setTexto(texto);
    }

    //Passando como parametro para  o componente filho(Sub) uma função
    return (
        <div>
            <h4>{texto}: {num}</h4>
            <Sub clicar={qndClicar} ></Sub>
        </div>
    );
}