import React, { Component } from 'react'

export default class ToDoList extends Component {
    constructor(props){
        super(props);
        this.state={
            userInput:'',
            list:[]
        }
        this.handleChange = this.handleChange.bind(this);
        this.addToList = this.addToList.bind(this);
    }

    handleChange(input){  
        this.setState({userInput:input});
    }
    addToList(input){ 
        let newList=this.state.list; 
        newList.push(input);
        this.setState({
            list:newList,
            userInput:''
        })
        
    }
    
  render() {
    return (
      <div className="to-do-list-main">
        <input
        value={this.state.userInput}
        onChange={(e)=>this.handleChange(e.target.value)}
        type="text"
        />
        <button onClick={()=>this.addToList(this.state.userInput)}>Add Items</button>
        <ul>
            {this.state.list.map((val,index)=><li key={index}>{val}</li>)}
            </ul>    
      </div>
    )
  }
}
