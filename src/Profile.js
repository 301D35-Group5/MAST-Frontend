import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
// import Card from "react-bootstrap/Card";
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
      .delete(
        `${process.env.REACT_APP_SERVER}deleteProf?email=${email}&id=${id}`
      )
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
    const { isAuthenticated } = this.props.auth0;
    console.log(user);
    return (
      <div style={{ textAlign: "center" }} className="Body1">
        <br></br><br></br><br></br>
        <h2>Welcome to your Profile</h2>
        <br></br><br></br><br></br>
        <div class="CardsProfile">
          <div class="profile-card-4 text-center" >
            <img
              src={user.picture}
              alt="Profile Pic"
              class="img img-responsive"
            />
            <div class="profile-content">
              <div class="profile-description" style={{color:"#F5F5F5"}}>{user.name}</div>
              <div class="profile-description" >
                <p style={{color:"#F5F5F5"}}>{user.email}</p>
              </div>
            </div>
          </div>
        </div>
        <br></br><br></br><br></br>
        <br></br> <br></br>
        <h2 className="watchlistHeader">Here is your watchlist</h2>
        <br></br> <br></br><br></br><br></br><br></br>
        {/* HERE********************************************************************** */}
        {!this.state.profArr.length && (
          <h2 className="watchlistHeader">Your WatchList is empty.</h2>
        )}
        <Row xs={1} md={4} className="g-4">
          {this.state.profArr.map((value) => {
            return (
              <div class="cards">
                <figure class="card">
                  <img src={value.poster} alt="poster" />

                  <figcaption>
                    <p>{value.title}</p>{" "}
                    {isAuthenticated && (
                      <Button
                        variant="danger"
                        className="submitButton"
                        onClick={() => this.deleteProf(value._id)}
                        title={value.title}
                        name={value.poster}
                      >
                        Delete
                      </Button>
                    )}
                  </figcaption>
                </figure>
              </div>
            );
          })}
        </Row>
        {/* HERE********************************************************************* */}
        <br></br> <br></br>
      </div>
    );
  }
}

export default withAuth0(Profile);
