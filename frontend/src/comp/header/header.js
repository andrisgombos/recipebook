import React from 'react';
import { HeaderContainer } from './style';


const Header = () => {

    return (

        <HeaderContainer>
            <div>
                <button>Home</button>
                <button>Search</button>
                <button>Add recipe</button>
            </div>
                <button>Login</button>
        </HeaderContainer>

    )

}

export default Header;