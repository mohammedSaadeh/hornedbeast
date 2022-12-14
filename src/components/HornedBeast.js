import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';


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
    this.props.modalFunction(this.props.title);

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
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Img variant="top" src={this.props.img} onClick={this.incrementNumOfVotes} />
            <Card.Text>
            🦄Number of votes: {this.state.numberOfVotes}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
    }
}
export default HornedBeast;