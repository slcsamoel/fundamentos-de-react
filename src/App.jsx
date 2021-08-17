
import './App.css';
import React from 'react';

import Primeiro from './components/basicos/Primeiro';
import ComParamentro from './components/basicos/ComParamentro';
import ComFilhos from './components/basicos/ComFilhos';
import Card from './components/layout/Card';
import Repeticao from './components/basicos/Repeticao';
import Condicional from './components/basicos/Condicional';
import CondicionalComIf from './components/basicos/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai';
import Animation  from './components/animacao/Animation';

  


export default (props) => {      
 return(
     <div className="App">  

        <Card titulo="animação de Equipes" color="#0000CD" contentColor="#E0FFFF">
           <Animation data="team.json"/>
        </Card>
        
        <Card titulo="animação de Email" color="#0000CD" contentColor="#E0FFFF">
           <Animation data="contact-email.json"/>
        </Card>

        <Card titulo="#07 - Comunicação Direta " color="#FF4500" contentColor="#E0FFFF" >
            <Pai></Pai>  
        </Card>

        <Card titulo="#06 - Condicional com If " color="#FA6900" contentColor="#E0FFFF">
            <CondicionalComIf numero={5} ></CondicionalComIf>
        </Card>

        <Card titulo="#05 - Condicional v1" color="#E94C6F" contentColor="#E0FFFF">
            <Condicional numero={11} />
        </Card>

        <Card titulo="#04 - Componentes de Repetição" color="#0008BBA" contentColor="#E0FFFF">
            <Repeticao />
        </Card>

        <Card titulo="#03 - Componentes com filhos" color="#D96459" contentColor="#E0FFFF">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#02 - Componente com parametro" color="#FF85CB" contentColor="#E0FFFF">
            <ComParamentro titulo="Esse é o Titulo" subtitulo="Esse é o subtitulo" />
        </Card>

        <Card titulo="#01 - Primeiro Componente" color="#B0E0E6" contentColor="#E0FFFF">
            <Primeiro />
        </Card>

    </div>
  ); 

}