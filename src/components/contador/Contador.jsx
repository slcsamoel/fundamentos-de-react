import './Contador.css'
import React, { Component } from 'react';
import Display from './Display';
import Button from './Button';
import PassoFom from './PassoFom';


export default class Contador extends Component {

    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 0
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    mudaPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })

    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>

                <PassoFom passo={this.state.passo} passoChange={this.mudaPasso}></PassoFom>

                <Display valor={this.state.valor} />

                <div>
                    <Button acaoClicar={this.inc} operacao="+"></Button>
                    <Button acaoClicar={this.dec} operacao="-"></Button>
                </div>

            </div>
        );

    }

}