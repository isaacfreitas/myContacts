import React , {Component} from "react";
import api from "../../services/api";
import "./styles.css";

export default class User extends Component{
    state = {
        user : {}

    }

    async componentDidMount(){
        const {id} = this.props.match.params;
        const response = await api.get(`/users/${id}`)

        

        this.setState ({user : response.data});
    }



    render(){

        const {user} = this.state;

        return(
            <div className="user-info">
                

               
                <h1>{user.name}</h1>
                 <p>{user.username}</p>
                 <p>{user.phone}</p>
                 <a href={user.website}>{user.website}</a>
                 <p>{user.email}</p>
                 

                
                 
            </div>
        );
    }

}