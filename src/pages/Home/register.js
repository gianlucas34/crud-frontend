import React, { Component } from 'react';
import api from '../../services/api';

import { Container } from './styles';

export default class Register extends Component {
    state = {
        name: '',
        age: 0,
        uf: ''
    }

    refreshPage = () => {
        window.location.reload(false);
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    createCostumers = async (event) => {
        event.preventDefault();

        await api.post('/costumers', this.state);

        this.refreshPage();
    }

    render() {
        const { name, age, uf } = this.state;

        return (
            <Container>
                <form onSubmit={this.createCostumers}>
                    <label>
                        Nome:
                        <input type="text" name="name" value={name} onChange={this.handleChange} />
                    </label>

                    <label>
                        Idade:
                        <input type="text" name="age" value={age} onChange={this.handleChange} />
                    </label>

                    <label>
                        UF:
                        <input type="text" name="uf" value={uf} onChange={this.handleChange} />
                    </label>

                    <button type="submit">Cadastrar novo</button>
                </form>
            </Container>
        )
    }
}