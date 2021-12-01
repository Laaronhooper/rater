import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Buisness = (props) => {
  return (
    <div className="card">
      <div className="buisness-logo"><img src={props.attributes.image_url} alt={props.attributes.name}/></div>
      <div className="buisness-name">{props.attributes.name}</div>
      <div className="buisness-score">{props.attributes.average_score}</div>
      <div className="buisness-link">
        <Link to={`/buisnesses/${props.attributes.slug}`}>View Buisness</Link>
      </div>
    </div>
  )
}

export default Buisness