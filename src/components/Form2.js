import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import {Form,Button} from 'react-bootstrap';

class Form2 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userName:'',
            userActivity:'',
            likeIceCream:'',
            kindOfPerson:''
        }
    }

    subFun=(e)=>{
        e.preventDefault();
        this.setState({
            userName:e.target.name.value,
            userActivity:e.target.activity.value,
            likeIceCream:e.target.likeIceCream.checked,
            kindOfPerson:e.target.typeOfPerson.value,
        })
    }


  render() {
    return (
      <>
        <Form onSubmit={this.subFun}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" id="name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Your f act</Form.Label>
            <Form.Control type="text" placeholder="activity" id="activity" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Do u like ic" id="likeIceCream"/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="typeOfPerson">
              What type of person u r?
            </Form.Label>
            <Form.Select id="typeOfPerson">
              <option value="cat">Cat person</option>
              <option value="dog">Dog person</option>
              <option value="none">Dont like</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
export default Form2;
