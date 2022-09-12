import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


class Profile extends Component {
    render() {
        const { user } = this.props.auth0;
        console.log(user);
        return (
            <div>
                <h2>Welcomt to Profile</h2>




                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" alt="Photo" src={user.picture} />
                    <Card.Body>
                        <Card.Title>☺️{user.name}☺️</Card.Title>
                        <Card.Text>E-mail: {user.email}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default withAuth0(Profile);