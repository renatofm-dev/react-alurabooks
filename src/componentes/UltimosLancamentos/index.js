import {  livros  } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import { Titulo } from '../Titulo'


const UltimosLancamentosContainer = styled.section `
background-color: #EBECEE;
padding: 0px 0px 20px 0px;
display: flex;
flex-direction: column;
`

const NovosLivrosContainer = styled.div `
margin-top: 30px;
display: flex;
width: 100%;
justify-content: center;
cursor: pointer;


img:hover {
    transition-duration: 1000ms;
    transform: scale(1.2)
}
`

function UltimosLancamentos () {
return (

    <UltimosLancamentosContainer>
        <Titulo
         cor="#EB9B00"
         tamanhoFonte="2.4rem"
         alinhamento="center">
            ÚLTIMOS LANÇAMENTOS
            </Titulo>
        <NovosLivrosContainer>
            {livros.map( livro => (
            <img src={livro.src} alt='livros'/>
            ))}
        </NovosLivrosContainer>
    </UltimosLancamentosContainer>

)
}

export default UltimosLancamentos