import { useState } from "react"
import "./Calculator.css"

function Calculator() {
  const [value, setValue] = useState("")

  function handleClick(val) {
    if (val === "C") {
      setValue("")
      return
    }

    if (val === "=") {
      try {
        setValue(eval(value).toString())
      } catch {
        setValue("ERROR")
      }
      return
    }

    setValue(value + val)
  }

  return (
    <div className="calculator">
      <div className="displayz">{value || "0"}</div>

      <div className="buttons">
        {["C","/","*","-","7","8","9","+","4","5","6","1","2","3","0",".","="].map(btn => (
          <button
            key={btn}
            className={btn === "=" ? "equal" : ""}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Calculator
