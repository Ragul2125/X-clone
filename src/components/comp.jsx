import React from 'react'

const comp = ({data}) => {
    console.log(data);
    return (
      <div className="link">
        <img src={data.image} alt="home" />
        <p>{data.text}</p>
      </div>
    );
}

export default comp
