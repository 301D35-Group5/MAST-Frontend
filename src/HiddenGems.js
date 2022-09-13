
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import axios from 'axios';
import UpdateForm from './UpdateForm';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AddForm from './AddForm';
import { Col, Row } from 'react-bootstrap';
import "./Recommendations.css";


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

  componentDidMount = () => {
    console.log(process.env.REACT_APP_URL);
    axios
      .get(`http://localhost:3001/getReco`)
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
    event.preventDefault();
    const obj = {
      img: event.target.img.value,
      seriesName: event.target.seriesName.value,
      description: event.target.description.value,
      rating: event.target.rating.value,
      year: event.target.year.value,
    };
    axios
      .post(`http://localhost:3001/addReco`, obj)
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
      .delete(`http://localhost:3001/deleteReco/${id}`)
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
    let obj = {
      img: event.target.img.value,
      seriesName: event.target.seriesName.value,
      description: event.target.description.value,
      rating: event.target.rating.value,
      year: event.target.year.value,
    };

    const id = this.state.selectedReco._id;
    console.log(id);
    axios
      .put(`http://localhost:3001/updateReco/${id}`, obj)
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
    return (
      <div>
        <h2>The Hidden Gems</h2>
        {/* <form onSubmit={this.addReco}>
          <input type="text" name="seriesName" placeholder="Series name" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="rating" placeholder="Rating" />
          <input type="text" name="year" placeholder="Year" />
          <button type='submit'>Add</button>
        </form> */}
        <h2>Recommendations:</h2>

        <Button variant="primary" onClick={this.openAddForm} className="recBtn"> + Add a recommendation</Button>

        <Row xs={1} md={4} className="g-4">
          {this.state.recoArr.map((val) => {
            return (
              <>
                <div>
                  {/* <h2>Name: {val.seriesName}</h2>
                <p>description: {val.description}</p>
                <p>rating: {val.rating}</p>
                <p>year: {val.year}</p>
                <button onClick={() => this.deleteReco(val._id)}>delete</button>
              <button onClick={() => this.openForm(val)}>Update</button> */}

                  <Col className='recCol'>
                    <Card className='cardo' style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Img
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
                        <Button
                          variant="primary"
                          onClick={() => this.deleteReco(val._id)}
                        >
                          Delete
                        </Button>
                        <Button
                          variant="primary"
                          onClick={() => this.openForm(val)}
                        >
                          Update
                        </Button>
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
      </div>
    );
  }
}

export default HiddenGems;
