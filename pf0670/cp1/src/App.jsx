import React from "react"
import { useState } from "react"
import MediaAluno from "./components/mediaAluno/MediaAluno"

export default function App() {

    // const objAluno = {
    //     nome: "Joaquim",
    //     rm: 99999,
    //     turma: "1TDSZ"
    // }

    //const [aluno, setAluno] = useState(objAluno)

    // useEffect(() => {
    //     setAluno(objAluno)
    // }, [])

    const [aluno, setAluno] = useState({
        nome: "Joaquim",
        rm: 99999,
        turma: "1TDSZ"
    })

    const nota1 = 10
    const nota2 = 3
    const nota3 = 7

    return (
        <>
            <h1>CP1 de RWD 2º SEMESTRE</h1>

            <div className="divTeste">
                ESCOPO DA DIV
                <p>
                    ESCOPO DO P
                </p>
            </div>

            <MediaAluno
                aluno={aluno}
                nota1={nota1}
                nota2={nota2}
                nota3={nota3}
            />
        </>
    )
}




// 3 – Crie um componente chamado MediaAluno. ( 3 Pontos)
// Esse componente deve receber através de props do componente App.jsx os seguintes
// dados:
// a) O objeto aluno.
// b) As três notas já com valores preenchidos de 0 a 10.


// 2 – No App.jsx crie a seguinte estrutura. ( 3 Pontos)
// a) Crie um fragmento.
// b) Um elemento h1 com o texto “CP1 de RWD 1º SEMESTRE”.
// c) Declare um useState de nome aluno que recebe um objeto do tipo aluno com os
// seguintes atributos:
// 1 – nome = Joaquim
// 2 – rm = 99999
// 3 – turma = 1TDSZ
// d) Três constantes declaradas como nota1, nota2 e nota3.