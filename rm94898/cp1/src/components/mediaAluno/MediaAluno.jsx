import React from "react"
import './MediaAluno.scss'

export default function MediaAluno(props) {




    const calculaMedia = () => {
        let media = ((props.nota1 + props.nota2 + props.nota3) / 3)

        if (media <= 0) {

            return <><strong>MÉDIA : </strong> <span style={{ color: "#FF0000" }}>{media.toFixed(2)}</span></>

        } else if (media > 0 && media < 6) {

            return <><strong>MÉDIA : </strong> <span style={{ color: "#FFA500" }}>{media.toFixed(2)}</span></>

        } else if (media >= 6) {

            return <><strong>MÉDIA : </strong> <span style={{ color: "#00FF00" }}>{media.toFixed(2)}</span></>

        }

    }

    return (
        <div>
            <h2>COMPONENTE MÉDIA-ALUNO</h2>
            <div className="row">
                <p className="col-med"><strong>Aluno : </strong> {props.aluno.nome}</p>
                <p className="col-med"><strong>RM : </strong> {props.aluno.rm}</p>
                <p className="col-med"><strong>Turma : </strong> {props.aluno.turma}</p>
                <p className="pMedia">{calculaMedia()}</p>
            </div>
        </div>
    )
}



// let media = 0
// const objEstilo = {
//     color: "#000000",
//     fontSize: "2rem"
// }

// const calculaMedia = () => {
//     media = ((props.nota1 + props.nota2 + props.nota3) / 3)
//     if (media <= 0) {
//         objEstilo.color = "#FF0000"
//         return objEstilo
//     } else if (media > 0 && media < 6) {
//         objEstilo.color = "#FFA500"
//         return objEstilo
//     } else if (media >= 6) {
//         objEstilo.color = "#00FF00"
//         return objEstilo
//     }

// }



// 4 – No componente MediaAluno deve ser realizada através de uma função a média das
// notas recebidas. De acordo com o resultado deve ser impresso o seguinte: ( 3 Pontos)
// a) Se a média for igual a zero a nota deve ser apresentada com a cor vermelha.
// b) Se a média for maior que zero e menor que 6 a nota deve ser apresentada com a cor
// laranja.
// c) Se a média for igual ou maior que 6 a nota deve ser apresentada com a cor verde.