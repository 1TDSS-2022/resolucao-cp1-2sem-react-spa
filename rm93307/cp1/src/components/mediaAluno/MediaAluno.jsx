import React from "react";

export default function MediaAluno(props){

    const calculaMedia = () => {
        let media = ((props.nota1 + props.nota2 + props.nota2) / 3)

        if(media <= 0){
            return <><strong>Nota1: </strong> <span style={{ color: "#FF0000" }}>{media}</span></>
        }else if(media > 0 && media < 6){
            return <><strong>Nota2: </strong> <span style={{ color: "#FFA500" }}>{media}</span></>
        }else if(media >= 6){
            return <><strong>Nota3: </strong> <span style={{ color: "#00FF00" }}>{media}</span></>
        }
    }

    return(
        <div>
            <h2>MEDIA ALUNO</h2>
            <p><strong>Aluno: </strong>{props.aluno.nome}</p>
            <p><strong>RM: </strong>{props.aluno.rm}</p>
            <p><strong>Turma: </strong>{props.aluno.turma}</p>
            <p><strong></strong>{calculaMedia()}</p>
        </div>
    )
}

// const objEstilo = {
//     color : "#000000",
//     fontSize: "2rem"
// }

// let media = 0

// const calculaMedia = () => {
//     media = ((props.nota1 + props.nota2 + props.nota2) / 3)

//     if(media <= 0){
//         objEstilo.color = "#FF0000"
//         return objEstilo
//     }else if(media > 0 && media < 6){
//         objEstilo.color = "#FFA500"
//         return objEstilo
//     }else if(media >= 6){
//         objEstilo.color = "#00FF00"
//         return objEstilo
//     }
// }