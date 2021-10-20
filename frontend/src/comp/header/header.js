import React from 'react';
import { HeaderBar, HeaderContainer, HeaderButton } from './style';
import {Link, useHistory} from "react-router-dom";


const Header = () => {

    return (

        <HeaderBar>
            <HeaderContainer>
                <Link to="/"><HeaderButton>Home</HeaderButton></Link>
                <Link to="/"><HeaderButton>Search</HeaderButton></Link>
                <Link to="/add"><HeaderButton>Add recipe</HeaderButton></Link>
            </HeaderContainer>
            <HeaderContainer>
            <Link to="/"><HeaderButton>Login</HeaderButton></Link>
            </HeaderContainer>
        </HeaderBar>

    )

}

export default Header;