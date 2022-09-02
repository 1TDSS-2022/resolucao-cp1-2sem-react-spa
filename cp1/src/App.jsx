import React from "react";
import { useState } from "react";
import MediaAluno from "./components/MediaAluno";

export default function App(){

    const[aluno, setAluno] = useState({
        nome: "Joaquim",
        rm: 99999,
        turma: "1TDSZ"
    })

        const nota1 = 10
        const nota2 = 3
        const nota3 = 7

    return(
        <>
            <h1>CP1 de RWP 2°Semestre</h1>
            <MediaAluno
                aluno={aluno}
                nota1={nota1}
                nota2={nota2}
                nota3={nota3}

            />
        </>
    )
}
