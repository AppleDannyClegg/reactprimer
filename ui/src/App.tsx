import "./App.css"

import { Patients, PatientsOld } from "./features/patients/Patients"

const App = () => {
  return (
    <div className="container">
      <header className="App-header">
        <Patients />
        <br></br>
        <br></br>
        <br></br>
        <PatientsOld />
      </header>
    </div>
  )
}

export default App
