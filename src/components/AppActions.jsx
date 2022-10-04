import React from "react";

export default function VoteAction({leaveVote}) {
    return (

        
        <div>
          <h2>Please leave feedback</h2>
  <div>
          <button onClick={() => leaveVote("good")}>Good</button>
  </div>
  <div>
          <button onClick={() => leaveVote("neutral")}>Neutral</button>
  </div>
  <div>
          <button onClick={() => leaveVote("bad")}>Bad</button>
  </div>
        
</div>
    )
}