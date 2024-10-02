import "./App.css"

import { Patients, PatientsOld } from "./features/patients/Patients"

const App = () => {
  return (
    <div className="container">
      <header className="App-header">
      <PatientsOld />

        <br></br>
        <br></br>
        <br></br>
        <Patients />
      </header>
    </div>
  )
}

export default App
