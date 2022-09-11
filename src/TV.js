import React from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";

import { Button, Form, FormGroup, FormLabel, FormSelect } from "react-bootstrap";
import './Anime.css';
class TV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showData: [],
      genre: "all",
      filter: "watched",
      date: "2000s"
    };


  }

  showGenre = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3001/Shows?genre=${this.state.genre}&year=${this.state.date}`)
      .then((res) => {
        console.log(this.state.genre);
        this.setState({ showData: res.data });
      })
      .catch((err) => {

      });
  }
  showBest = (e) => {
    e.preventDefault();

    axios
      .get(`http://localhost:3001/BestShows?filter=${this.state.filter}`)
      .then((res) => {
        console.log(this.state.filter);

        this.setState({ showData: res.data });
      })

      .catch((err) => {

      });



  }



  render() {
    return (
      <>

        <Form onSubmit={this.showGenre}>
          <FormGroup>
            <FormLabel>Genre</FormLabel>
            <FormSelect onChange={(e) => this.setState({ genre: e.target.value })}>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Horror">Horror</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Romance</option>
              <option value="Thriller">Thriller</option>
            </FormSelect>
          </FormGroup>
          <FormGroup>
            <FormLabel>Year</FormLabel>
            <FormSelect onChange={(e) => this.setState({ date: e.target.value })}>
              <option value="2000s">2000s</option>
              <option value="2010s">2010s</option>

            </FormSelect>
            <Button type="submit">Submit</Button>
          </FormGroup>
        </Form>
          <br></br>
            <Form onSubmit={this.showBest}>
              <button onClick={() => this.setState({ filter: "watched" })}>Most Watched</button>
              <button onClick={() => this.setState({ filter: "voted" })}>Highest Voted</button>
              <h2>Best Shows</h2>
              <br></br>

              <br></br>
              <br></br>

              <Row xs={1} md={4} className="g-4">
                {this.state.showData.map((item) => (
                  <div class="cards">
                  <figure class="card">
                    <img src={item.poster} />
    
                    <figcaption>{item.title}</figcaption>
                  </figure>
                </div>
                ))}
              </Row>

            </Form>
          <br></br>

          {/* <h2>Shows</h2>
          <Row xs={1} md={4} className="g-4">
            {this.state.showData.map((item) => (
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.poster} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.year}</Card.Text>
                    <Card.Text>{item.rating}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row> */}
  


      </>
    );
  }
}

export default TV;
