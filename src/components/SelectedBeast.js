import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';






class SelectedBest extends React.Component {
    render(){
        return(
            <Modal show={this.props.showModal} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.props.selBeast.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={this.props.selBeast.image_url} alt={this.props.selBeast.title} style={{width:'400px'}}/>
              <p>{this.props.selBeast.description}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal> 
        )
    }
}
export default SelectedBest;