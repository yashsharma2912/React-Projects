import React from 'react'

const CatCard = ({prop}) => {
  return (
    <div className="catCard">
        <h3>{prop.title}</h3>
        <h3>{prop.desc}</h3>
        <img src={prop.img} alt="" />
    </div>
  )
}

export default CatCard