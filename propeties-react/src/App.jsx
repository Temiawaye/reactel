import Student from "./student"


// props = read-only properties that are shared between components.
//         A parent component can send data to a chld component.
//         <component key=value />

function App() {
  return(
    <>
      <Student name="Temi" age={30} isStudent= {true}/>
      <Student name="Joy" age={42} isStudent= {false}/>
      <Student name="IFe" age={50} isStudent= {false}/>
      <Student name="LOL" age={27} isStudent= {true}/>
      <Student name="Big L" age={18} isStudent={true}/>
    </>
  )
}

export default App
