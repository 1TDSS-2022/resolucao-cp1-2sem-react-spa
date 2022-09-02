import React from "react";
import { useState } from "react";


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
        </>
    )
}