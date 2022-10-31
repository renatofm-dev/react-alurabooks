import {  livros  } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../img/livro2.png'



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
         alinhamento="center"
         >
            ÚLTIMOS LANÇAMENTOS
        </Titulo>
        <NovosLivrosContainer>
            {livros.map( livro => (
            <img src={livro.src} alt='livros'/>
            ))}
        </NovosLivrosContainer>
        <CardRecomenda 
            titulo='Talvez você se interesse por...'
            subtitulo='Angular 11'
            descricao='Construindo uma aplicação com a plataforma google'
            img={imagemLivro}
        
        />
    </UltimosLancamentosContainer>

)
}

export default UltimosLancamentos