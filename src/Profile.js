import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Button, Row } from 'react-bootstrap';


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profArr: [],

        }
    }


    componentDidMount = () => {
        const { user } = this.props.auth0;
        const email = user.email;
        console.log(process.env.REACT_APP_URL)
        axios
            .get(`http://localhost:3001/getProf?email=${email}`)
            .then((result) => {

                console.log(result.data);
                this.setState({
                    profArr: result.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }


    deleteProf = (id) => {
        const { user } = this.props.auth0;
        const email = user.email;
        console.log(id)
        axios
          .delete(`http://localhost:3001/deleteProf?email=${email}&id=${id}`)
          .then((result) => {
            this.setState({
              profArr: result.data
            })
          })
          .catch((err) => {
            console.log(err)
          })
      }



    render() {
        const { user } = this.props.auth0;
        console.log(user);
        return (
            <div style={{textAlign: 'center'}}>
                <h2>Welcome to Profile</h2>
                <div style={{alignItems: 'center'}}>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" alt="Photo" src={user.picture} />
                    <Card.Body>
                        <Card.Title>☺️{user.name}☺️</Card.Title>
                        <Card.Text>E-mail: {user.email}</Card.Text>
                    </Card.Body>
                </Card>
                </div>

                <Row xs={1} md={4} className="g-4">
                {this.state.profArr.map((value) =>{
                    return(
                      <div><br></br>
                      <Card style={{ width: '20rem' }}>
                      <Card.Img src={value.poster} onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "https://images-ext-1.discordapp.net/external/n726E5DLglvMSVlpSnNbLhdrJ_oIgIdlDU6XaqYMONc/https/i.imgur.com/LANaf1p.png?width=726&height=580";
                          }}  ></Card.Img>
                          <Card.Body>
                              <Card.Text>title: {value.title}</Card.Text>
                          </Card.Body>
                          <Button variant="primary" onClick={() => this.deleteProf(value._id)}>Delete</Button>
                      </Card>
                  </div>
                    )
                })}
                </Row>
              
            </div>
        )
    }
}

export default withAuth0(Profile);