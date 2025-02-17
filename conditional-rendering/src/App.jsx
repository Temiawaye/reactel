import UserGreeting from "./UserGreeting.jsx"

// Conditional rendering = allows you to control what gets rendered in your appllication based on certain conditions
//                          (show, hide, or change components)

function App() {

  return (
    <>
      <UserGreeting isLoggedIn={true} username="broke"/>
    </>
  )
}

export default App
