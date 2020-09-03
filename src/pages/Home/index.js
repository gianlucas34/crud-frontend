import React, { Component } from 'react';
import api from '../../services/api';

import { Container, Main } from './styles';
import Register from './register';

export default class Home extends Component {
    state = {
        costumers: []
    }

    componentDidMount() {
        this.loadCostumers();
    }

    loadCostumers = async () => {
        const res = await api.get('/costumers');

        this.setState({ costumers: res.data });
    }

    deleteCostumer = async (id) => {
        await api.delete(`/costumers/${id}`);
    }

    render() {
        return (
            <Container>
                <h1>Listagem de clientes</h1>

                <Main>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>UF</th>
                        </tr>
                    </thead>

                    {this.state.costumers.map(costumer => (
                        <tr>
                            <td>{costumer.name}</td>
                            <td>{costumer.age}</td>
                            <td>{costumer.uf}</td>
                            <button onClick={() => this.deleteCostumer(costumer._id)}>DELETE</button>
                        </tr>
                    ))}
                </Main>

                <Register />
            </Container>
        )
    }
}