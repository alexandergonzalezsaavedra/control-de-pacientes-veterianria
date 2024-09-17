import PatienLists from "./components/PatienLists"
import PatientForm from "./components/PatientForm"

function App() {
  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-bold text-4xl md:w-2/3 md:mx-auto text-center">
          Seguimiento de pacientes <span className="text-indigo-600">veterinaria</span>
        </h1>
        <div className="mt-12 md:flex">
          <PatientForm />
          <PatienLists />
        </div>
      </div>
    </>
  )
}
export default App