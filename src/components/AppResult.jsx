import React from "react";

export default function VoteAction({good, neutral, bad, total, procent }) {
    return (

        
        <div>
        <h2>Statistics</h2>
        <ul>
           <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
           <li>Bad:{bad}</li>
           <li>Total:{total}</li>
          <li>Positive feedback:{procent}%</li>
        </ul>
      </div>
    )
}