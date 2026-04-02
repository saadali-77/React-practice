import React from 'react'

export const Stundentprops = ({name,age,isStudent}) => {
  return (
    <div>Stundentprops
     <h2>{name}</h2>
     <p>Age: {age}</p>
     <p>Student:{isStudent?'yes':'no'}</p>
    </div>
  )
}
