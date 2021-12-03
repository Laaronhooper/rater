import React, {Fragment} from "react"

const ReviewForm = (props) => {
  const ratingOptions = [5,4,3,2,1].map((score, index) => {
    return (
    <Fragment>
      <input type="radio" value={score} name="rating" onChange={() => console.log('selected:', score)} id={`rating-${score}`}/>
      <label></label>
    </Fragment>
    )
  })
  return (
    <div className="wrapper">
      <form onSubmit={props.handleSubmit}>
        <div> Have an experience with {props.attributes.name}?</div>
        <div className="field">
          <input onChange={props.handleChange} value={props.review.title} type="text" name="title" placeholder="Review Title"/>
        </div>
        <div className="field">
          <input type="text" name="description" value={props.review.description} placeholder="Review Description"/>
        </div>
          <div className="field">
            <div className="rating-containers">
              <div className="rating-title-text"> Rate this Buisness</div>
                {ratingOptions}
            </div>
          </div>
          <button type="submit">Submit Review</button>
      </form>
    </div>
  )
}

export default ReviewForm