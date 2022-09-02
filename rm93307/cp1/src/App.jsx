import React, { useState, useEffect } from 'react'
import MediaAluno from './components/mediaAluno/MediaAluno'

export default function App(){

    const [aluno, setAluno] = useState({
        nome : 'Joaquim',
        rm : 99999,
        turma : '1TDSS'
    })

    const nota1 = 10
    const nota2 = 3
    const nota3 = 5

    return(
        <>
            <h1>CP1 de RWD 2° SEMESTRE</h1>
            <MediaAluno
                aluno = {aluno}
                nota1 = {nota1}
                nota2 = {nota2}
                nota3 = {nota3}
            />
        </>
    )
}