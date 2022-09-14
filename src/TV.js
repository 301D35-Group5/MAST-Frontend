import React from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import { withAuth0 } from '@auth0/auth0-react';
import { Button, Form,FormSelect } from "react-bootstrap";
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
componentDidMount = () => {
  axios
      .get(`${process.env.REACT_APP_SERVER}BestShows?filter=voted`)
      .then((res) => {
        
        console.log(this.state.filter);

        this.setState({ showData: res.data,
          });
      })

      .catch((err) => {

      });}

  showGenre = (e) => {
    e.preventDefault();
    
    axios
      .get(`${process.env.REACT_APP_SERVER}Shows?genre=${this.state.genre}&year=${this.state.date}`)
      .then((res) => {
        
        this.setState({ showData: res.data });
      })
      .catch((err) => {

      });
  }
  showBest = (e) => {
    e.preventDefault();

    axios
      .get(`${process.env.REACT_APP_SERVER}BestShows?filter=${this.state.filter}`)
      .then((res) => {
        console.log(this.state.filter);

        this.setState({ showData: res.data });
      })

      .catch((err) => {

      });



  }



    //here add watchList:
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
        .post(`${process.env.REACT_APP_SERVER}addProf`, obj)
        .then((result) => {

        })
  
        .catch((err) => {
          console.log(err)
        })
  
    }
  



  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <div className='Body1'>

<Form className="watchedForm" onSubmit={this.showBest}>
          <button className="watchedBtn" onClick={() => this.setState({ filter: "watched" })}>
            Most Watched
          </button>
          <button className="watchedBtn" onClick={() => this.setState({ filter: "voted" })}>
            Highest Voted
          </button>
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
          </Form>
          <Form onSubmit={this.showGenre} className='genreForm'>
            <FormSelect className="formOptions" onChange={(e) => this.setState({ date: e.target.value })}>
              <option value="2000s">2000s</option>
              <option value="2010s">2010s</option>

            </FormSelect>
          <Button type="submit" className="submitButton">Submit</Button>
        </Form>
          
            
              <h2>Best Shows</h2>
              
              <Row xs={1} md={4} className="g-4">
                {this.state.showData.map((item) => (
                  <div class="cards">
                  <figure class="card">
                    <img src={item.poster} alt="poster" />
                    
    
                  <figcaption><p>{item.title}</p> <p>Rating: {item.rating}</p> {isAuthenticated && <Button onClick={this.addProf} title={item.title} name={item.poster}>Add watch list</Button>}</figcaption>
                  </figure>
                  
                </div>
                ))}
              </Row>

            
         
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
  


      </div>
    );
  }
}

export default withAuth0(TV);