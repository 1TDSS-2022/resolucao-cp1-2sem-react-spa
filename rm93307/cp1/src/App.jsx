import React, { useState, useEffect } from 'react'

export default function App(){

    const [aluno, setAluno] = useState({
        nome : 'Joaquim',
        rm : 99999,
        turma : '1TDSS'
    })

    const nota1 = 5
    const nota2 = 10
    const nota3 = 2

    return(
        <>
            <h1>CP1 de RWD 2° SEMESTRE</h1>
        </>
    )
}