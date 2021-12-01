// import { useEffect, useState } from "react"
import React, { useState, useEffect, Fragment } from "react"
import axios from 'axios'
import Buisness from "./Buisness"
import styled from 'styled-components'



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

const grid = buisnesses.map( item => {
  return (
    <Buisness 
      key={item.attributes.name}
      attributes={item.attributes}
      />
      )
})

  return (
    <div className="home">
      <div className="header">
        <h1>Buisness Reviews</h1>
        <div className="subHeader">Reviews for buisnesses far and wide</div>
        <div className="grid"> 
          <ul>{grid}</ul>
        </div>
      </div>
    </div>
  )
}

export default Buisnesses