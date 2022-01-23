import React, { useContext } from "react";

const ColorContext = React.createContext<string | undefined>(undefined)

const MyButton = () => (
  <ColorContext.Consumer>
    {
      color => (
        <button className={`${color}`}>按钮</button>
      )
    }
  </ColorContext.Consumer>
)

const useColor = () => {
  const color = useContext(ColorContext)
  return color
}

const MyButton2 = () => {
  let color = useColor()
  return (
    <button className={`${color}`}>按钮2</button>
  )
}

export const Page = () => {
  return (
    <div>
      <MyButton></MyButton>
      <MyButton2></MyButton2>
      <ColorContext.Provider value={'red'}>
        <MyButton></MyButton>
        <MyButton2></MyButton2>
      </ColorContext.Provider>
      <ColorContext.Provider value={'blue'}>
        <MyButton></MyButton>
      </ColorContext.Provider>
    </div>
  )
}