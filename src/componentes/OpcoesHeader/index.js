
import styled from 'styled-components';
const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE',];

const Opcoes = styled.ul`
    display: flex;
`
const OpcoesItem = styled.li`
    min-width: 120px;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding:  0 5px;
    cursor: pointer;
`

function OpcoesHeader () {
    return (
        <Opcoes className='opcoes'>
            { textoOpcoes.map((texto) => (
            <OpcoesItem><p>{texto}</p></OpcoesItem>
            )) }
      </Opcoes>

    )
}

export default OpcoesHeader

