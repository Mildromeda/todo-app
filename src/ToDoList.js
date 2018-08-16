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

    handleChange(input){  {/* you can name input argument anything. On line 32, e.target.value passes into input argument */}
        this.setState({userInput:input});
    }
    addToList(input){ {/* this.state.userInput passes into input argument */}
        let newList=this.state.list; {/* Creates a new array newList */}
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


/* Using index in line 37 eliminates the key error in dev tools. Works fine even without it.*/