import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super();
        this.state = {
            tasks: [
                {id:1, task:"Revise Js"}, 
                {id:2, task:"Revise DSA Level-1"},
            ],

            curTask:""
        };
    }

    handleChange = (e)=>{
        console.log(e.target.value);
        this.setState({
            curTask: e.target.value
        })
    }

    handleSubmit = ()=>{
        this.setState({
            tasks: [...this.state.tasks, {task:this.state.curTask, id:this.state.tasks.length+1}]
        })
    }

    handelDelete = (id) =>{
        let narr = [];
        narr = this.state.tasks.filter((taskObj)=>{
            return taskObj.id != id;
        })

        this.setState({
            tasks: [...narr]
        })
    }

  render() {
    //console.log("render method call");
    return (//jsx start
      //<h1>Todo</h1>
      <div>
        <input type="text" value={this.state.curTask} onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}>Submit</button>
        {//use when need to write JS in jsx
            this.state.tasks.map((taskObj) =>{
                return(
                    <li key={taskObj.id}>
                        <p>{taskObj.task}</p>
                        <button onClick={()=>{this.handelDelete(taskObj.id)}}>Delete</button>
                    </li>
                )
            })
        }
      </div>
    )
  }
}
 