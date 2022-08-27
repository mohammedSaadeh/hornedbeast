import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Data from "./components/Data";
import SelectedBest from "./components/SelectedBeast";
// import Form from "./components/Form";
// import Form2 from "./components/Form2";
import Form3 from "./components/Form3";


class App extends React.Component {

  constructor(props){ // to create a state
    super(props);
    this.state={
        selBeast : {},
        show : false,
        horns: "",
        // title: "",
        // image_url: "",
        // description: "",
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

hornNums = (e) => {
  this.setState({
      horns : e.target.value,
  })
}


render() {
  return (
  <div>
    <Header/>
    {/* <Form/> */}
    {/* <Form2/> */}
    <Form3  hornNums={this.hornNums}/>
    <Main modalFunction={this.modalFunction}  hornNums={this.state}/>
    <Footer/>
    <SelectedBest showModal={this.state.show} handleClose={this.handleClose} selBeast={this.state.selBeast}/>
  </div>
  )
}
}
export default App;