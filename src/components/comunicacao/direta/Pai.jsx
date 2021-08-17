import React from 'react';

import Filho from './Filho';

export default props =>
    <div>
        <Filho sobrenome="Silva">João</Filho>
        <Filho sobrenome="Silva">Maria</Filho>
        <Filho sobrenome="Silva">Pedro</Filho>
    </div>