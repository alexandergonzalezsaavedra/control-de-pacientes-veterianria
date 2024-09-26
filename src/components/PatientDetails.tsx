import { toast } from "react-toastify"
import { usePatienteStore } from "../store/store"
import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
type PatientDetailsProps = {
    patient: Patient
}
const PatientDetails = ({ patient }: PatientDetailsProps) => {
    const deletePacient = usePatienteStore((state) => state.deletePacient)
    const getPatientById = usePatienteStore((state) => state.getPatientById)
    const handleClick = () => {
        deletePacient(patient.id)
        toast('Paciente eliminado', {
            type: 'error'
        })
    }
    return (
        <div className="mx-5 mt-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PatientDetailItem
                label="ID"
                data={patient.id}
            />
            <PatientDetailItem
                label="Nombre"
                data={patient.name}
            />
            <PatientDetailItem
                label="Propietario"
                data={patient.caretaker}
            />
            <PatientDetailItem
                label="Email"
                data={patient.email}
            />
            <PatientDetailItem
                label="Fecha alta"
                data={patient.date.toString()}
            />
            <PatientDetailItem
                label="Sintomas"
                data={patient.symptoms}
            />
            <div className="flex flex-col gap-3 md:flex-row justify-between mt-10">
                <button
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 hover:shadow-sm text-white rounded-lg duration-1000"
                    type="button"
                    onClick={() => getPatientById(patient.id)}
                >
                    Editar
                </button>
                <button
                    className="py-2 px-10 bg-red-600 hover:bg-red-800 hover:shadow-sm text-white rounded-lg duration-1000"
                    type="button"
                    onClick={handleClick}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}
export default PatientDetails