import React from 'react';


export default (props) => {

    function acao (){
        props.acaoClicar();
    }

    return (
        <button onClick={acao}>{props.operacao}</button>
    );
} 