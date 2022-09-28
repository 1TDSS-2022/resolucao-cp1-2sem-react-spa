import React from 'react'
import { useState } from 'react'

export default function App() {

    const[aluno, setAluno] = useState({
        nome: "Joaquim",
        rm: 99999,
        turma: "1TDSZ"
    })

    const nota1 = 5
    const nota2 = 0
    const nota3 = 2

    return (
        <>
            <h1>CP1 de RWD 2º semestre</h1>
        </>
    )
}