import React from "react";
import HornedBeast from "./HornedBeast";
import Data from "./Data";
import Row from 'react-bootstrap/Row';






class Main extends React.Component {
    getData= Data.map(element =>
        <HornedBeast key={element._id} title={element.title} img={element.image_url} description={element.description} modalFunction={this.props.modalFunction}/>
        );
    render(){
        return(
            <Row xs={1} md={3} className="g-4">
           {this.getData}
            </Row>
            // <HornedBeast/>
        )
    }
}
export default Main;