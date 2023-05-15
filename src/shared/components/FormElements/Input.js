import React, { useReducer } from "react"

import "./Input.css"

const Input = props => {
  // This ...
  // const [enteredValue, setEnteredValue] = useState('')
  // const [isValidValue, setIsValidValue] = useState(false)

  // Or This ...
  useReducer()

  const changeHandler = event => {}

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        onChange={changeHandler}
        placeholder={props.placeholder}
      />
    ) : (
      <textarea id={props.id} rows={props.rows || 3} onChange={changeHandler} />
    )

  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  )
}

export default Input
