import React from 'react'
import { useState } from 'react'
export default function App(){

   // const objAluno = {
   //     nome: "Wesley",
   //     rm: 94412,
    //    turma: "1TDSS"
   // }
    
    
    const[aluno,setAluno] = useState({
        nome: "Wesley",
        rm: 94412,
        turma:"1TDSS"
    })
    
    const nota1 = 6
    const nota2 = 8
    const nota3 = 9


    return(
        <>
            <h1>CP2 de RWD 2º Semestre</h1>
        </>
    )
}