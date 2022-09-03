import React from 'react'
import { useState } from 'react'
import MediaAluno from './components/MediaAluno/MediaAluno'
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
            <MediaAluno
            nomeProps = {nome}
            rmProps = {rm}
            turmaProps = {turma}
            nota1Props = {nota1}
            nota2Props = {nota2}
            nota3Props = {nota3}
            

            />
        </>
    )
}