import logo from '../../img/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    font-size: 2rem;
`
const LogoImg = styled.img `
    margin-right: 10px;

`

function Logo ()  {
    return (
        <LogoContainer>
            <LogoImg
                src={logo} 
                alt='logo' 
                className='logo__img'
            />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo;
