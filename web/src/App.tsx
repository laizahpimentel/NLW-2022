interface ButtonProps {
  text: string;
}

function Button (props: ButtonProps) {
return <button>{props.text}</button>
  // console.log (props.text)
}

function App() {
  return (
    <div>
      <Button text="Enviar" />
      <Button text="ok" /> 
    </div>
  )
}

export default App
