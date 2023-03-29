import { Component } from "react";

class Form extends Component{
    state ={
        firstname:"",
        lastname:"",
    };
    handleChange =(event)=>{
        console.log(this.state.firstname);
        this.setState({
            firstname:event.target.value,
        })
    };
    handlelastNameChange = (event) =>{
        this.setState({
            lastname:event.target.value,
        })
    }
    handleSubmit =(event)=>{
        event.preventDefault();
        console.log({
            fname:this.state.firstname,
            lname:this.state.lastname,
        });
    }
    render(){
        return (<div>Form
        <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type="text" value={this.state.firstname}></input>
            <input type="text" value={this.state.lastname} onChange={this.handlelastNameChange}></input>
            <button type="submit">Submit</button>
        </form>
        </div>);
    }
}

export default Form;