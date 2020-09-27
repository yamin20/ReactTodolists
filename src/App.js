import React from 'react';
import './App.css';
import List from "./components/List";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      result: '',
      num1: 0,
      num2: 0,
      data: [],
    };
  }

  updateText1 = (e) => {
    this.setState({ num1: e.target.value });
  };
  updateText2 = (e) => {
    this.setState({ num2: e.target.value});
  };

  addAction=()=>{
    this.setState({result: parseInt(this.state.num1) + parseInt(this.state.num2) })
   }
  
   addToList = () =>{
     if(this.state.result === ''){
       return;
     }
     const data = [this.state.result,...this.state.data];
     this.setState({ data: data,num1:0,num2:0, result: ""});
   };

   removeList = (index) =>{
    const data = this.state.data.filter((v,i)=> i !== index);
    this.setState({data});
   }
  render(){
    return (
      <div className="root">
        <div className="inputWrapper">
          <input type="number" onChange={this.updateText1} value={this.state.num1}></input>
          <p disabled>+</p>
          <input type="number" onChange={this.updateText2} value={this.state.num2}></input>
          <button onClick={this.addAction}>=</button>
          <input type="number" value={this.state.result} readOnly value={this.state.result}></input>
        </div>
        <button onClick={this.addToList}>Add To List</button><br></br><br></br>

        {
          this.state.data.map((v,i)=>(
          <List title={v} key={i} remove={()=>this.removeList(i)}></List>
          ))}
      </div>
    );
  }
}

export default App;
