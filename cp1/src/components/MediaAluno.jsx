import React from "react";

export default function MediaAluno(props){

    // const objEstilo = {
    //     color: "#000000"
    //     fontSize: "2rem"
    // }

    // let media = 0

    const calculaMedia = () => {
        
        let media = ((props.nota1 + props.nota2 + props.nota3) / 3)

        if(media <= 0) {

            return <><strong>MÉDIA: </strong><span style={{color: "#FF0000"}}>{media}</span></>

        } else if (media> 0 && media < 6) {
            
            return <><strong>MÉDIA: </strong><span style={{color: "FFA500"}}>{media}</span></>

        }  else if (media >= 6) {

            return <><strong>MÉDIA: </strong><span style={{color: "#00FF00"}}>{media}</span></>
        }
        

    }

    return(
        <div>
            <h2>COMPONENTE MÈDIA-ALUNO</h2>
            <div>
                <p><strong>Nome: </strong>{props.aluno.nome}</p>
                <p><strong>RM: </strong>{props.aluno.rm}</p>
                <p><strong>Turma: </strong>{props.aluno.turma}</p>
                <p>{calculaMedia()}</p>
            </div>
        </div>
    );
}