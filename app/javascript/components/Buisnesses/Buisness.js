import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
`

const BuisnessName = styled.div`
  padding: 20px 0 10 px 0;
`

const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height:50px;

  a {
    color: #fff;
    background-color: #000;
    border-radius: 4px;
    padding: 10px 50px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #71b406;
    text-align: center;
    line-height: 20px;
    min-height: 40px;
    margin: 7px;
    font-weight: 600;
    text-decoration: none;
    width: 100%;
    transition: ease-in-out 0.1s;

    &:hover{
      border-color: #000;
      background: #001001;
    }
}
`

const Buisness = (props) => {
  return (
    <Card>
      <div className="buisness-logo"><img src={props.attributes.buisness_image} alt={props.attributes.name}/></div>
      <BuisnessName>{props.attributes.name}</BuisnessName>
      <div className="buisness-score">{props.attributes.average_score}</div>
      <LinkWrapper>
        <Link to={`/buisnesses/${props.attributes.slug}`}>View</Link>
      </LinkWrapper>
    </Card>
  )
}

export default Buisness