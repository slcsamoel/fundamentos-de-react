import React from 'react';

export default (props) => {

    // recenbendo uma função na propriedade clicar ao clicar no botão ira dispara uma função acão que ira chamar a função recebida recebida 

    function acao (){
        props.clicar(Math.random(), 'Gerado');
    }

    return (
        <div>
            <button onClick={acao}>Altera</button>
        </div>
    );

}
