import { Component } from "react";
import VoteResult from "./AppResult";
import VoteAction from "./AppActions";



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

  countTotal() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  procentage(propertyName) {
    const total = this.countTotal();
    if (!total) {
      return 0;
    }
    const value = this.state[propertyName];
    const result = (value / total) * 100;
    return Number(result.toFixed(2))
  }

  render() {
    const { good, neutral, bad } = this.state
    const total = this.countTotal();
    const procent = this.procentage("good")
    return (<>
      <VoteAction leaveVote={this.leaveVote} />
      {!total ?  <div> <h2>There is no feedback</h2></div> : <VoteResult procent={procent} total={total} good={good}
        neutral={neutral}
      bad={bad}/>}
      
    </>
    );
}
 
  };