import React from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import { withAuth0 } from "@auth0/auth0-react";
import { Button, Form, FormSelect } from "react-bootstrap";
import "./Anime.css";

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
      .get(
        `${process.env.REACT_APP_SERVER}bestanime?filter=${this.state.filter}`
      )
      .then((res) => {
        console.log(this.state.filter);

        this.setState({ anime: res.data });
      })

      .catch((err) => {});
  };
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_SERVER}bestanime?filter=voted`)
      .then((res) => {
        console.log(this.state.filter);

        this.setState({ anime: res.data });
      })

      .catch((err) => {});
  }
  showGenre = (e) => {
    e.preventDefault();
    axios
      .get(
        `${process.env.REACT_APP_SERVER}animegenre?genre=${this.state.genre}`
      )
      .then((res) => {
        console.log(this.state.genre);
        this.setState({ anime: res.data });
      })
      .catch((err) => {});
  };

  addProf = (event) => {
    const { user } = this.props.auth0;
    alert("Success");
    event.preventDefault();
    const obj = {
      title: event.target.title,
      poster: event.target.name,
      email: user.email,
    };
    console.log(obj);
    axios
      .post(`${process.env.REACT_APP_SERVER}addProf`, obj)
      .then((result) => {})

      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <div className="Body1">
        <Form className="watchedForm" onSubmit={this.showBest}>
          <button
            className="watchedBtn"
            onClick={() => this.setState({ filter: "watched" })}
          >
            Most Watched
          </button>
          <button
            className="watchedBtn"
            onClick={() => this.setState({ filter: "voted" })}
          >
            Highest Voted
          </button>
          <FormSelect
            className="formOptions"
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
        </Form>
        <Form onSubmit={this.showGenre} className="genreForm">
          <Button type="submit" className="submitButton">
            Submit
          </Button>
        </Form>

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
                <figcaption>
                  <p>{anime.title}</p> <p>Rating: {anime.malRating}</p>
                  {isAuthenticated && (
                    <Button
                      onClick={this.addProf}
                      className=""
                      title={anime.title}
                      name={anime.poster}
                    >
                      Add watch list
                    </Button>
                  )}{" "}
                </figcaption>
              </figure>
            </div>
          ))}
        </Row>
      </div>
    );
  }
}

export default withAuth0(Anime);
