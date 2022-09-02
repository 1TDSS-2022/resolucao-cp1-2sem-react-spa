import React from "react";
import { useState } from "react";
import MediaAluno from "./components/MediaAluno";


export default function App(){
  
  const objAluno={
    Nome:"Filipe",
    RM:"93042",
    Turma:"1tdss"
  }
  const[aluno,setAluno]=useState(objAluno)
 
   const notal =0
   const nota2=0
   const nota3=0  

  return(
    <>

      <h1>CP1 correção</h1>
      <MediaAluno 
      objAluno={aluno}
      nota1={notal}
      nota2={nota2}
      nota3={nota3}
      />

    </>
  )
  
}

