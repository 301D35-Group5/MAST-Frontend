import React from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import { withAuth0 } from "@auth0/auth0-react";
import { Button, Form, FormSelect } from "react-bootstrap";
import "./Anime.css";
class TV extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showData: [],
      genre: "all",
      filter: "watched",
      date: "2000s",
    };
  }
  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER}BestShows?filter=voted`)
      .then((res) => {
        console.log(this.state.filter);

        this.setState({ showData: res.data });
      })

      .catch((err) => {});
  };

  showGenre = (e) => {
    e.preventDefault();

    axios
      .get(
        `${process.env.REACT_APP_SERVER}Shows?genre=${this.state.genre}&year=${this.state.date}`
      )
      .then((res) => {
        this.setState({ showData: res.data });
      })
      .catch((err) => {});
  };
  showBest = (e) => {
    e.preventDefault();

    axios
      .get(
        `${process.env.REACT_APP_SERVER}BestShows?filter=${this.state.filter}`
      )
      .then((res) => {
        console.log(this.state.filter);

        this.setState({ showData: res.data });
      })

      .catch((err) => {});
  };

  //here add watchList:
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
        <div className="please">
          <Form className="SeriesWatchedForm" onSubmit={this.showBest}>
            <button className="watchedBtnSeries" onClick={() => this.setState({ filter: "watched" })}>
              Most Watched
            </button>
            <button className="watchedBtnSeries" onClick={() => this.setState({ filter: "voted" })}>
              Highest Voted
            </button>
          </Form>
          <Form onSubmit={this.showGenre} className='genreForm'>
            <div className="seriesForm">
              <FormSelect className="formOptions"
                onChange={(e) => this.setState({ genre: e.target.value })}
              >
                <option value="Action" style={{color:"#30475E"}}>Action</option>
                <option value="Adventure" style={{color:"#30475E"}}>Adventure</option>
                <option value="Comedy" style={{color:"#30475E"}}>Comedy</option>
                <option value="Drama" style={{color:"#30475E"}}>Drama</option>
                <option value="Fantasy" style={{color:"#30475E"}}>Fantasy</option>
                <option value="Horror" style={{color:"#30475E"}}>Horror</option>
                <option value="Mystery" style={{color:"#30475E"}}>Mystery</option>
                <option value="Romance" style={{color:"#30475E"}}>Romance</option>
                <option value="Sci-Fi" style={{color:"#30475E"}}>Sci-Fi</option>
                <option value="Thriller" style={{color:"#30475E"}}>Thriller</option>
              </FormSelect>
              <FormSelect className="formOptions" onChange={(e) => this.setState({ date: e.target.value })}>
                <option value="2000s" style={{color:"#30475E"}}>2000s</option>
                <option value="2010s" style={{color:"#30475E"}}>2010s</option>

              </FormSelect>
            </div>
            <Button type="submit" className="submitButton" variant="danger">Submit </Button> 
          </Form>
        </div>
        <br></br>
        <Row xs={1} md={4} className="g-4">
          {this.state.showData.map((item) => (
            <div class="cards" style={{ textAlign: "center" }}>
              <figure class="card">
                <img src={item.poster} alt="poster" />

                <figcaption>
                  <p>{item.title}</p> <p>Rating: {item.rating}</p>{" "}
                  {isAuthenticated && (
                    <Button
                    variant="danger"
                      onClick={this.addProf}
                      className="submitButton"
                      title={item.title}
                      name={item.poster}
                    >
                      Add watch list
                    </Button>
                  )}
                </figcaption>
              </figure>
            </div>
          ))}
        </Row>
       
        <br></br> <br></br>
      </div>
    );
  }
}

export default withAuth0(TV);
