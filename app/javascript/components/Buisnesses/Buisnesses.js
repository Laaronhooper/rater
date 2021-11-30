// import { useEffect, useState } from "react"
import React, { useState, useEffect, Fragment } from "react"
import axios from 'axios'

const Buisnesses = () => {
  const [buisnesses, setBuisnesses] = useState([])

  useEffect(()=> {
    //get all buisnesses from api
    //update buisnesses
    axios.get('api/v1/buisnesses.json')
    .then(resp => {
      setBuisnesses(resp.data.data)
    })
    .catch(resp => console.log(resp))
  }, [buisnesses.length])

const list = buisnesses.map( item => {
  return (<li key={item.attributes.name}>{item.attributes.name}</li>)
})

  return (
    <div className="home">
      <div className="header">
        <h1>Buisness Reviews</h1>
        <div className="subHeader">Reviews for buisnesses far and wide</div>
        <div className="grid"> 
          <ul>{list}</ul>
        </div>
      </div>
    </div>
  )
}

export default Buisnesses