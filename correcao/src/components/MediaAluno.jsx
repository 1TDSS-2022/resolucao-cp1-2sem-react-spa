import React from "react";





export default function MediaAluno(props){

    const objColor={
        color:"#000000"
    }
    let media =0
    const calulaMedia=()=>{
         media = ((props.nota1+props.nota2+props.nota3)/3)

        if (media<=0){
            objColor.color="#FF0000"
            return objColor
        }else if (media> 0 && media < 6){
            objColor.color="FFA500"
            return objColor
        }else{
            objColor.color="#00FF00"
            return objColor
        }

    }



    return(
        <>

        <div>
        <p>Aluno:{props.objAluno.Nome}</p>
        <p>RM:{props.objAluno.RM}</p>
        <p>Turma:{props.objAluno.Turma}</p>
        <p>Media: <span style={calulaMedia()}>{media}</span> </p>
        </div>
        




        </>
    )
}