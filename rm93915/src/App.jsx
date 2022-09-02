import { useState } from "react"
import MediaAluno from "./components/MediaAluno/MediaAluno"

const App = () => {
    const objAluno = {
        nome: "Joaquim",
        rm: 99999,
        turma: "1TDSZ"
    }
    const [aluno, setAluno] = useState(objAluno)

    const n1 = 2
    const n2 = 3
    const n3 = 5

    return (
        <>
            <h1>Resolução CP1</h1>
            <MediaAluno 
                aluno = {objAluno}
                nota1 = {n1}
                nota2 = {n2}
                nota3 = {n3}
            />
        </>
    )
}
export default App