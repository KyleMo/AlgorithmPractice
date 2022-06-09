import React from 'react'

const Problem = ({title, details, input, expectedOutput, inputPlaceholder}) => {
  return (
    <div className="problem">
      <li className="title">{title}</li>
      <p>{details}</p>
      <p className="input">{input}</p>
      <p className="output">{expectedOutput}</p>
      <input placeholder={inputPlaceholder}></input>
      <button>Run Solution</button>
    </div>
  )
}

export default Problem;
