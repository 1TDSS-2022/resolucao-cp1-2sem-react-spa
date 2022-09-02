const MediaAluno = (props) => {
    const estilo = {
        color: "#000",
        fontSize: "2rem"
    }
    let media = 0
    const calcularMedia = () => {
        media = ((props.nota1 + props.nota2 + props.nota3) / 3)
        if (media <= 0) {
            estilo.color = "#f00"
            return estilo
        } else if (media > 0 && media < 6) {
            estilo.color = "#ffA500"
            return estilo
        } else if (media >= 6) {
            estilo.color = "#0F0"
            return estilo
        }

    }

    return (
        <>
            <h2>Compomente MediaAluno</h2>
            <div>
                <p><strong>Aluno: {props.aluno.nome}</strong></p>
                <p><strong>RM: {props.aluno.rm}</strong></p>
                <p><strong>TURMA: {props.aluno.turma}</strong></p>
                <p><strong>Média: </strong> <span style={calcularMedia()}>{media}</span></p>
            </div>
        </>
    )

}
export default MediaAluno