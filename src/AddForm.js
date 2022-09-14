import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import logo from './logo.png'
import './Recommendations.css';

class AddForm extends React.Component {
    render(){
        return (
          <Modal show={this.props.show} onHide={this.props.handleClose} >
          
          
            <Modal.Header  closeButton>
              <Modal.Title className="modalLabel" >Update Recommendations</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.props.addReco}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="modalLabel">Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Image URL"
                    name="img"
                    
                    defaultValue={this.props.selectedReco.img || logo.png}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="modalLabel">Series name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Series name"
                    name="seriesName"
                    defaultValue={this.props.selectedReco.seriesName}
                    maxlength = "20"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="modalLabel">Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    name="description"
                    maxlength = "150"
                    defaultValue={this.props.selectedReco.description}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="modalLabel">Rating</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Rating"
                    name="rating"
                    defaultValue={this.props.selectedReco.rating}
                    maxlength = "5"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="modalLabel">Year</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Year"
                    name="year"
                    defaultValue={this.props.selectedReco.year}
                    maxlength = "4"
                  />
                </Form.Group>
                <Button  variant="secondary"  className="watchedBtn" type="submit" onClick={this.props.handleClose}>
                  Add to the Recommendations
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        );
    }
}
export default AddForm;