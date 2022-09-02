import React from 'react'
import { useState } from 'react'
import MediaAluno from './components/mediaAluno/MediaAluno'

export default function App() {

    const[aluno,setAluno] = useState(objAluno)

    const objAluno = {
        nome: "Joaquim",
        rm: 99999,
        turma: "1TDSZ"

    }

    const nota1 = 7
    const nota2 = 8
    const nota3 = 10

    return (
        <>
            <h1>CP1</h1>
            <MediaAluno
                aluno={aluno}
                nota1={nota1}
                nota2={nota2}
                nota3={nota3}
            />
        </>
    )
}