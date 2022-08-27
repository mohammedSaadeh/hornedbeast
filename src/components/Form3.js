import React from "react";
import Form from 'react-bootstrap/Form';

class Form3 extends React.Component {
    render() {
        return (
        <>
        <Form className="mb-3">
        <Form.Label>Select Number of Hornes</Form.Label>
        <Form.Select onChange={this.props.hornNums}>
          <option>Select Number of Horns</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </Form.Select>
      </Form>
      </>
        )
    }
}

export default Form3;