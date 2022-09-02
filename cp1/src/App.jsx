import React from "react";
import { useState } from "react";
import mediaAluno from "./components/mediaAluno/mediaAluno";


export default function App() {

    const[objAluno] = {
        nome: "Joaquim",
        rm: 9999,
        turma: "1TDSS"
    }

    const[aluno, setAluno] = useState()
    setAluno(objAluno)

    const nota1 = 6
    const nota2 = 10
    const nota3 = 9

    return(
        <>
            <h1>CP1 de RWD 2º Semestre</h1>
            <mediaAluno
                aluno={aluno}
                nota1={nota1}
                nota2={nota2}
                nota3={nota3}
            />
        </>
    )
}