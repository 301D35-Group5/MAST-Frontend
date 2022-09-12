import React from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import { withAuth0 } from '@auth0/auth0-react';
import { Button, Form, FormSelect, } from "react-bootstrap";
import './Anime.css';

class Anime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anime: [],
      filter: "watched",
      genre: "all",
    };
  }
  showBest = (e) => {
    e.preventDefault();

    axios
      .get(`http://localhost:3001/bestanime?filter=${this.state.filter}`)
      .then((res) => {
        console.log(this.state.filter);

        this.setState({ anime: res.data });
      })

      .catch((err) => { });
  };
  showGenre = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3001/animegenre?genre=${this.state.genre}`)
      .then((res) => {
        console.log(this.state.genre);
        this.setState({ anime: res.data });
      })
      .catch((err) => { });
  };


  addProf = (event) => {
    const { user } = this.props.auth0;
    alert("Success")
    event.preventDefault();
    const obj = {
      title: event.target.title,
      poster: event.target.name,
      email: user.email
    };
    console.log(obj)
    axios
      .post(`http://localhost:3001/addProf`, obj)
      .then((result) => {

      })

      .catch((err) => {
        console.log(err)
      })

  }







  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Form onSubmit={this.showGenre} className='genreForm'>
          <FormSelect className="formOptions"
            onChange={(e) => this.setState({ genre: e.target.value })}
          >
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Mystery">Mystery</option>
            <option value="Romance">Romance</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Thriller">Thriller</option>
          </FormSelect>
          <Button type="submit" className="submitButton">Submit</Button>
        </Form>
        <Form onSubmit={this.showBest}>
          <button className="watchedBtn" onClick={() => this.setState({ filter: "watched" })}>
            Most Watched
          </button>
          <button className="watchedBtn" onClick={() => this.setState({ filter: "voted" })}>
            Highest Voted
          </button>
          <br></br>

          <br></br>
          <br></br>

          {/* <Row xs={1} md={4} className="g-4">
            {this.state.anime.map((anime) => (
              <Col>
              <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={anime.poster} />
                  <Card.Body>
                  <Card.Title>{anime.title}</Card.Title>
                  <Card.Text>{anime.year}</Card.Text>
                  </Card.Body>
                  </Card>
                  </Col>
                  ))}
                </Row> */}
        </Form>


        <Row xs={1} md={4} className="g-4">
          {this.state.anime.map((anime) => (
            // <Col>
            //   <Card style={{ width: "18rem" }}>
            //     <Card.Img variant="top" src={anime.poster} />
            //     <Card.Body>
            //       <Card.Title>{anime.title}</Card.Title>
            //       <Card.Text>{anime.year}</Card.Text>
            //     </Card.Body>
            //   </Card>
            // </Col>
            <div class="cards">
              <figure class="card">
                <img src={anime.poster} alt="Poster" />

                <figcaption>{anime.title} {isAuthenticated && <Button onClick={this.addProf} title={anime.title} name={anime.poster}>Add watch list</Button>} </figcaption>
                
              </figure>
            </div>
          ))}
        </Row>
      </>
    );
  }
}

export default withAuth0(Anime);