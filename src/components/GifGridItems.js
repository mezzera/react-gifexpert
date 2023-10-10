import React from 'react'

export const GifGridItems = ({ id,title,url }) => {

  console.log(id,title,url);

  return (
    <div className="card">
      
        <p>{title}</p>
    <img src = {url} alt = {title} />
    
    </div>
  )
}


