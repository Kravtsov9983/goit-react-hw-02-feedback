import { Component } from "react";


export default class Vote extends Component  {
 
state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  leaveVote = (propertyName) => {
    this.setState((prevState) => {
      const value = prevState[propertyName];
      return {
        [propertyName]: value + 1
      }
      
    })
  }

  render() {
    const{ good, neutral, bad} = this.state
     return (<>
      
<div>
          <h2>Please leave feedback</h2>
  <div>
          <button onClick={() => this.leaveVote("good")}>Good</button>
  </div>
  <div>
          <button onClick={() => this.leaveVote("neutral")}>Neutral</button>
  </div>
  <div>
          <button onClick={() => this.leaveVote("bad")}>Bad</button>
  </div>
        
</div>
      <div>
        <h2>Statistics</h2>
        <ul>
           <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
           <li>Bad:{bad}</li>
           <li>Total:{good + neutral + bad}</li>
          <li>Positive feedback:{good / (good + neutral + bad) *100}%</li>
        </ul>
      </div>
    </>
    );
}
 
  };