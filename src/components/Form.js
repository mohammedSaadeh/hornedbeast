import React from "react";


class Form extends React.Component {

    constructor(props){
        super(props);
        this.state={
            userStory:"",
        };
    }

    theSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target.textInput.value)
    }

    changeHandler=(e)=>{
        console.log(e.target.value)
        this.setState({
            userStory:e.target.value
        })
    }
    
    render(){
        return(
            <>
            <form onSubmit={this.theSubmit}>
                {/* <label for="textInput">Select</label> */}
                <input type="text" id="textInput" placeholder="Click here"></input>
                <label for="userStory">Enter data</label>
                <input type="text" 
                id="userStory" 
                placeholder="write"
                onChange={this.changeHandler}
                />
                <input type="submit"></input> 
            </form>
            <p>{this.state.userStory}</p>
            </>
        )
    }
}
export default Form;
//<button></button> instead of <input type="submit"></input>