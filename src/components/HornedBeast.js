import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class HornedBeast extends React.Component{


    constructor(props){ // to create a state
        super(props);
        this.state={
            numberOfVotes : 0,
            // otherVariable : 0 if i wanted to add another one
        }
   }


   incrementNumOfVotes = () => {
    this.setState({
        numberOfVotes : this.state.numberOfVotes +1
    })

   }


    render(){
        return(
    //         <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={this.props.imgageUrl} onClick={this.incrementNumOfVotes}/>
    //   <Card.Body>
    //     <Card.Title>{this.props.title}</Card.Title>
    //     <Card.Text>
    //     🦄Number of votes: {this.state.numberOfVotes}
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
      <Col>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
    }
}
export default HornedBeast;