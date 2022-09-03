import React from "react";
import './MediaAluno.css'

export default function MediaAluno(props){

    const calculaMedia = () =>{
         let media = ((props.nota1 + props.nota2 + props.nota3) / 3)
        if(media <= 0){

            return <><strong>Turma : </strong> <span style={{color : "#FF0000"}}>{props.aluno.turma}</span></>

        }else if (media > 0 && media < 6) {

            return <><strong>Turma : </strong> <span style={{color : "#FFA500"}}>{props.aluno.turma}</span></>

        }else if (media >= 6) {

            return <><strong>Turma : </strong> <span style={{color : "#00FF00"}}>{props.aluno.turma}</span></>
        }

    }

    return(
        <div>
            <h2>COMPONENTES MEDIA ALUNO</h2>
            <div className="row">
                <p className="col-med"><strong>Aluno : </strong> {props.aluno.nome} </p>
                <p className="col-med"><strong>RM : </strong> {props.aluno.rm} </p>
                <p className="col-med">{calculaMedia()}</p>
                <p>{calculaMedia()}</p>
            </div>

        </div>
    )


}