import React, { useState } from 'react';

export default (props) => {
       
    const [numeros,setNumeros] = useState(Array(props.qtdNumeros).fill(0))

    function geraNumerosNaoContidos(array){
        const min = 1;
        const max = 60;
        const novoNumero = parseInt(Math.random()*(max-min)) + 1;
        return array.includes(novoNumero) ? geraNumerosNaoContidos(array) : novoNumero ;
    }

    function gerarNumeros(){
        const novoArray = Array(props.qtdNumeros)
        .fill(0)
        .reduce(a=> {
            const numeroNovo = geraNumerosNaoContidos(a)
            return [...a , numeroNovo]
        },[])
        .sort((a,b) => a - b) // ordena o array em ordem decrecente
        setNumeros(novoArray);   
    }

    return (
        <>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Numeros</button>            
        </>
    );

}