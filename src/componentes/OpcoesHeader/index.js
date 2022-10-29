import './estilo.css'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE',];

function OpcoesHeader () {
    return (
        <ul className='opcoes'>
            { textoOpcoes.map((texto) => (
            <li className='opcoes__item'><p>{texto}</p></li>
            )) }
      </ul>

    )
}

export default OpcoesHeader

