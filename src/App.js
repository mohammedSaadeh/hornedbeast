import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Data from "./components/Data";
import SelectedBest from "./components/SelectedBeast";

class App extends React.Component {

  constructor(props){ // to create a state
    super(props);
    this.state={
        selBeast : {},
        show : false
        // otherVariable : 0 if i wanted to add another one
    }
}

modalFunction=(title)=>{
  let clikedBeast=Data.find(beast=> beast.title===title);
  this.setState({
    show:true,
   selBeast : clikedBeast
  })
}


handleClose=()=>{
  this.setState({
    show:false
  })
}


render() {
  return (
  <div>
    <Header/>
    <Main modalFunction={this.modalFunction}/>
    <Footer/>
    <SelectedBest showModal={this.state.show} handleClose={this.handleClose} selBeast={this.state.selBeast}/>
  </div>
  )
}
}
export default App;