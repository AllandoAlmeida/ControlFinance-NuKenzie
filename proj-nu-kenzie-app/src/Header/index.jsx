import logo from '../assets/logo.svg';

import { StyledHeader, StyledHeaderDiv} from './Header.js';
import { StyledContainer } from '../styles/container';


export const Header = () => {
    return (
        <StyledHeader>
            <StyledContainer>
            <StyledHeaderDiv>
                <img src={logo} alt="Logo Nu Kenzie" />
            </StyledHeaderDiv>
            </StyledContainer>
        </StyledHeader>

    )
}