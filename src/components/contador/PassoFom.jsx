import React from 'react';

export default (props) => {



    return (

        <div>
            <label for="passoInput">Passo: </label>

            <input id="passoInput" type="number"
                value={props.passo}
                onChange={e => props.passoChange(+e.target.value)} />
        </div>

    );


}