import React from "react";
import HornedBeast from "./HornedBeast";
import Data from "./Data";
import Row from 'react-bootstrap/Row';




let getData= Data.map(element =>
    <HornedBeast key={element._id} title={element.title} img={element.image_Url} description={element.description}/>
    );





class Main extends React.Component {
    render(){
        return(
            <Row xs={1} md={2} className="g-4">
           {getData}
            </Row>
            // <HornedBeast/>
        )
    }
}
export default Main;