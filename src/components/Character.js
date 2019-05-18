import React from 'react'

const Character = ({image, name, gender, specie, id}) => {
  return(
    <>
    <img src={image} alt="Personaje" />
      <h1>{name}</h1>
      <h2>{name}</h2>
      <h3>{name}</h3>
    </>
  )
}
