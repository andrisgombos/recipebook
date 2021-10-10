import React from 'react';
import { HeaderBar, HeaderContainer, HeaderButton } from './style';


const Header = () => {

    return (

        <HeaderBar>
            <HeaderContainer>
                <HeaderButton>Home</HeaderButton>
                <HeaderButton>Search</HeaderButton>
                <HeaderButton>Add recipe</HeaderButton>
            </HeaderContainer>
            <HeaderContainer>
                <HeaderButton>Login</HeaderButton>
            </HeaderContainer>
        </HeaderBar>

    )

}

export default Header;