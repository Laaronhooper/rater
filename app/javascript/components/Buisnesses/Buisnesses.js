// import { useEffect, useState } from "react"
import React, { useState, useEffect, Fragment } from "react"
import axios from 'axios'
import Buisness from "./Buisness"
import styled from 'styled-components'

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

`
const Header = styled.div`
padding: 100px 100xp 10px 100px;

h1 {
  font-size: 42px;
}
`

const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  padding: 20px;
`

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
    <Home>
      <Header>
        <h1>Buisness Reviews</h1>
        <Subheader>Reviews for buisnesses far and wide</Subheader>
      </Header>
      <Grid>
        {grid}
      </Grid>
    </Home>
  )
}

export default Buisnesses