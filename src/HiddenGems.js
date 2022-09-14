import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import axios from "axios";
import UpdateForm from "./UpdateForm";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AddForm from "./AddForm";
import { Col, Row } from "react-bootstrap";
import "./Recommendations.css";
import { withAuth0 } from "@auth0/auth0-react";


class HiddenGems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recoArr: [],
      showForm: false,
      showAddForm: false,
      selectedReco: {},
      img: null,
      
    };
  }

   showButton = (val) => {
    const { user } = this.props.auth0;
    const { isAuthenticated } = this.props.auth0;

   
    if (isAuthenticated){
        if (user.email === val.email)
      return (true);
    else
      return (false);
  } else {
    return (false);
  }}


  componentDidMount = () => {
    
    console.log(process.env.REACT_APP_URL);
    axios
      .get(`${process.env.REACT_APP_SERVER}getReco`)
      .then((result) => {
        console.log(result.data);
        this.setState({
          recoArr: result.data,
          
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addReco = (event) => {
    const { user } = this.props.auth0;
    // event.preventDefault();

    const obj = {
      img: event.target.img.value,
      seriesName: event.target.seriesName.value,
      description: event.target.description.value,
      rating: event.target.rating.value,
      year: event.target.year.value,
      email: user.email,
    };
    axios
      .post(`${process.env.REACT_APP_SERVER}addReco`, obj)
      .then((result) => {
        this.setState({
          recoArr: result.data,
        });
      })

      .catch((err) => {
        console.log(err);
      });
  };

  deleteReco = (id) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER}deleteReco/${id}`)
      .then((result) => {
        this.setState({
          recoArr: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  openForm = (val) => {
    this.setState({
      showForm: true,
      selectedReco: val,
    });
  };

  handleClose = () => {
    this.setState({
      showForm: false,
      showAddForm: false,
    });
  };

  updateReco = (event) => {
    // event.preventDefault();
    const { user } = this.props.auth0;

    let obj = {
      seriesName: event.target.seriesName.value,
      description: event.target.description.value,
      rating: event.target.rating.value,
      year: event.target.year.value,
      email: user.email,
    };

    const id = this.state.selectedReco._id;
    console.log(id);
    axios
      .put(`${process.env.REACT_APP_SERVER}updateReco/${id}`, obj)
      .then((result) => {
        this.setState({
          recoArr: result.data,
        });
        this.handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  openAddForm = (val) => {
    this.setState({
      showAddForm: true,
      selectedReco: val,
    });
  };

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <div className="Body1">
        <br></br> <br></br><br></br>

        <h2 className="recoHeader">Recommendations</h2>
        <br></br>
        {isAuthenticated && <Button variant="primary" onClick={this.openAddForm} className="recBtn">
          Add Recommendation
        </Button>}

        <Row xs={1} md={4} lg={5} className="g-4">
          {this.state.recoArr.map((val) => {
            return (
              <>
                <div>
                  

                  <Col className="recCol">
                  <Card className="cardo" style={{ width: "20rem", height:"38rem" }}>
                      <Card.Body>
                        <Card.Img
                        className="formImg"
                          src={val.img}
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src =
                              "https://images-ext-1.discordapp.net/external/n726E5DLglvMSVlpSnNbLhdrJ_oIgIdlDU6XaqYMONc/https/i.imgur.com/LANaf1p.png?width=726&height=580";
                          }}
                        ></Card.Img>
                        <Card.Title>Name: {val.seriesName}</Card.Title>
                        <Card.Text>Description: {val.description}</Card.Text>
                        <Card.Text>Rating: {val.rating}</Card.Text>
                        <Card.Text>Year: {val.year}</Card.Text>
                        {this.showButton(val) && <Button
                          variant="danger"
                          onClick={() => this.openForm(val)}
                        >
                          Update
                        </Button>}

                        {this.showButton(val) &&<Button
                          variant="danger"
                          onClick={() => this.deleteReco(val._id)}
                        >
                          Delete
                        </Button>}
                      </Card.Body>
                    </Card>
                  </Col>
                </div>
              </>
            );
          })}
        </Row>

        <UpdateForm
          show={this.state.showForm}
          handleClose={this.handleClose}
          updateReco={this.updateReco}
          selectedReco={this.state.selectedReco}
        />
        <AddForm
          show={this.state.showAddForm}
          handleClose={this.handleClose}
          addReco={this.addReco}
          selectedReco={this.state.selectedReco}
        />
        <br></br><br></br>
      </div>
    );
  }
}

export default withAuth0(HiddenGems);
