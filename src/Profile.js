import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Button, Row } from "react-bootstrap";

import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profArr: [],
    };
  }

  componentDidMount = () => {
    const { user } = this.props.auth0;
    const email = user.email;
    console.log(process.env.REACT_APP_URL);
    axios
      .get(`${process.env.REACT_APP_SERVER}getProf?email=${email}`)
      .then((result) => {
        console.log(result.data);
        this.setState({
          profArr: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteProf = (id) => {
    const { user } = this.props.auth0;
    const email = user.email;
    console.log(id);
    axios
      .delete(`${process.env.REACT_APP_SERVER}deleteProf?email=${email}&id=${id}`)
      .then((result) => {
        this.setState({
          profArr: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { user } = this.props.auth0;
    console.log(user);
    return (
      <div style={{ textAlign: "center" }} className="Body1">
        <h2>Welcome to Profile</h2>
        <div style={{ alignItems: "center" }}>
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              alt="Photo"
              src={user.picture}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "https://imgur.com/awGS5y3";
              }}
            />
            <Card.Body>
              <Card.Title className="userInfo">☺️{user.name}☺️</Card.Title>
              <Card.Text className="userInfo">E-mail: {user.email}</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div class="col-md-4">
          <div class="profile-card-4 text-center">
            <img
              src={user.picture}
              alt="Profile Pic"
              class="img img-responsive"
            />
            <div class="profile-content">
              <div class="profile-description">{user.name}</div>
              <div class="profile-description">
                <p>{user.email}</p>
              </div>
            </div>
          </div>
        </div>

        <Row xs={1} md={4} className="g-4">
          {this.state.profArr.map((value) => {
            return (
              <div>
                <br></br>
                <Card style={{ width: "20rem" }}>
                  <Card.Img
                    src={value.poster}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src =
                        "https://images-ext-1.discordapp.net/external/n726E5DLglvMSVlpSnNbLhdrJ_oIgIdlDU6XaqYMONc/https/i.imgur.com/LANaf1p.png?width=726&height=580";
                    }}
                  ></Card.Img>
                  <Card.Body>
                    <Card.Text className="userInfo">
                      {" "}
                      Title: {value.title}
                    </Card.Text>
                  </Card.Body>
                  <Button
                    variant="primary"
                    onClick={() => this.deleteProf(value._id)}
                  >
                    Delete
                  </Button>
                </Card>
              </div>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default withAuth0(Profile);
