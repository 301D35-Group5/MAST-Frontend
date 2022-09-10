import React from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Button, Form, FormSelect } from "react-bootstrap";

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

      .catch((err) => {
        
      });


    
  }
  showGenre = (e) => {
    e.preventDefault();
    axios
        .get(`http://localhost:3001/animegenre?genre=${this.state.genre}`)
        .then((res) => {
            console.log(this.state.genre);
            this.setState({ anime: res.data });
        })
        .catch((err) => {

        });
    }


  render() {
    return (
      <>
      
      <Form onSubmit={this.showGenre}>
            <FormSelect onChange={(e) => this.setState({genre: e.target.value})}>
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
            <Button type="submit">Submit</Button>
            </Form>
            <Form onSubmit={this.showBest}>
      <button onClick={() => this.setState({filter: "watched"})}>Most Watched</button>
        <button onClick={() => this.setState({filter: "voted"})}>Highest Voted</button>
        <h2>The Animeaaaa</h2>
        <br></br>

        <br></br>
        <br></br>

         <Row xs={1} md={4} className="g-4">
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
        </Row>
        
        </Form>

        
            
        <h2>The Animeaaaa</h2>
         <Row xs={1} md={4} className="g-4">
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
        </Row>
        
        


      </>
    );
  }
}

export default Anime;
