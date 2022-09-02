import React from 'react'

export default function MediaAluno(props) {

    const calculaMedia = () => {
        let media = ((props.nota1 + props.nota2 + props.nota3) / 3)

        if(media <= 0){
            return <><strong>Média: </strong><span style= {{color: "red"}}>{media}</span></>
        } else if (media > 0 && media < 0) {
            return <><strong>Média: </strong><span style= {{color: "orange"}}>{media}</span></>
        } else if (media >= 0) {
            return <><strong>Média: </strong><span style= {{color: "green"}}>{media}</span></>
    }

    return(
        <div>
            <h2>Componente média</h2>
            <div>
            <p><strong>Aluno: </strong> {props.aluno.nome}</p>
            <p><strong>RM: </strong>{props.aluno.rm}</p>
            <p><strong>Turma: </strong>{props.aluno.turma}</p>
            <p>{calculaMedia()}</p>
            </div>
        </div>
        )
    }
}