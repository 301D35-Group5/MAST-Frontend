import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class AddForm extends React.Component {
    render(){
        return (
          <Modal show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Update RECOMMENDATIONS</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.props.addReco}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Series name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Series name"
                    name="seriesName"
                    defaultValue={this.props.selectedReco.seriesName}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    name="description"
                    defaultValue={this.props.selectedReco.description}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Rating</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Rating"
                    name="rating"
                    defaultValue={this.props.selectedReco.rating}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Year"
                    name="year"
                    defaultValue={this.props.selectedReco.year}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.props.handleClose}>
                  ADD the RECOMMENDATIONS
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        );
    }
}
export default AddForm;