import "./App.css"

import { PatientsOld } from "./features/patients/Patients"

const App = () => {
  return (
    <div className="container">
      <header className="App-header">
        {/* <Patients /> */}
        <PatientsOld />
      </header>
    </div>
  )
}

export default App
