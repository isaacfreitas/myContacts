import React, { Component } from "react";
import api from "../../services/api";
import {Link} from "react-router-dom";

import "./styles.css";

export default class Main extends Component {

    state = {
        users: []
    };

    componentDidMount() {
        this.loadProducts();
    }


    loadProducts = async () => {
        const {data} = await api.get('/users');

        /* console.log(data); */

        this.setState({ users: data });
    };



    render() {

        const {users} = this.state;

        return (
            <div className = "user-list">
                {users.map(user => (
                    <article key= {user.id}>
                        <strong>{user.name}</strong>
                        <p>{user.company.name}</p>


                        <Link to={`/users/${user.id}`}>Detalhes</Link>
                    </article>
                ))}
                
            </div>
        );
    }
}